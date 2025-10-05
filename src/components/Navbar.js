'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/60 bg-slate-900/80 backdrop-blur-xl shadow-lg">
      <div className="mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-24 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="#about" className="cursor-pointer">
            IS.
          </Link>
        </div>
        <div className="space-x-4 flex items-center text-slate-200">
          <a 
            href="/Ibrahim Saifullah - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            >
            Resume
          </a>
          {/* Add icons */}
          <a href="https://www.linkedin.com/in/ibrahimsaifullah" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer ml-4 transition">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/ibrasaif1" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
