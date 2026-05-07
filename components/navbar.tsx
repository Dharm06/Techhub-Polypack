"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Facebook", href: "#", icon: Facebook },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-10 py-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <a
              href="tel:+919662291155"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-blue-200 transition-colors"
            >
              <Phone size={14} />
              <span className="sm:hidden">+91 96622...</span>
              <span className="hidden sm:inline">+91 96622 91155</span>
            </a>
            <a
              href="mailto:techhubpolypack05@gmail.com"
              className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-blue-200 transition-colors"
            >
              <Mail size={14} />
              <span>techhubpolypack05@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#inquiry"
              className="px-2.5 sm:px-3 py-1 rounded-md bg-white text-blue-700 text-xs sm:text-sm font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Get Quote
            </a>
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-7 w-7 rounded-md border border-white/20 flex items-center justify-center hover:bg-white/15 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-24">
            {/* Logo */}
            <Link
              href="#home"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Techhub Polypack"
                width={100}
                height={100}
                className="h-12 sm:h-14 md:h-[72px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/919662291155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Phone size={16} />
                <span className="text-sm font-semibold">WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100">
              <div className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/919662291155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-lg text-center hover:shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:techhubpolypack05@gmail.com"
                  className="mx-4 px-4 py-2 border border-blue-200 text-blue-700 text-sm font-semibold rounded-lg text-center hover:bg-blue-50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Email Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
