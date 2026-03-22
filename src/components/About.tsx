import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="section bg-slate" id="about">
      <div className="container about-container">
        <div className="about-visual reveal">
          <div className="about-image-wrapper">
            <Image 
              src="/images/about.png" 
              alt="TechHub Manufacturing" 
              width={800} 
              height={600} 
              className="about-img object-cover" 
            />
            <div className="stats-card">
              <span className="stats-number">15+</span>
              <span className="stats-label">Years of Excellence</span>
            </div>
          </div>
        </div>
        <div className="about-content reveal delay-2">
          <div className="pill-badge light-pill">
            About Our Company
          </div>
          <h2 className="section-title text-white">
            Engineering the Future of <span className="text-blue-light">Plastics</span>
          </h2>
          <p className="about-desc text-gray-300">
            At TechHub Polypack, we believe that packaging is more than just a container. It is a promise of quality, a guardian of your products, and a key component of your brand&apos;s identity.
          </p>
          <p className="about-desc text-gray-300">
            With our state-of-the-art manufacturing facilities, we deliver scalable production capabilities without compromising on precision. Our focus on reliability and strength makes us the trusted partner for countless leading businesses.
          </p>
          <ul className="about-list">
            <li><CheckCircle2 className="text-blue-light" /> ISO 9001 Certified Facilities</li>
            <li><CheckCircle2 className="text-blue-light" /> Eco-friendly & Recyclable Options</li>
            <li><CheckCircle2 className="text-blue-light" /> Strict Quality Control Protocols</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
