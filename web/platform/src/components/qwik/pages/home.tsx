import { component$ } from "@builder.io/qwik";

import { Benefits } from "../sections/benefits.tsx";
import { Community } from "../sections/community.tsx";
import { Contributors } from "../sections/contributors.tsx";
import { CTA } from "../sections/cta.tsx";
import { Features } from "../sections/feature.tsx";
import { Hero } from "../sections/hero.tsx";
import { Programmatic } from "../sections/programmatic.tsx";
import { Stats } from "../sections/stats.tsx";
import { Testimonial } from "../sections/testimonials.tsx";

export const LandingPage = component$(() => {
  return (
    <main class="w-full z-20 text-black">
      <Hero />
      <Stats />
      <Testimonial />
      <Contributors />
      <Features />
      <Programmatic />
      <Benefits />
      <CTA />
      <Community />
    </main>
  );
});
