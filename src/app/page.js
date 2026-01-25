'use client';

import { Separator } from '@radix-ui/react-separator';
import CollapsibleCard from '../components/CollapsibleCard';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel';
import './globals.css';
import Head from 'next/head';
import { FileText, ExternalLink, Linkedin, Github, MapPinHouse } from 'lucide-react';
import { cookingGalleries } from '../data/cookingGalleries';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntroVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth overscroll-y-none bg-slate-950 text-slate-100">
      <section id="hero" className="relative min-h-screen w-full snap-start">
        {/* Blueprint Table Layout - border-collapse gives us clean shared borders */}
        <table className="w-full min-h-screen border-collapse table-fixed">
          <colgroup>
            <col className="hidden md:table-column w-[minmax(40px,1fr)]" style={{ width: '8%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '50%' }} />
            <col className="hidden md:table-column" style={{ width: '8%' }} />
          </colgroup>
          <tbody>
            {/* Row 1: Top spacer */}
            <tr className="hidden md:table-row">
              <td className="border border-white/20 h-16" />
              <td className="border border-white/20 h-16" />
              <td className="border border-white/20 h-16" />
              <td className="border border-white/20 h-16" />
            </tr>

            {/* Row 2: Main content */}
            <tr>
              {/* Left spacer */}
              <td className="hidden md:table-cell border border-white/20" />
              
              {/* Profile Block */}
              <td className="border border-white/20 p-8 md:p-10 align-middle" rowSpan={2}>
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-white/30">
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
                      <h1 className="text-3xl md:text-4xl font-bold text-white">Ibrahim Saifullah</h1>
                      <p className="text-slate-200 text-lg">Lead Software Engineer @ Pushnami</p>
                      <p className="text-slate-300 text-sm md:text-base">
                        I like working on the full stack, combining speed and performance with style and delight.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-2 border border-white/30 px-3 py-1 text-sm text-slate-100">
                        <MapPinHouse className="h-4 w-4" aria-hidden /> Austin, TX
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <a
                        href="/Ibrahim Saifullah - Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/30 px-4 py-1.5 text-sm text-slate-100 transition hover:border-white hover:text-white hover:bg-white/10"
                      >
                        <FileText className="h-4 w-4" aria-hidden />
                        Resume
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ibrahimsaifullah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-white/30 p-2 text-slate-100 transition hover:border-white hover:text-white hover:bg-white/10"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="https://github.com/ibrasaif1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-white/30 p-2 text-slate-100 transition hover:border-white hover:text-white hover:bg-white/10"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </td>

              {/* Featured Project Block */}
              <td className="border border-white/20 p-8 md:p-10 text-slate-100 align-top">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/80">
                  Featured Project
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  <a
                    href="https://topspots.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition hover:text-blue-200 cursor-pointer"
                  >
                    TopSpots
                  </a>
                </h3>
                <div className="mt-3 space-y-3 text-sm md:text-base text-slate-200">
                  <p>TopSpots is a project I'm working on to show the best and most popular places in a city, based on 4.5+ stars and 1,000+ ratings on Google Maps. This web app enables users to:</p>
                  <ul className="space-y-2">
                    <li>• Become a connoisseur of their city by knowing the absolute best spots</li>
                    <li>• Figure out where to eat in a city they're visiting</li>
                    <li>• Locate the most lively parts of a city based on concentration of these places</li>
                  </ul>
                </div>
                <a
                  href="https://topspots.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-100"
                >
                  Open project <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </td>
              
              {/* Right spacer */}
              <td className="hidden md:table-cell border border-white/20" />
            </tr>

            {/* Row 3: Current Role */}
            <tr>
              {/* Left spacer */}
              <td className="hidden md:table-cell border border-white/20" />
              
              {/* Profile cell is rowSpan=2, so skip it here */}

              {/* Current Role Block */}
              <td className="border border-white/20 p-8 md:p-10 text-slate-100 align-top">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300/80">
                  Current Role
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">Lead Software Engineer · Pushnami</h3>
                <div className="mt-3 space-y-3 text-sm md:text-base text-slate-200">
                  <p>Pushnami is a startup where I work on the full stack:</p>
                  <ul className="space-y-2">
                    <li>• <strong>Frontend:</strong> React.js UI changes to improve UX</li>
                    <li>• <strong>Backend:</strong> Build new features in Node.js and Go</li>
                    <li>• <strong>Infrastructure:</strong> Deploy new microservices, build infrastructure with Terraform, or create CI/CD pipelines</li>
                  </ul>
                </div>
              </td>
              
              {/* Right spacer */}
              <td className="hidden md:table-cell border border-white/20" />
            </tr>

            {/* Row 4: Navigation row */}
            <tr>
              <td className="hidden md:table-cell border border-white/20 h-20" />
              <td className="border border-white/20 h-20" />
              <td className="border border-white/20 h-20 text-center">
                <a
                  href="#cooking"
                  aria-label="Scroll to cooking section"
                  className="text-3xl text-white/60 transition hover:text-white"
                >
                  ↓
                </a>
              </td>
              <td className="hidden md:table-cell border border-white/20 h-20" />
            </tr>

            {/* Row 5: Bottom spacer */}
            <tr className="hidden md:table-row">
              <td className="border border-white/20 h-16" />
              <td className="border border-white/20 h-16" />
              <td className="border border-white/20 h-16" />
              <td className="border border-white/20 h-16" />
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cooking" className="relative px-6 pb-32 pt-32 snap-start md:px-16 xl:px-24 max-h-screen overflow-y-auto">
        <a
          href="#hero"
          aria-label="Scroll back to hero section"
          className="absolute top-12 left-1/2 -translate-x-1/2 text-3xl text-white/60 transition hover:text-white"
        >
          ↑
        </a>
        <div
          ref={introRef}
          className={`mx-auto max-w-3xl text-center mb-12 transition-all duration-1000 ease-out ${
            isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
            One thing I'm interested in is cooking.
          </p>
          <p className="mt-3 text-lg md:text-xl text-slate-300 font-light">
            Check out some of the food I've made!
          </p>
        </div>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-10 text-slate-100 shadow-2xl backdrop-blur-xl ">
          <h2 className="text-2xl font-semibold text-white">Cooking</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cookingGalleries.map((gallery) => (
              <ImageCarousel key={gallery.caption} images={gallery.images} caption={gallery.caption} />
            ))}
          </div>
        </div>
      </section>
      <div className="h-24" aria-hidden />
    </div>
  );
}
