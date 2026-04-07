'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const sections = ['Home', 'Blog', 'Cooking'];

const Navbar = ({ activeSection, onSectionChange, onDragProgress }) => {
  const [indicatorPos, setIndicatorPos] = useState({ left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const buttonsRef = useRef([]);
  const dragLeftRef = useRef(0);
  const { theme, toggleTheme } = useTheme();

  const getButtonMeta = useCallback(
    () =>
      buttonsRef.current.map((el) => ({
        left: el?.offsetLeft ?? 0,
        width: el?.offsetWidth ?? 0,
        center: (el?.offsetLeft ?? 0) + (el?.offsetWidth ?? 0) / 2,
      })),
    []
  );

  // Sync indicator position to the active tab when not dragging
  useEffect(() => {
    if (isDragging) return;
    const sync = () => {
      const el = buttonsRef.current[activeSection];
      if (el) {
        setIndicatorPos({ left: el.offsetLeft, width: el.offsetWidth });
        if (!mounted) setMounted(true);
      }
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [activeSection, isDragging, mounted]);

  // Which tab label should light up (follows indicator during drag)
  const getVisualIndex = () => {
    if (!isDragging) return activeSection;
    const meta = getButtonMeta();
    const center = indicatorPos.left + indicatorPos.width / 2;
    let nearest = 0;
    let minDist = Infinity;
    meta.forEach((m, i) => {
      const dist = Math.abs(center - m.center);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    return nearest;
  };

  const visualIndex = getVisualIndex();
  const isDark = theme === 'dark';

  // ── Drag handling — initiated from the active tab's button ──
  const handlePointerDown = (e, index) => {
    if (index !== activeSection) return;

    e.preventDefault();
    setIsDragging(true);

    const startX = e.clientX;
    const startLeft = indicatorPos.left;
    const indicatorWidth = indicatorPos.width;
    dragLeftRef.current = startLeft;

    const meta = getButtonMeta();
    const minLeft = meta[0]?.left ?? 0;
    const maxLeft = meta[meta.length - 1]?.left ?? 0;
    const firstLeft = meta[0]?.left ?? 0;
    const lastLeft = meta[meta.length - 1]?.left ?? 0;
    const range = lastLeft - firstLeft;

    const onMove = (ev) => {
      const dx = ev.clientX - startX;
      const newLeft = Math.max(minLeft, Math.min(maxLeft, startLeft + dx));
      dragLeftRef.current = newLeft;
      setIndicatorPos((prev) => ({ ...prev, left: newLeft }));

      if (onDragProgress && range > 0) {
        onDragProgress(((newLeft - firstLeft) / range) * (sections.length - 1));
      }
    };

    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      setIsDragging(false);

      const positions = getButtonMeta();
      const currentCenter = dragLeftRef.current + indicatorWidth / 2;
      let nearestIndex = 0;
      let minDistance = Infinity;
      positions.forEach((pos, i) => {
        const dist = Math.abs(currentCenter - pos.center);
        if (dist < minDistance) {
          minDistance = dist;
          nearestIndex = i;
        }
      });

      if (onDragProgress) onDragProgress(null);
      onSectionChange(nearestIndex);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  // Pill style varies by theme
  const pillBackground = isDark
    ? (isDragging
        ? 'linear-gradient(180deg, rgba(43,57,109,0.55) 0%, rgba(43,57,109,0.35) 100%)'
        : 'linear-gradient(180deg, rgba(43,57,109,0.4) 0%, rgba(43,57,109,0.25) 100%)')
    : (isDragging
        ? 'linear-gradient(180deg, rgba(43,57,109,0.18) 0%, rgba(43,57,109,0.1) 100%)'
        : 'linear-gradient(180deg, rgba(43,57,109,0.1) 0%, rgba(43,57,109,0.05) 100%)');

  const pillShadow = isDark
    ? (isDragging
        ? '0 0 20px rgba(43,57,109,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
        : 'inset 0 1px 0 rgba(255,255,255,0.06)')
    : (isDragging
        ? '0 0 20px rgba(43,57,109,0.12), inset 0 1px 0 rgba(255,255,255,0.8)'
        : 'inset 0 1px 0 rgba(255,255,255,0.6)');

  const pillBorder = isDark
    ? '1px solid rgba(43,57,109,0.55)'
    : '1px solid rgba(43,57,109,0.15)';

  return (
    <nav className="absolute top-0 left-0 right-0 bg-brand-light/80 dark:bg-brand-dark/80 backdrop-blur-xl z-50 transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl py-3 flex justify-between items-center">
        <div className="flex-1">
          <button
            onClick={() => onSectionChange(0)}
            className="text-2xl font-bold text-brand-dark dark:text-brand-light cursor-pointer"
          >
            Ibrahim
          </button>
        </div>

        <div className="relative flex items-center rounded-full bg-brand-navy/10 dark:bg-brand-navy/80 p-1 select-none transition-colors duration-300">
          {/* ── Glass pill (purely visual) ── */}
          <div
            className={`absolute top-1 bottom-1 rounded-full pointer-events-none ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${indicatorPos.left}px`,
              width: `${indicatorPos.width}px`,
              background: pillBackground,
              boxShadow: pillShadow,
              border: pillBorder,
              transform: isDragging ? 'scaleY(1.14)' : 'scaleY(1)',
              transition: isDragging
                ? 'background 150ms, box-shadow 150ms, transform 150ms'
                : 'left 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1), width 300ms ease, background 200ms, box-shadow 300ms, transform 200ms, opacity 300ms',
            }}
          />

          {/* ── Tab labels (handle drag + click) ── */}
          {sections.map((section, index) => (
            <button
              key={section}
              ref={(el) => (buttonsRef.current[index] = el)}
              onPointerDown={(e) => handlePointerDown(e, index)}
              onClick={() => onSectionChange(index)}
              className={`relative z-10 px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                visualIndex === index
                  ? 'text-brand-dark dark:text-brand-light'
                  : 'text-brand-dark/40 hover:text-brand-dark/70 dark:text-brand-light/40 dark:hover:text-brand-light/80'
              } ${
                index === activeSection
                  ? isDragging
                    ? 'cursor-grabbing'
                    : 'cursor-grab'
                  : 'cursor-pointer'
              }`}
              style={index === activeSection ? { touchAction: 'none' } : undefined}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-end gap-3 text-brand-dark/50 dark:text-brand-light/70">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2 hover:text-brand-dark dark:hover:text-brand-light transition cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/Ibrahim Saifullah - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-brand-dark dark:hover:text-brand-light transition hidden sm:block"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahimsaifullah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-dark dark:hover:text-brand-light transition"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/ibrasaif1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-dark dark:hover:text-brand-light transition"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
