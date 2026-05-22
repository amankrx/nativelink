import { component$ } from "@builder.io/qwik";

import { GitHub, Slack } from "../../media/icons/icons.tsx";

const connectOn = [
  {
    title: "Connect on Slack",
    description:
      "Join our Slack community to connect with fellow NativeLink users, share tips, and get support from our community and team.",
    link: "https://forms.gle/LtaWSixEC6bYi5xF7",
    icon: <Slack />,
  },
  {
    title: "Collaborate on GitHub",
    description:
      "Explore our open-source projects, contribute to the codebase, and collaborate with other developers.",
    link: "https://github.com/tracemachina/nativelink",
    icon: <GitHub />,
  },
];

const _events = [
  {
    title: "Bazelcon",
    date: "October 14-15, 2024",
    description:
      "Come hang out with us at Bazelcon at the Computer History Museum in Mountain View, CA! We are speaking at the event, so drop by to hear about the cool stuff we’re building with our open-source contributors and the impact we’ve had for our customers. Also come find us around the conference if you want to chat with our team, we love to talk shop and meet our community in-person. Keep an eye on our socials for info on our external meetups that week and other chances to connect with our team during the conference. 1401 N Shoreline Blvd, Mountain View, CA 94043. Hope to see you there!",
  },
  {
    title: "NativeLink’s Pre-launch Event",
    date: "August 13th, 2024",
    description:
      "🎉 Get ready to celebrate with NativeLink Join us on August 13, 2024, from 6:30 PM to 9:30 PM at a private cozy location in San Francisco. NativeLink is excited to provide an evening of fun, excitement, and a sneak peek into what we have been cooking up. Expect good food, great company, and vibes! We can’t wait to see you there! 🎈✨",
  },
  {
    title: "NativeLink’s Pre-launch Party NYC",
    date: "August 9th, 2024",
    description:
      "Join us for an open bar event at the stunning Loft in Flatiron, Manhattan to celebrate NativeLink coming out of stealth! NativeLink is a high-performance build cache and remote execution server, compatible with Bazel, Buck2, Reclient, and other RBE-compatible build systems. It offers drastically faster software builds and hardware test simulations, while reducing infrastructure costs and improving developer experience. Be sure to ⭐️ our project to show your support and get off the waitlist: https://github.com/TraceMachina/nativelink Loft in Flatiron 20 W 23rd St Suite 4, New York, NY 10010, USA",
  },
];

export const CommunityPage = component$(() => {
  return (
    <main class="bg-[rgb(248,247,244)] min-h-screen">
      {/* Hero Section */}
      <div class="section-spacing-major section-divider">
        <div class="max-w-6xl mx-auto px-6">
          <h1 class="text-5xl md:text-7xl font-bold text-black mb-8">
            Join our community
          </h1>

          {/* Connect Cards */}
          <div class="grid md:grid-cols-3 gap-8 mt-16">
            <a
              href="/docs/introduction/setup"
              aria-label="Read the Docs"
              class="card-warm p-8 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200 no-underline items-center text-center"
            >
              <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="rgb(100,100,255)" stroke-width="2">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <path d="M8 7h8M8 11h8M8 15h4" />
              </svg>
              <h3 class="text-2xl font-bold text-black">Read the Docs</h3>
            </a>

            <a
              href="https://forms.gle/LtaWSixEC6bYi5xF7"
              aria-label="Join our Slack"
              class="card-warm p-8 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200 no-underline items-center text-center"
            >
              <div class="flex-shrink-0">
                <Slack />
              </div>
              <h3 class="text-2xl font-bold text-black">Join our Slack</h3>
            </a>

            <a
              href="https://github.com/tracemachina/nativelink"
              aria-label="Clone the Repo"
              class="card-warm p-8 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200 no-underline items-center text-center"
            >
              <div class="flex-shrink-0">
                <GitHub />
              </div>
              <h3 class="text-2xl font-bold text-black">Clone the Repo</h3>
            </a>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div class="section-spacing-major section-divider">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl md:text-5xl font-bold text-black mb-4 text-center">
            Participate in NativeLink Events
          </h2>
          <p class="text-lg text-[rgb(100,100,100)] text-center mb-12 max-w-2xl mx-auto">
            Stay updated on upcoming events, webinars, and meetups. Learn from experts and network with peers.
          </p>

          <div class="grid md:grid-cols-3 gap-8">
            {_events.map(({ title, date, description }) => (
              <div
                key={title}
                class="card-warm p-8 flex flex-col gap-4"
              >
                <h3 class="text-xl font-bold text-black">{title}</h3>
                <p class="text-sm text-[rgb(100,100,100)] font-semibold">{date}</p>
                <p class="text-base text-[rgb(60,60,60)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appreciation Section */}
      <div class="section-spacing-major">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-5xl font-bold text-black mb-6">
            We Love Our Community
          </h2>
          <p class="text-lg text-[rgb(60,60,60)] leading-relaxed mb-8">
            To say thank you to our NativeLink contributors and community members, we’d love to send you something special as a small token of appreciation. Simply fill out the form below, our team will verify your details, and send something special your way.
          </p>
          <a
            href="https://forms.gle/LtaWSixEC6bYi5xF7"
            class="inline-flex bg-black text-white hover:bg-[rgb(40,40,40)] transition-colors duration-200 px-12 min-h-[48px] rounded-interactive justify-center items-center border-2 border-black font-semibold"
          >
            Fill out the form
          </a>
        </div>
      </div>
    </main>
  );
});
