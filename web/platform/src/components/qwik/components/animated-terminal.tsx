import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { terminalTabs } from "./terminal-data";

export const AnimatedTerminal = component$(() => {
  const activeTab = useSignal(0);
  const displayedLines = useSignal<string[]>([]);
  const currentInput = useSignal("");
  const isTyping = useSignal(false);
  const terminalRef = useSignal<HTMLDivElement>();

  useVisibleTask$(({ track, cleanup }) => {
    track(() => activeTab.value);

    // Reset animation when tab changes
    displayedLines.value = [];
    currentInput.value = "";
    isTyping.value = false;

    const currentTab = terminalTabs[activeTab.value];
    let timeoutId: number;
    let lineIndex = 0;

    const animate = () => {
      if (lineIndex >= currentTab.lines.length) {
        // Restart animation after 3 seconds
        timeoutId = window.setTimeout(() => {
          displayedLines.value = [];
          currentInput.value = "";
          isTyping.value = false;
          lineIndex = 0;
          animate();
        }, 3000);
        return;
      }

      const line = currentTab.lines[lineIndex];
      const isShellCommand = line.text.startsWith("curl") || line.text.startsWith("docker");
      const isPrompt = line.text.startsWith(">");
      const isCommand = isShellCommand || isPrompt;

      if (isCommand) {
        // Show command pasted in bottom input (instant)
        isTyping.value = true;
        currentInput.value = line.text;

        // After brief pause, move to output
        timeoutId = window.setTimeout(() => {
          // Only prefix shell commands with $, not Claude prompts
          const prefix = isShellCommand ? "$ " : "";
          displayedLines.value = [...displayedLines.value, prefix + line.text];
          currentInput.value = "";
          isTyping.value = false;
          lineIndex++;

          // Auto-scroll
          if (terminalRef.value) {
            terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
          }

          timeoutId = window.setTimeout(animate, line.delay || 300);
        }, 800);
      } else {
        // Output line - appears instantly
        const isDownloading = line.text.includes("Downloading");
        const isStatus = line.text.startsWith("STATUS:");

        if (isStatus) {
          // Status lines replace each other (animated token counter)
          const statusText = line.text.substring(7); // Remove "STATUS:" prefix
          const lastLine = displayedLines.value[displayedLines.value.length - 1];

          if (lastLine && lastLine.startsWith("Generating..")) {
            // Replace previous status line
            const newLines = [...displayedLines.value];
            newLines[newLines.length - 1] = statusText;
            displayedLines.value = newLines;
          } else {
            // First status line
            displayedLines.value = [...displayedLines.value, statusText];
          }
        } else if (isDownloading) {
          // Extract layer ID (e.g., "a1d0c7532777")
          const layerId = line.text.split(":")[0];
          const lastLine = displayedLines.value[displayedLines.value.length - 1];

          // If last line was this same layer downloading, replace it (animate in place)
          if (lastLine && lastLine.includes(layerId) && lastLine.includes("Downloading")) {
            const newLines = [...displayedLines.value];
            newLines[newLines.length - 1] = line.text;
            displayedLines.value = newLines;
          } else {
            // First download line for this layer
            displayedLines.value = [...displayedLines.value, line.text];
          }
        } else {
          // Regular output line
          displayedLines.value = [...displayedLines.value, line.text];
        }

        lineIndex++;

        // Auto-scroll
        if (terminalRef.value) {
          terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
        }

        timeoutId = window.setTimeout(animate, line.delay || 100);
      }
    };

    animate();

    cleanup(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    });
  });

  return (
    <div class="w-full max-w-5xl mx-auto">
      {/* Tab headers */}
      <div class="flex gap-0 mb-0">
        {terminalTabs.map((tab, index) => (
          <button
            key={tab.name}
            type="button"
            onClick$={() => {
              activeTab.value = index;
            }}
            class={`px-4 py-3 font-medium transition-all duration-200 ${
              activeTab.value === index
                ? "bg-[#2d3748] text-white border-t-2 border-l-2 border-r-2 border-[#4a5568] rounded-t"
                : "bg-[#1a202c] text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Terminal window - agentic bottom-input layout */}
      <div class="bg-[#2d3748] rounded-b rounded-tr border-2 border-[#4a5568] h-[500px] flex flex-col overflow-hidden">
        {/* Output area - scrolls */}
        <div
          ref={terminalRef}
          class="flex-1 overflow-y-auto overflow-x-hidden p-6 font-mono text-sm"
        >
          <div class="space-y-1">
            {displayedLines.value.map((line, index) => {
              let colorClass = "text-gray-200";

              // Order: specific to generic
              if (line.startsWith("$")) {
                colorClass = "text-purple-400 font-semibold";
              } else if (line.startsWith("Using /")) {
                colorClass = "text-blue-400";
              } else if (line.startsWith("  ")) {
                // Indented details (subdued)
                colorClass = "text-gray-400";
              } else if (line.includes("✓") || line.includes("passed") || line.includes("complete") || line.includes("ready")) {
                colorClass = "text-green-400";
              } else if (line.includes("Generating") || line.includes("tokens") || line.includes("thought for")) {
                colorClass = "text-cyan-300";
              } else if (line.includes("INFO")) {
                colorClass = "text-cyan-400";
              }

              return (
                <div key={`line-${index}`} class={`break-all overflow-wrap-anywhere ${colorClass}`}>
                  {line}
                </div>
              );
            })}
          </div>
        </div>

        {/* Input area - fixed at bottom like Claude Code */}
        <div class="border-t-2 border-[#4a5568] p-4 bg-[#1a202c]">
          <div class="flex items-center gap-3 overflow-hidden">
            <span class="text-purple-400 select-none font-bold text-lg flex-shrink-0">{'>'}</span>
            <div class="flex-1 font-mono text-sm text-white overflow-hidden">
              <span class="break-all">{currentInput.value}</span>
              {isTyping.value && (
                <span class="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse flex-shrink-0" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
