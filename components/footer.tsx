"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin as LinkedInIcon,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Products", href: "#products" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Blog", href: "/blog" },
    ],
    Resources: [
      { name: "Product Catalog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Technical Specs", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    Support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Order Status", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Warranty", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Certifications", href: "#" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      className: "bg-[#1877F2] hover:brightness-110",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      className:
        "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 hover:brightness-110",
    },
    {
      icon: LinkedInIcon,
      href: "#",
      label: "LinkedIn",
      className: "bg-[#0A66C2] hover:brightness-110",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      className: "bg-[#1DA1F2] hover:brightness-110",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TP</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">TECHHUB</p>
                <p className="text-xs text-blue-400">POLYPACK</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Premium plastic crates & industrial packaging solutions for every
              business.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+919662291155"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                <Phone
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">+91 96622 91155</span>
              </a>
              <a
                href="mailto:techhubpolypack05@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                <Mail
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">techhubpolypack05@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm pt-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Pan-India presence with manufacturing & distribution
                  facilities
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={
                        link.href.startsWith("#") && !isHomePage
                          ? `/${link.href}`
                          : link.href
                      }
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>© {currentYear} TechHub Polypack. All rights reserved.</p>
              <p className="mt-2">
                ISO 9001:2015 | FDA Approved | Made in India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-start md:justify-end gap-4">
              <p className="text-sm text-gray-400 mr-4">Follow us:</p>
              {socialLinks.map(({ icon: Icon, href, label, className }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`group w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm transition-all ${className}`}
                >
                  <Icon
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          <p>
            Developed with love by EthosGrwoth |{" "}
            <a
              href="https://ethosgrowth.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ethosgrowth.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
