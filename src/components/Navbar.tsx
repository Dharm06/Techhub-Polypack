"use client";

import { useState, useEffect } from "react";
import { Package, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <Package className="logo-icon" />
            <span className="logo-text">
              TechHub <span className="text-blue">Polypack</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#why-us">Why Us</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="nav-cta">
            <a href="#quote" className="btn btn-primary btn-sm">Get a Quote</a>
          </div>
          <button 
            className="mobile-menu-btn" 
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-links">
          <a href="#products" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#why-us" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#testimonials" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#quote" className="btn btn-primary" style={{ marginTop: "1rem" }} onClick={() => setMobileMenuOpen(false)}>
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
