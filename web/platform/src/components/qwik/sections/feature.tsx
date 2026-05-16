import { component$ } from "@builder.io/qwik";

import { CAS, RBE, Security } from "../../media/icons/productIcons.tsx";

import { BorderlessCard } from "../components/cards.tsx";

const products = [
  {
    icon: <CAS />,
    headline: "Faster builds. Lower compute bills.",
    text: "Content-addressable storage means unchanged code never compiles twice — across your team, your CI, and your agents. Every cache hit is a build you don't pay to run.",
  },
  {
    icon: <RBE />,
    headline: "Scale past one machine. Pay only for what you use.",
    text: "Remote build execution distributes compilation across as many cores as you need — and spins them down when you're done. No idle workstations, no idle workers, no idle bill.",
  },
  {
    icon: <Security />,
    headline: "Secure by default.",
    text: "SSO, signed inputs, end-to-end packet integrity. Your source, your artifacts, and your supply chain — locked.",
  },
];

export const Features = component$(() => {
  return (
    <div class="flex flex-col items-center justify-center gap-16 section-spacing-major section-divider">
      <div class="text-center px-6">
        <h2 class="text-3xl md:text-[58px] font-bold text-black mb-4">
          What You Get
        </h2>
      </div>

      {/* Asymmetric 2-up layout - eliminates AI template pattern */}
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="grid md:grid-cols-2 gap-12">
          {/* Left: Primary feature with larger visual weight */}
          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">{products[0].icon}</div>
              <div>
                <h3 class="text-2xl font-bold text-black mb-3 leading-tight">
                  {products[0].headline}
                </h3>
                <p class="text-lg text-[rgb(60,60,60)] leading-relaxed">
                  {products[0].text}
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">{products[2].icon}</div>
              <div>
                <h3 class="text-2xl font-bold text-black mb-3 leading-tight">
                  {products[2].headline}
                </h3>
                <p class="text-lg text-[rgb(60,60,60)] leading-relaxed">
                  {products[2].text}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Feature with emphasis */}
          <div class="bg-[rgb(248,247,244)] border-2 border-[rgb(220,220,220)] rounded-[4px] p-8 flex flex-col justify-center">
            <div class="mb-6">{products[1].icon}</div>
            <h3 class="text-3xl font-bold text-black mb-4 leading-tight">
              {products[1].headline}
            </h3>
            <p class="text-xl text-[rgb(60,60,60)] leading-relaxed">
              {products[1].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
