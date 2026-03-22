"use client";

import { Phone, Lock } from "lucide-react";

export default function LeadGeneration() {
  return (
    <section className="section build-trust-bg" id="quote">
      <div className="container lead-container reveal">
        <div className="lead-content">
          <h2 className="lead-title">Ready to Upgrade Your Packaging?</h2>
          <p className="lead-subtitle">
            Get a customized quote within 24 hours. Our experts are ready to assist you with finding the perfect solution.
          </p>
          <div className="contact-methods">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-btn pulse-glow">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="wa-icon">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat on WhatsApp
            </a>
            <span className="or-divider">OR</span>
            <a href="tel:+1234567890" className="phone-link">
              <Phone size={24} /> Call +1 (234) 567-890
            </a>
          </div>
        </div>
        
        <div className="lead-form-wrapper glass-panel">
          <h3 className="form-title">Request a Quote</h3>
          <form className="quote-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will contact you shortly."); }}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="requirement">Your Requirement *</label>
              <textarea id="requirement" name="requirement" rows={4} required placeholder="Tell us about the boxes, quantity, and specific needs..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
            <p className="form-note">
              <Lock className="icon-sm" /> Your information is secure and confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
