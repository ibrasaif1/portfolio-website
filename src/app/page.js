"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AtSign } from "lucide-react";
import "./globals.css";

const links = [
  { label: "Blog", href: "/blog" },
  { label: "TopSpots", href: "https://topspots.fyi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahimsaifullah" },
  { label: "Resume", href: "/Ibrahim Saifullah - Resume.pdf" },
  { label: "GitHub", href: "https://github.com/ibrasaif1" },
];

// Clickable text reveals a rounded background as the cursor approaches — a hint
// of interactivity that only appears when you're near it, and darkens on hover.
function useProximityLift() {
  useEffect(() => {
    const RADIUS = 140; // px from the element where the effect begins
    const NEAR_MAX = 0.07; // background opacity at the cursor's closest approach
    const HOVER = 0.13; // background opacity while actually hovering
    let raf = 0;

    const update = (mx, my) => {
      const els = document.querySelectorAll("[data-lift]");
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        // Distance from the cursor to the nearest edge of the element box
        const nx = Math.max(r.left, Math.min(mx, r.right));
        const ny = Math.max(r.top, Math.min(my, r.bottom));
        const dist = Math.hypot(mx - nx, my - ny);
        const inside = dist === 0;
        const t = Math.max(0, 1 - dist / RADIUS);
        const alpha = inside ? HOVER : t * NEAR_MAX;
        el.style.backgroundColor = `rgba(12, 12, 12, ${alpha.toFixed(3)})`;
      });
    };

    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => update(e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

export default function Home() {
  useProximityLift();

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-light text-brand-dark px-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex items-center gap-6">
          <div className="image-outline w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden">
            <Image
              src="/selfie.png"
              alt="Ibrahim Saifullah"
              width={256}
              height={256}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
              Ibrahim Saifullah
            </h1>
          </div>
        </div>

        <section>
          <p className="text-brand-dark/60 text-pretty">
            I&apos;m a full stack software engineer who pairs fast backends with
            intuitive frontends to create a joyful user experience. I find
            myself most passionate when doing design work.
          </p>
        </section>

        <section className="space-y-1 !mt-4">
          <a
            data-lift
            href="https://topspots.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex -mx-2 -my-0.5 px-2 py-0.5 rounded-lg text-lg sm:text-xl font-medium cursor-pointer"
          >
            TopSpots
          </a>
          <p className="text-brand-dark/60 text-pretty">
            Improved Google Maps restaurant search
          </p>
          <ul className="list-disc pl-5 space-y-1 text-brand-dark/60 text-pretty">
            <li>
              Uses Goroutines for fast backend searches of thousands of
              restaurants at once
            </li>
            <li>
              Uses SSE to keep the user engaged during a search by live
              streaming results back as they come
            </li>
          </ul>
        </section>

        <section className="space-y-1 !mt-4">
          <p className="text-lg sm:text-xl font-medium">
            Lead Software Engineer{" "}
            <AtSign
              strokeWidth={1.75}
              aria-hidden="true"
              className="inline-block relative -top-px mx-1 h-4 w-4 text-brand-dark"
            />{" "}
            <a
              data-lift
              href="https://pushnami.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex -mx-2 px-2 py-0.5 rounded-lg cursor-pointer"
            >
              Pushnami
            </a>
          </p>
          <p className="text-brand-dark/60 text-pretty">
            Working across the full stack — React frontends, Node.js and Go
            services, and infrastructure with AWS and Terraform.
          </p>
        </section>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-base">
          {links.map((link) => (
            <a
              key={link.label}
              data-lift
              href={link.href}
              target={
                link.href.startsWith("http") || link.href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              className="inline-flex items-center -mx-2 px-2 py-0.5 rounded-lg text-brand-dark/50 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
