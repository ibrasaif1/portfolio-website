'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import './globals.css';
import { FileText, ExternalLink, Linkedin, Github, MapPinHouse, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';

const SECTION_COUNT = 2;

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [dragProgress, setDragProgress] = useState(null);
  const containerRef = useRef(null);

  const goLeft = useCallback(() => {
    setActiveSection((prev) => Math.max(0, prev - 1));
  }, []);

  const goRight = useCallback(() => {
    setActiveSection((prev) => Math.min(SECTION_COUNT - 1, prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goLeft();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goRight();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goLeft, goRight]);

  useEffect(() => {
    let accumulatedDelta = 0;
    let resetTimer = null;
    let cooldown = false;
    const THRESHOLD = 50;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (cooldown) return;

      accumulatedDelta += e.deltaX;

      if (Math.abs(accumulatedDelta) >= THRESHOLD) {
        cooldown = true;
        if (accumulatedDelta > 0) goRight();
        else goLeft();
        accumulatedDelta = 0;
        setTimeout(() => { cooldown = false; }, 600);
      }

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { accumulatedDelta = 0; }, 200);
    };

    const el = containerRef.current;
    if (el) el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
      clearTimeout(resetTimer);
    };
  }, [goLeft, goRight]);

  const isSliding = dragProgress !== null;
  const translateVw = isSliding ? -dragProgress * 100 : -activeSection * 100;


  return (
    <div className="h-screen overflow-hidden relative bg-brand-light text-brand-dark">
      <Navbar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onDragProgress={setDragProgress}
      />

      <div className="absolute inset-0 overflow-hidden" ref={containerRef}>
        {activeSection > 0 && (
          <button
            onClick={goLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-brand-dark/40 hover:text-brand-dark/70 transition-colors duration-200 cursor-pointer"
            aria-label="Previous section"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}
        {activeSection < SECTION_COUNT - 1 && (
          <button
            onClick={goRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-brand-dark/40 hover:text-brand-dark/70 transition-colors duration-200 cursor-pointer"
            aria-label="Next section"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        )}

        <div
          className="flex h-full"
          style={{
            transform: `translateX(${translateVw}vw)`,
            transition: isSliding
              ? 'none'
              : 'transform 500ms cubic-bezier(0.32, 0.72, 0, 1)',
          }}
        >
          {/* ── Home Panel ── */}
          <section className="w-screen shrink-0 h-full overflow-y-auto">
            <div className="min-h-full flex items-center px-6 py-20 md:py-24 lg:px-16 xl:px-24">
              <div className="mx-auto grid w-full max-w-7xl items-stretch gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)]">
                <aside className="group relative overflow-hidden flex h-full flex-col justify-center bg-white border border-brand-navy/20 shadow-lg backdrop-blur-xl rounded-3xl p-8">
                  <div className="flex flex-1 flex-col items-center justify-center text-center space-y-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-brand-navy/25 shadow-2xl">
                      <Image
                        src="/selfie.png"
                        alt="Ibrahim Saifullah headshot"
                        width={240}
                        height={240}
                        className="object-cover object-top w-full h-full"
                        priority
                      />
                    </div>
                    <div className="space-y-4 w-full">
                      <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Ibrahim Saifullah</h1>
                        <p className="text-brand-dark/70 text-lg">Lead Software Engineer @ Pushnami</p>
                        <p className="text-brand-dark/60 text-sm md:text-base">
                          I&apos;m a full stack software engineer with a passion for building products that are both functional and delightful.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/20 px-3 py-1 text-sm text-brand-dark/70">
                          <MapPinHouse className="h-4 w-4" aria-hidden /> Austin, TX
                        </span>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <a
                          href="/Ibrahim Saifullah - Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-brand-navy/5 px-4 py-1.5 text-sm text-brand-dark/70 transition hover:border-brand-navy hover:text-brand-navy"
                        >
                          <FileText className="h-4 w-4" aria-hidden />
                          Resume
                        </a>
                        <a
                          href="https://www.linkedin.com/in/ibrahimsaifullah"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-full border border-brand-navy/20 bg-brand-navy/5 p-2 text-brand-dark/70 transition hover:border-brand-navy hover:text-brand-navy"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href="https://github.com/ibrasaif1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-full border border-brand-navy/20 bg-brand-navy/5 p-2 text-brand-dark/70 transition hover:border-brand-navy hover:text-brand-navy"
                          aria-label="GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-navy/20" />
                </aside>

                <div className="flex flex-col gap-6">
                  <div className="grid gap-6 lg:grid-rows-[auto_auto]">
                    <article className="group relative overflow-hidden rounded-3xl border border-brand-navy/20 bg-white backdrop-blur-xl p-10 text-brand-dark shadow-md">
                      <div className="text-sm font-medium text-brand-navy/70">
                        Project
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-brand-dark">
                        <a
                          href="https://topspots.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition hover:text-brand-navy cursor-pointer"
                        >
                          TopSpots
                        </a>
                      </h3>
                      <div className="mt-3 space-y-3 text-sm md:text-base text-brand-dark/70">
                        <p></p>
                        <ul className="space-y-2">
                          <p>TopSpots is a project I&apos;m working on to show the best and most popular places in a city, based on 4.5+ stars and 1,000+ ratings on Google Maps. This web app enables users to:</p>
                          <li>• Become a connoisseur of their city by knowing the absolute best spots</li>
                          <li>• Figure out where to eat in a city they&apos;re visiting</li>
                          <li>• Locate the most lively parts of a city based on concentration of these places</li>
                        </ul>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2 text-xs text-brand-dark/70">
                        {['Next.js', 'TypeScript', 'UI/UX'].map((tag) => (
                          <span key={tag} className="rounded-full border border-brand-navy/20 bg-brand-navy/5 px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://topspots.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-navy/80"
                      >
                        Open project <ExternalLink className="h-4 w-4" aria-hidden />
                      </a>
                      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-navy/20" />
                    </article>

                    <article className="group relative overflow-hidden rounded-3xl border border-brand-navy/20 bg-white backdrop-blur-xl p-10 text-brand-dark shadow-md">
                      <div className="text-sm font-medium text-brand-navy/70">
                        Professional
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-brand-dark">Lead Software Engineer · Pushnami</h3>
                      <div className="mt-3 space-y-3 text-sm md:text-base text-brand-dark/70">
                        <p>Pushnami is a startup where I work on the full stack:</p>
                        <ul className="space-y-2">
                          <li>• <strong>Frontend:</strong> React.js UI changes to improve UX</li>
                          <li>• <strong>Backend:</strong> Build new features in Node.js and Go</li>
                          <li>• <strong>Infrastructure:</strong> Deploy new microservices, build infrastructure with Terraform, or create CI/CD pipelines</li>
                        </ul>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2 text-xs text-brand-dark/70">
                        {['Node.js', 'Go', 'React.js', 'AWS', 'Terraform'].map((tag) => (
                          <span key={tag} className="rounded-full border border-brand-navy/20 bg-brand-navy/5 px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-navy/20" />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Blog Panel ── */}
          <section className="w-screen shrink-0 h-full overflow-y-auto">
            <div className="min-h-full flex items-center justify-center px-6">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-brand-dark">Blog</h2>
                <p className="text-brand-dark/40 text-lg">Coming soon...</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
