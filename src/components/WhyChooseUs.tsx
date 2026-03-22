import { Gem, Settings, Truck, Globe2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-header text-center reveal">
          <h2 className="section-title">
            Why <span className="text-blue">Choose Us</span>
          </h2>
          <p className="section-subtitle">
            We combine cutting-edge technology with industry expertise to deliver unmatched packaging solutions.
          </p>
        </div>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card reveal delay-1">
            <div className="feature-icon-wrapper">
              <Gem className="feature-icon" />
            </div>
            <h3 className="feature-title">High-Quality Materials</h3>
            <p className="feature-desc">
              We use only premium, FDA-approved, and highly durable polymers to ensure longevity and safety.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card reveal delay-2">
            <div className="feature-icon-wrapper">
              <Settings className="feature-icon" />
            </div>
            <h3 className="feature-title">Custom Manufacturing</h3>
            <p className="feature-desc">
              Tailor-made designs, dimensions, and colors to perfectly match your specific brand guidelines.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card reveal delay-3">
            <div className="feature-icon-wrapper">
              <Truck className="feature-icon" />
            </div>
            <h3 className="feature-title">Fast Delivery</h3>
            <p className="feature-desc">
              Optimized supply chain and logistics guarantee that your orders arrive on time, every time.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="feature-card reveal delay-4">
            <div className="feature-icon-wrapper">
              <Globe2 className="feature-icon" />
            </div>
            <h3 className="feature-title">Industry Expertise</h3>
            <p className="feature-desc">
              Decades of combined experience supplying reliable solutions across diverse industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
