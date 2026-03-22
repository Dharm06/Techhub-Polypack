"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Products() {
  return (
    <section className="section bg-light" id="products">
      <div className="container">
        <div className="section-header text-center reveal">
          <h2 className="section-title">
            Premium <span className="text-blue">Products</span>
          </h2>
          <p className="section-subtitle">
            Discover our range of meticulously crafted plastic boxes for all your industrial and commercial needs.
          </p>
        </div>
        
        <div className="products-grid">
          {/* Product 1 */}
          <div className="product-card reveal delay-1">
            <div className="product-image">
              <Image 
                src="/images/hero.png" 
                alt="Clear Storage Box" 
                width={600} 
                height={450} 
                className="object-cover"
              />
              <div className="product-overlay">
                <span className="badge">In Stock</span>
              </div>
            </div>
            <div className="product-content">
              <h3 className="product-name">ClearView Pro Storage</h3>
              <p className="product-desc">
                Transparent, high-impact resistant containers perfect for organized inventory management.
              </p>
              <a href="#quote" className="product-link">
                Inquire Now <ChevronRight className="icon-sm" />
              </a>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card reveal delay-2">
            <div className="product-image">
              <Image 
                src="/images/product-2.png" 
                alt="Heavy Duty Crate" 
                width={600} 
                height={450}
                className="object-cover" 
              />
            </div>
            <div className="product-content">
              <h3 className="product-name">Industrial Armor Crate</h3>
              <p className="product-desc">
                Heavy-duty industrial crates designed to withstand extreme loads and harsh environments.
              </p>
              <a href="#quote" className="product-link">
                Inquire Now <ChevronRight className="icon-sm" />
              </a>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card reveal delay-3">
            <div className="product-image">
              <Image 
                src="/images/product-3.png" 
                alt="Compact Retail Box" 
                width={600} 
                height={450}
                className="object-cover" 
              />
            </div>
            <div className="product-content">
              <h3 className="product-name">Retail Display Series</h3>
              <p className="product-desc">
                Sleek, aesthetically pleasing boxes that enhance product presentation on retail shelves.
              </p>
              <a href="#quote" className="product-link">
                Inquire Now <ChevronRight className="icon-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
