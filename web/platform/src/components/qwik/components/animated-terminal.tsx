import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface TerminalLine {
  text: string;
  delay?: number; // Delay before starting this line (ms)
}

interface TerminalTab {
  name: string;
  lines: TerminalLine[];
}

const terminalTabs: TerminalTab[] = [
  {
    name: "Linux x86_64 / Mac OS X",
    lines: [
      {
        text: "curl -O \\",
        delay: 0,
      },
      {
        text: "https://raw.githubusercontent.com/TraceMachina/nativelink/v1.0.0/nativelink-config/examples/basic_cas.json5",
        delay: 100,
      },
      {
        text: "",
        delay: 200,
      },
      {
        text: "# See",
        delay: 300,
      },
      {
        text: "https://github.com/TraceMachina/nativelink/pkgs/container/nativelink",
        delay: 100,
      },
      {
        text: "",
        delay: 200,
      },
      {
        text: "docker run \\",
        delay: 300,
      },
      {
        text: "-v $(pwd)/basic_cas.json:/config \\",
        delay: 100,
      },
      {
        text: "-p 50051:50051 \\",
        delay: 100,
      },
      {
        text: "ghcr.io/tracemachina/nativelink:v1.0.0 \\",
        delay: 100,
      },
      {
        text: "config",
        delay: 100,
      },
    ],
  },
  {
    name: "Windows x86_64",
    lines: [
      {
        text: "curl.exe -O \\",
        delay: 0,
      },
      {
        text: "https://raw.githubusercontent.com/TraceMachina/nativelink/v1.0.0/nativelink-config/examples/basic_cas.json5",
        delay: 100,
      },
      {
        text: "",
        delay: 200,
      },
      {
        text: "docker run \\",
        delay: 300,
      },
      {
        text: "-v $(pwd)/basic_cas.json:/config \\",
        delay: 100,
      },
      {
        text: "-p 50051:50051 \\",
        delay: 100,
      },
      {
        text: "ghcr.io/tracemachina/nativelink:v1.0.0 \\",
        delay: 100,
      },
      {
        text: "config",
        delay: 100,
      },
    ],
  },
];

export const AnimatedTerminal = component$(() => {
  const activeTab = useSignal(0);
  const displayedLines = useSignal<string[]>([]);
  const isAnimating = useSignal(false);
  const currentLineIndex = useSignal(0);
  const currentCharIndex = useSignal(0);

  useVisibleTask$(({ track, cleanup }) => {
    track(() => activeTab.value);

    // Reset animation when tab changes
    displayedLines.value = [];
    currentLineIndex.value = 0;
    currentCharIndex.value = 0;
    isAnimating.value = true;

    const currentTab = terminalTabs[activeTab.value];
    let timeoutId: number;

    const animateLine = () => {
      if (currentLineIndex.value >= currentTab.lines.length) {
        isAnimating.value = false;
        // Restart animation after 3 seconds
        timeoutId = window.setTimeout(() => {
          displayedLines.value = [];
          currentLineIndex.value = 0;
          currentCharIndex.value = 0;
          isAnimating.value = true;
          animateLine();
        }, 3000);
        return;
      }

      const line = currentTab.lines[currentLineIndex.value];
      const targetText = line.text;

      if (currentCharIndex.value === 0 && line.delay) {
        // Wait for delay before starting this line
        timeoutId = window.setTimeout(() => {
          animateLine();
        }, line.delay);
        return;
      }

      if (currentCharIndex.value <= targetText.length) {
        const newLines = [...displayedLines.value];
        newLines[currentLineIndex.value] = targetText.slice(
          0,
          currentCharIndex.value,
        );
        displayedLines.value = newLines;

        currentCharIndex.value++;
        timeoutId = window.setTimeout(animateLine, 30); // Typing speed
      } else {
        // Move to next line
        currentLineIndex.value++;
        currentCharIndex.value = 0;
        timeoutId = window.setTimeout(animateLine, 50);
      }
    };

    animateLine();

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
            class={`px-6 py-3 font-medium transition-all duration-200 ${
              activeTab.value === index
                ? "bg-[#2d3748] text-white border-t-2 border-l-2 border-r-2 border-[#4a5568] rounded-t"
                : "bg-[#1a202c] text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Terminal window */}
      <div class="bg-[#2d3748] rounded-b rounded-tr p-8 font-mono text-sm text-gray-100 min-h-[400px] relative overflow-hidden border-2 border-[#4a5568]">
        <div class="space-y-1">
          {displayedLines.value.map((line, index) => (
            <div key={index} class="whitespace-pre-wrap break-all">
              <span class="text-gray-500 select-none">$ </span>
              <span>{line}</span>
              {index === displayedLines.value.length - 1 &&
                isAnimating.value && (
                  <span class="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
