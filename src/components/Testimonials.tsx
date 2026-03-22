"use client";

import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "TechHub Polypack revolutionized our supply chain. Their heavy-duty crates drastically reduced our transport damages. Incredibly reliable partner.",
    author: "Michael Roberts",
    role: "Logistics Director",
    initials: "MR"
  },
  {
    text: "The aesthetic appeal of their retail series boxes elevated our product presentation. Plus, their team is highly responsive to custom demands.",
    author: "Sarah Lee",
    role: "Retail Manager",
    initials: "SL"
  },
  {
    text: "Consistent quality, fast deliveries, and competitive pricing. We've completely switched all our packaging needs to TechHub Polypack.",
    author: "James Davidson",
    role: "Operations Head",
    initials: "JD"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header text-center reveal">
          <h2 className="section-title">
            Trusted by <span className="text-blue">Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Hear what our long-term partners have to say about our unyielding quality.
          </p>
        </div>

        <div className="testimonial-slider reveal delay-1">
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div className="testimonial-slide" key={idx}>
                <div className="quote-icon"><Quote size={48} /></div>
                <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initials}</div>
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevTestimonial} aria-label="Previous Testimonial">
              <ArrowLeft />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={nextTestimonial} aria-label="Next Testimonial">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
