import {
  $,
  type Signal,
  component$,
  useOnDocument,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";

import { NavLink } from "./nav-link.tsx";

import { GitHubIcon, SlackIcon } from "../../media/icons/icons.tsx";
import styles from "./header.css?inline";

const Logo = "/logo-light.svg";

const links = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Community", href: "/community" },
  { name: "Company", href: "/company" },
  { name: "Resources", href: "/resources" },
  { name: "Docs", href: "/docs/introduction/setup" },
  { name: "Pricing", href: "/pricing" },
];

interface URL {
  pathName: string;
}

const HeaderLogo = component$(() => {
  return (
    <a href="/" class="h-full shrink-0 z-50 flex items-center">
      <img
        src={Logo}
        loading="eager"
        fetchPriority="high"
        class="w-44 md:w-[200px]"
        alt="Nativelink Logo"
      />
    </a>
  );
});

interface DesktopNavProps {
  url: URL;
}
const DesktopNav = component$<DesktopNavProps>(({ url }) => {
  return (
    <nav
      class={
        "flex-1 max-w-5xl h-14 hidden md:flex justify-center items-center z-40 transition-all duration-300"
      }
    >
      <ul class="hidden md:flex w-full backdrop-filter backdrop-blur-md text-black px-4 border-[rgb(220,220,220)] z-60 gap-2 rounded-interactive bg-white/80 border-2 h-12 justify-center items-center font-mono">
        {links.map((link) => (
          <NavLink
            key={link.name}
            pathName={url.pathName}
            href={link.href}
            activeClass="font-semibold"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
});

interface MobileNavProps {
  url: URL;
  navState: Signal<boolean>;
}

const MobileNav = component$<MobileNavProps>(({ url, navState }) => {
  return (
    <nav
      class={`fixed top-0 h-full z-40 right-0 w-[100svw] bg-white border-l border-black/10 transition-transform duration-300 ease-in-out ${
        navState.value ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <ul class="text-black w-full h-full flex flex-col justify-center items-center gap-10">
        {links.map((link) => (
          <NavLink
            key={link.name}
            pathName={url.pathName}
            href={link.href}
            activeClass="font-bold border rounded-full border-black/20 px-4 py-2"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
});

interface Hamburger {
  navState: Signal<boolean>;
}

const Hamburger = component$<Hamburger>(({ navState }) => {
  useStylesScoped$(styles);
  return (
    <div class="flex z-60 md:hidden w-[25vw] flex justify-center items-center">
      <button
        onClick$={() => {
          navState.value = !navState.value;
        }}
        class={`hamburger flex justify-center items-center hamburger--slider ${navState.value ? "is-active" : ""}`}
        type="button"
        id="mobile-navigation"
        aria-label="Mobile Navigation"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner" />
        </span>
      </button>
    </div>
  );
});

const Widgets = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="shrink-0 flex flex-row items-center justify-end gap-2 text-[16px]">
      <div class="z-60 flex flex-row gap-2 items-center">
        <a
          target="_blank"
          class="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
          href="https://forms.gle/LtaWSixEC6bYi5xF7"
          rel="noreferrer"
          aria-label="Nativelink Slack channel"
          title="Join our Slack"
        >
          <SlackIcon />
        </a>
        <a
          class="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
          href="https://github.com/tracemachina/nativelink"
          target="_blank"
          rel="noreferrer"
          aria-label="Nativelink GitHub repository"
          title="Clone the Repo"
        >
          <GitHubIcon />
        </a>
      </div>
      <a
        id="button"
        href="/docs/introduction/setup#-quickstart"
        target="_blank"
        class="hidden md:flex bg-black text-white hover:bg-[rgb(40,40,40)] transition-colors duration-200 px-6 min-h-[48px] rounded-interactive justify-center items-center border-2 border-black whitespace-nowrap font-mono text-sm"
        rel="noreferrer"
      >
        Get Started
      </a>
    </div>
  );
});

export const Header = component$((url: URL) => {
  const navState = useSignal(false);
  const scrolled = useSignal(true);

  useOnDocument(
    "scrolled",
    $((e: CustomEvent<boolean>) => {
      scrolled.value = e.detail;
    }),
  );

  useVisibleTask$(() => {
    console.info("Welcome to Nativelink");
  });

  return (
    <header
      class={`${scrolled.value ? "bg-[rgb(248,247,244)]/95 backdrop-blur-sm border-b border-[rgb(220,220,220)]" : "bg-transparent"}
				fixed left-0 right-0 top-8 z-30 flex h-16 py-6 px-4 md:px-8 transition-all duration-500
    w-full justify-between flex-row items-center gap-2`}
    >
      <HeaderLogo />
      <DesktopNav url={url} />
      <Widgets />
      <Hamburger navState={navState} />
      <MobileNav url={url} navState={navState} />
    </header>
  );
});
