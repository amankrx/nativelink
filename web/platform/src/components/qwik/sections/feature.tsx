import { component$ } from "@builder.io/qwik";

import {
  CAS,
  FreeCloud,
  RBE,
  Security,
} from "../../media/icons/productIcons.tsx";

import { BorderlessCard } from "../components/cards.tsx";
import { Label } from "../components/text.tsx";

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
        <h2 class="text-3xl md:text-5xl font-bold text-black mb-4">
          What You Get
        </h2>
      </div>
      <div class="flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center md:gap-6 max-w-6xl mx-auto px-6">
        {products.map((product, _index) => (
          <BorderlessCard
            key={product.headline}
            icon={product.icon}
            headline={product.headline}
            text={product.text}
          />
        ))}
      </div>
    </div>
  );
});
