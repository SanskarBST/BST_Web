// File: src/components/Navbar/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../../assets/brandmars.svg';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl flex items-center justify-between pl-4 pr-1.5 py-1.5 bg-[#0D041A]/80 backdrop-blur-md border border-t-0 border-white/10 rounded-b-2xl shadow-lg">

      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer">
        <div className="scale-[1.8] ml-4 mt-1">
          <img
            src={myLogo}
            alt="Brandsmashers Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/70 mt-1">

        <Link
          to="/about"
          className="hover:text-white transition-colors duration-300"
        >
          About Us
        </Link>

        {/* Services Dropdown */}
        <div className="relative group py-4">
          <button className="flex items-center gap-1 hover:text-white transition-colors duration-300 cursor-pointer outline-none">
            Services

            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="flex flex-col w-64 bg-[#0D041A] border border-white/10 rounded-xl shadow-2xl p-2">

              <Link
                to="/services/ai-ml"
                className="px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-left"
              >
                 AI/ML Software Development
              </Link>

              <Link
                to="/services/agentic-ai"
                className="px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-left"
              >
                 Agentic AI Software Development
              </Link>

              <Link
                to="/services/data-engineering"
                className="px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-left"
              >
                 Data Engineering
              </Link>

              <Link
                to="/services/app-development"
                className="px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-left"
              >
                 Mobile, iOS, Android & Web Development
              </Link>

              <Link
                to="/services/cloud-consulting"
                className="px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-left"
              >
                 Quality Assurance (QA)
              </Link>

              {/* 🔥 Fully Linked to Custom Software */}
              <Link
                to="/services/custom-software"
                className="px-4 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-left"
              >
                 Custom Software & Product Development
              </Link>

            </div>
          </div>
        </div>

        <a
          href="#portfolio"
          className="hover:text-white transition-colors duration-300"
        >
          Work
        </a>

        <Link
          to="/careers"
          className="hover:text-white transition-colors duration-300"
        >
          Careers
        </Link>

        <a
          href="#resources"
          className="hover:text-white transition-colors duration-300"
        >
          Resources
        </a>
      </div>

      {/* CTA Button */}
      <div className="mt-1">
        <a
          href="#contact"
          className="hidden md:inline-block rounded-lg bg-gradient-to-r from-[#FF2E2B] to-[#e61c19] px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(255,46,43,0.4)] hover:shadow-[0_0_20px_rgba(255,46,43,0.7)]"
        >
          Contact Us
        </a>
      </div>

    </nav>
  );
}