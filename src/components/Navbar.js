'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-sky-100 shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="#about" className="cursor-pointer">
            IS.
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          <a 
            href="/Ibrahim Saifullah - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 cursor-pointer"
            >
            Resume
          </a>
          <Link href="#about" className="hover:text-gray-700 cursor-pointer">
            About
          </Link>
          <Link href="#internships" className="hover:text-gray-700 cursor-pointer">
            Internships
          </Link>
          <Link href="#projects" className="hover:text-gray-700 cursor-pointer">
            Projects
          </Link>
          <Link href="#cooking" className="hover:text-gray-700 cursor-pointer">
            Cooking
          </Link>
          {/* Add icons */}
          <a href="https://www.linkedin.com/in/ibrahimsaifullah" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 cursor-pointer ml-4">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/ibrasaif1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;