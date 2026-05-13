import { component$ } from "@builder.io/qwik";

import { VideoCard } from "../components/cards.tsx";
import { Label } from "../components/text.tsx";

const benefits = [
  {
    link: "https://nativelink-cdn.s3.us-east-1.amazonaws.com/robotics.mp4",
    headline: "Written in Rust. Built for scale.",
    description:
      "Memory-safe, race-free, no garbage collector to stall your hot path. Over a billion build requests a month, in production.",
  },
  {
    link: "https://nativelink-cdn.s3.us-east-1.amazonaws.com/video recognition.mp4",
    headline: "Ten minutes to your first cache hit.",
    description:
      "One Docker command. Drops into your existing Bazel, Buck2, Reclient, or CMake setup with zero rewrites.",
  },
  {
    link: "https://nativelink-cdn.s3.us-east-1.amazonaws.com/medicine_tech.mp4",
    headline: "Works with what you've got.",
    description:
      "C++, Rust, Python, Go, and more. Bazel, Buck2, Reclient, and CMake. AWS, GCP, or your own hardware. No lock-in.",
  },
];

export const Benefits = component$(() => {
  return (
    <div class="flex w-full flex-col items-center justify-center gap-16 section-spacing-major section-divider">
      <div class="text-center px-6">
        <h2 class="text-3xl md:text-5xl font-bold text-black mb-4">
          The NativeLink Difference
        </h2>
      </div>
      <div class="flex flex-col gap-10 md:flex-row max-w-6xl mx-auto px-6">
        {benefits.map((benefit, _index) => (
          <VideoCard
            key={benefit.link}
            link={benefit.link}
            headline={benefit.headline}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
});
