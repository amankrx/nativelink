import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Background } from "../../media/icons/icons.tsx";
import { BackgroundVideo } from "../components/video.tsx";

const _MockUp =
  "https://nativelink-cdn.s3.us-east-1.amazonaws.com/nativelink_dashboard.webp";

const videoMockUp =
  "https://nativelink-cdn.s3.us-east-1.amazonaws.com/Walkthrough+of+Nativelink+Cloud.mp4";

export const Hero = component$(() => {
  return (
    <div class="relative flex w-full flex-col items-center justify-evenly gap-5 pb-10 text-black overflow-hidden">
      {/* Content */}
      <div class="relative z-20 flex w-full flex-col items-center justify-evenly gap-2 pb-10 pt-36 text-black md:w-[900px]">
        <div class="px-12 md:px-0 md:py-12">
          <div class="flex flex-col items-center gap-6 text-center">
            <p class="text-sm md:text-base uppercase tracking-wide text-[rgb(100,100,100)] font-semibold">
              Build infrastructure for the agentic era
            </p>
            <h1 class="text-4xl md:text-7xl font-bold leading-tight">
              When agents write your code, your build system is the bottleneck.
            </h1>
            <p class="text-lg md:text-xl text-[rgb(60,60,60)] max-w-[800px] leading-relaxed">
              NativeLink is the parallel compute platform that keeps builds fast while your codebase — and your agents — multiply. Rust-powered. Open source. Trusted in production for over a billion requests a month.
            </p>
          </div>
        </div>

        <div class="w-full p-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            id="button"
            href="https://github.com/tracemachina/nativelink"
            target="_blank"
            rel="noreferrer"
            class="w-full md:w-auto h-12 px-8 flex items-center bg-black justify-center border-black border-2 border-solid text-white transition-all duration-200 hover:bg-[rgb(40,40,40)] rounded-interactive font-medium"
          >
            Clone the repo
          </a>
          <a
            href="/contact"
            class="w-full md:w-auto h-12 px-8 flex items-center bg-transparent justify-center border-black border-2 border-solid text-black transition-all duration-200 hover:bg-[rgb(248,247,244)] rounded-interactive font-medium"
          >
            Talk to us
          </a>
        </div>

        <div class="w-full flex justify-center items-center">
          <div class="w-9/11 relative">
            <video
              src={videoMockUp}
              class="w-full h-full object-contain self-center shadow-[0px_0px_50px_0px_rgba(96,80,230,0.3)] border-2 border-[rgb(220,220,220)] rounded-interactive"
              autoplay={false}
              loop={true}
              muted={true}
              poster={_MockUp}
              controls={true}
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
