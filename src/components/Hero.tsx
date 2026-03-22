"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className="hero-bubblefine" id="home">
      {/* Background with Ken Burns zoom effect */}
      <div className={`hero-bg-zoom ${loaded ? "active" : ""}`}>
        <Image 
          src="/images/about.png" 
          alt="Factory Background" 
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container relative z-10">
        <div className={`hero-content hero-slide-up ${loaded ? "active" : ""}`}>
          <div className="pill-badge dark-accent">
            <span className="pulse-dot"></span> WE MAKE GOODS TRANSIT SAFELY
          </div>
          <h1 className="hero-title text-white">
            The Best Choice For <br />
            <span className="text-blue-light">Your Product Protection</span>
          </h1>
          <p className="hero-subtitle text-gray-300">
            Bubblefine incredibly especially extremely provide premium products. Our blue corrugated plastic boxes are designed for supreme durability, logistics, and performance.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary btn-lg pulse-glow">
              Request a Quote <ArrowRight className="icon-sm" />
            </a>
            <a href="#products" className="btn btn-outline-white btn-lg">
              View Products
            </a>
          </div>
        </div>
        
        <div className={`hero-visual hero-slide-left ${loaded ? "active" : ""}`}>
          <div className="hero-image-wrapper">
            <div className="glass-card floating-card bubble-glass">
              <ShieldCheck className="icon-md text-blue-light" />
              <div>
                <strong>6 Layers Protection</strong>
                <span>Premium Quality</span>
              </div>
            </div>
            
            <div className="hero-main-image-placeholder floating-element-slow">
              <Image 
                src="/images/hero.png" 
                alt="Blue Corrugated Plastic Box" 
                width={800} 
                height={600} 
                className="hero-img-showcase"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
