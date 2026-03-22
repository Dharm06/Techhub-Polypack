import { Package, Linkedin, Twitter, Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo footer-logo">
            <Package className="logo-icon text-white" />
            <span className="logo-text text-white">
              TechHub <span className="text-blue-light">Polypack</span>
            </span>
          </a>
          <p className="footer-desc">
            Premium modern industrial plastic packaging solutions designed to build trust and deliver unmatched quality.
          </p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-heading">Products</h4>
          <ul className="footer-links">
            <li><a href="#">Clear Storage Box</a></li>
            <li><a href="#">Industrial Crates</a></li>
            <li><a href="#">Retail Series</a></li>
            <li><a href="#">Custom Solutions</a></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li><MapPin size={20} className="text-blue-light" /> 123 TechHub Industrial Park, City, ST 12345</li>
            <li><Mail size={20} className="text-blue-light" /> info@techhubpolypack.com</li>
            <li><Phone size={20} className="text-blue-light" /> +1 (234) 567-890</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; 2026 TechHub Polypack. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
