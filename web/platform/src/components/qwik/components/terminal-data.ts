export interface TerminalLine {
  text: string;
  delay?: number;
  instant?: boolean;
}

export interface TerminalTab {
  name: string;
  lines: TerminalLine[];
}

export const terminalTabs: TerminalTab[] = [
  {
    name: "Linux x86_64 / Mac OS X",
    lines: [
      { text: "curl -O https://raw.githubusercontent.com/TraceMachina/nativelink/v1.0.0/nativelink-config/examples/basic_cas.json5", delay: 0, instant: true },
      { text: "  % Total    % Received  Time", delay: 200, instant: true },
      { text: "100  2841  100  2841    0:00:01", delay: 50, instant: true },
      { text: "", delay: 300 },
      { text: "docker run -v $(pwd)/basic_cas.json:/config -p 50051:50051 ghcr.io/tracemachina/nativelink:v1.0.0 config", delay: 200, instant: true },
      { text: "", delay: 400 },
      { text: "Unable to find image locally", delay: 200, instant: true },
      { text: "v1.0.0: Pulling from tracemachina/nativelink", delay: 100, instant: true },
      { text: "a1d0c7532777: Downloading [=>              ] 15%", delay: 120, instant: true },
      { text: "a1d0c7532777: Downloading [=======>        ] 45%", delay: 120, instant: true },
      { text: "a1d0c7532777: Downloading [==============> ] 75%", delay: 120, instant: true },
      { text: "a1d0c7532777: Downloading [================] 100%", delay: 120, instant: true },
      { text: "a1d0c7532777: Pull complete", delay: 200, instant: true },
      { text: "7f9a694b6f8c: Downloading [====>           ] 25%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Downloading [=========>      ] 60%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Downloading [==============> ] 90%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Downloading [================] 100%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Pull complete", delay: 200, instant: true },
      { text: "Status: Downloaded newer image", delay: 200, instant: true },
      { text: "", delay: 400 },
      { text: "INFO nativelink::config: Loading config from /config", delay: 200, instant: true },
      { text: "INFO nativelink::cas_server: CAS server listening on 0.0.0.0:50051", delay: 150, instant: true },
      { text: "INFO nativelink::scheduler: Scheduler initialized", delay: 150, instant: true },
      { text: "✓ NativeLink ready to serve builds", delay: 300, instant: true },
    ],
  },
  {
    name: "Windows x86_64",
    lines: [
      { text: "curl.exe -O https://raw.githubusercontent.com/TraceMachina/nativelink/v1.0.0/nativelink-config/examples/basic_cas.json5", delay: 0, instant: true },
      { text: "  % Total    % Received  Time", delay: 200, instant: true },
      { text: "100  2841  100  2841    0:00:01", delay: 50, instant: true },
      { text: "", delay: 300 },
      { text: "docker run -v $(pwd)/basic_cas.json:/config -p 50051:50051 ghcr.io/tracemachina/nativelink:v1.0.0 config", delay: 200, instant: true },
      { text: "", delay: 400 },
      { text: "Unable to find image locally", delay: 200, instant: true },
      { text: "v1.0.0: Pulling from tracemachina/nativelink", delay: 100, instant: true },
      { text: "a1d0c7532777: Downloading [=>              ] 15%", delay: 120, instant: true },
      { text: "a1d0c7532777: Downloading [=======>        ] 45%", delay: 120, instant: true },
      { text: "a1d0c7532777: Downloading [==============> ] 75%", delay: 120, instant: true },
      { text: "a1d0c7532777: Downloading [================] 100%", delay: 120, instant: true },
      { text: "a1d0c7532777: Pull complete", delay: 200, instant: true },
      { text: "7f9a694b6f8c: Downloading [====>           ] 25%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Downloading [=========>      ] 60%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Downloading [==============> ] 90%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Downloading [================] 100%", delay: 120, instant: true },
      { text: "7f9a694b6f8c: Pull complete", delay: 200, instant: true },
      { text: "Status: Downloaded newer image", delay: 200, instant: true },
      { text: "", delay: 400 },
      { text: "INFO nativelink::config: Loading config from /config", delay: 200, instant: true },
      { text: "INFO nativelink::cas_server: CAS server listening on 0.0.0.0:50051", delay: 150, instant: true },
      { text: "INFO nativelink::scheduler: Scheduler initialized", delay: 150, instant: true },
      { text: "✓ NativeLink ready to serve builds", delay: 300, instant: true },
    ],
  },
];
