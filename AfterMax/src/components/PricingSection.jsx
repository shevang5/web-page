import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');

  .pricing-root * {
    font-family: 'Archivo', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .pricing-root {
    // background: #07070f;
    min-height: 100vh;
    padding: 96px 24px;
  }

  /* Header */
  .pricing-eyebrow {
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #3b82f6;
    margin-bottom: 16px;
  }

  .pricing-headline {
    text-align: center;
    font-size: clamp(36px, 5vw, 58px);
    font-weight: 800;
    color: #0046BF;
    line-height: 1.05;
    margin-bottom: 16px;
    letter-spacing: -1.5px;
  }

  .pricing-headline span {
    color: #3b82f6;
  }

  .pricing-subtext {
    text-align: center;
    font-size: 16px;
    color: #6b7280;
    max-width: 520px;
    margin: 0 auto 64px;
    line-height: 1.7;
    font-weight: 400;
  }

  /* Agency comparison banner */
  .agency-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: rgba(239, 68, 68, 0.06);
    border: 1px solid rgba(239, 68, 68, 0.18);
    border-radius: 100px;
    padding: 10px 24px;
    width: fit-content;
    margin: 0 auto 56px;
  }

  .agency-banner-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ef4444;
    flex-shrink: 0;
  }

  .agency-banner-text {
    font-size: 13px;
    color: #9ca3af;
    font-weight: 500;
  }

  .agency-banner-text strong {
    color: #ef4444;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    font-weight: 700;
  }

  .agency-banner-arrow {
    color: #22c55e;
    font-size: 13px;
    font-weight: 700;
  }

  /* Grid */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: start;
  }

  @media (max-width: 1100px) {
    .pricing-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .pricing-grid { grid-template-columns: 1fr; }
  }

  /* Base card */
  .p-card {
    background: #0f0f1a;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
    transition: border-color 0.2s, transform 0.2s;
  }

  .p-card:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  /* Featured card */
  .p-card.featured {
    background: linear-gradient(145deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
    border: 1px solid rgba(96, 165, 250, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 32px 64px rgba(37, 99, 235, 0.35);
  }

  .p-card.featured:hover {
    transform: translateY(-12px);
    border-color: rgba(147, 197, 253, 0.5);
  }

  /* Design card */
  .p-card.design-card {
    background: #0f0f1a;
    border: 1px solid rgba(167, 139, 250, 0.15);
  }

  .p-card.design-card:hover {
    border-color: rgba(167, 139, 250, 0.35);
  }

  /* Badge */
  .card-badge {
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    color: #1d4ed8;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px 14px;
    border-radius: 100px;
    white-space: nowrap;
  }

  /* Agency price (strikethrough) */
  .agency-price-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .agency-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #4b5563;
  }

  .featured .agency-label {
    color: rgba(147, 197, 253, 0.5);
  }

  .agency-old-price {
    font-size: 18px;
    font-weight: 700;
    color: #ef4444;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    opacity: 0.7;
  }

  .featured .agency-old-price {
    color: #fca5a5;
    opacity: 0.6;
  }

  /* Main price */
  .card-price {
    font-size: 54px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
    letter-spacing: -2px;
    margin-bottom: 4px;
  }

  .card-price-note {
    font-size: 12px;
    color: #6b7280;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .featured .card-price-note {
    color: rgba(191, 219, 254, 0.7);
  }

  /* Plan name + tagline */
  .card-divider {
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin-bottom: 20px;
  }

  .featured .card-divider {
    background: rgba(255,255,255,0.15);
  }

  .card-name {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
  }

  .card-tagline {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.5;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .featured .card-tagline {
    color: rgba(191, 219, 254, 0.75);
  }

  /* Features */
  .card-features {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
    flex: 1;
  }

  .card-feature {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: #d1d5db;
    line-height: 1.5;
    font-weight: 400;
  }

  .featured .card-feature {
    color: rgba(219, 234, 254, 0.9);
  }

  .feature-check {
    color: #22c55e;
    font-size: 14px;
    flex-shrink: 0;
    margin-top: 1px;
    font-weight: 700;
  }

  .featured .feature-check {
    color: #86efac;
  }

  .feature-highlight {
    font-weight: 700;
    color: #ffffff;
  }

  .featured .feature-highlight {
    color: #ffffff;
  }

  /* Design sub-services */
  .design-services {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  }

  .design-service-row {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px 12px;
    background: rgba(167, 139, 250, 0.05);
    border: 1px solid rgba(167, 139, 250, 0.12);
    border-radius: 8px;
  }

  .design-service-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .design-service-name {
    font-size: 13px;
    font-weight: 700;
    color: #e5e7eb;
  }

  .design-service-price {
    font-size: 15px;
    font-weight: 800;
    color: #a78bfa;
  }

  .design-service-agency {
    font-size: 11px;
    color: #ef4444;
    text-decoration: line-through;
    font-weight: 600;
    opacity: 0.7;
  }

  .design-service-note {
    font-size: 11px;
    color: #6b7280;
    font-weight: 400;
  }

  .design-disclaimer {
    font-size: 11px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 24px;
    padding: 10px 12px;
    background: rgba(255,255,255,0.02);
    border-radius: 6px;
    border-left: 2px solid rgba(167,139,250,0.3);
  }

  /* CTA buttons */
  .card-cta {
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.3px;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    font-family: 'Archivo', sans-serif;
  }

  .cta-default {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #ffffff;
  }

  .cta-default:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.2);
  }

  .cta-featured {
    background: #ffffff;
    color: #1d4ed8;
  }

  .cta-featured:hover {
    background: #eff6ff;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  .cta-design {
    background: rgba(167, 139, 250, 0.1);
    border: 1px solid rgba(167, 139, 250, 0.25);
    color: #a78bfa;
  }

  .cta-design:hover {
    background: rgba(167, 139, 250, 0.18);
    border-color: rgba(167, 139, 250, 0.4);
  }

  /* Bottom note */
  .pricing-footer {
    text-align: center;
    margin-top: 48px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .pricing-footer-note {
    font-size: 15px;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .pricing-footer-note strong {
    color: #0046BF;
    font-weight: 600;
  }

  .pricing-footer-cta {
    background: linear-gradient(135deg, #1e3a8a, #2563eb);
    color: #ffffff;
    border: none;
    padding: 16px 40px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0.3px;
    transition: all 0.2s;
    font-family: 'Archivo', sans-serif;
    box-shadow: 0 8px 32px rgba(37, 99, 235, 0.3);
  }

  .pricing-footer-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(37, 99, 235, 0.4);
  }

  .pricing-guarantee {
    margin-top: 16px;
    font-size: 12px;
    color: #374151;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const CheckIcon = ({ featured }) => (
  <span className={`feature-check ${featured ? "featured" : ""}`}>✓</span>
);

const starterFeatures = [
  { text: "3–5 page website" },
  { text: "Mobile friendly design" },
  { text: "Contact & booking form" },
  { text: "Google-ready local SEO basics" },
  { text: "Delivered in 7 days" },
  { text: "You own it fully — no lock-in" },
];

const growthFeatures = [
  { text: "Everything in Starter" },
  { text: "Up to 8 pages" },
  { text: "Booking system with deposit collection" },
  { text: "Portfolio & gallery section" },
  { text: "Team & artist pages" },
  { text: "Priority delivery in 5 days" },
  { text: <><span className="feature-highlight">9 social media posts</span> to promote your new site</> },
];

const customFeatures = [
  { text: "Everything in Growth" },
  { text: "Custom features for your business" },
  { text: "Advanced booking & automation" },
  { text: "Ongoing maintenance option" },
  { text: "Dedicated support" },
];

const designServices = [
  { name: "Logo Design", price: "from $80", agency: "Agencies: $800+", note: "3 concepts · 2 revisions · all formats · 3–5 days" },
  { name: "Banner Design", price: "from $40", agency: "Agencies: $200+", note: "Web & print-ready files · 1–2 days" },
  { name: "Poster Design", price: "from $50", agency: "Agencies: $300+", note: "Print PDF + web PNG · 2–3 days" },
];

export default function PricingSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <div className="pricing-root">

        {/* Header */}
        <div className="pricing-eyebrow">Transparent Pricing</div>
        <h2 className="pricing-headline ">
          Agency Quality.<br />
          <span>Without the Price Tag.</span>
        </h2>
        <p className="pricing-subtext">
          One-time payment. No monthly fees. No hidden costs. You own everything we build.
        </p>

        {/* Agency comparison banner */}
        <div className="agency-banner">
          <div className="agency-banner-dot"></div>
          <div className="agency-banner-text">
            Other agencies charge <strong>$3,000–$8,000</strong> for the same work
          </div>
          <div className="agency-banner-arrow">→ We don't.</div>
        </div>

        {/* Cards */}
        <div className="pricing-grid">

          {/* STARTER */}
          <div className="p-card">
            <div className="agency-price-row">
              <span className="agency-label">Agencies charge</span>
              <span className="agency-old-price">$3,000+</span>
            </div>
            <div className="card-price">$299</div>
            <div className="card-price-note">one-time · no monthly fees</div>
            <div className="card-divider"></div>
            <div className="card-name">Starter</div>
            <div className="card-tagline">Perfect for businesses with no online presence</div>
            <div className="card-features">
              {starterFeatures.map((f, i) => (
                <div key={i} className="card-feature">
                  <CheckIcon />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <button className="card-cta cta-default">Book a Free Zoom Call →</button>
          </div>

          {/* GROWTH — FEATURED */}
          <div className="p-card featured">
            <div className="card-badge">⭐ Most Popular</div>
            <div className="agency-price-row">
              <span className="agency-label">Agencies charge</span>
              <span className="agency-old-price">$5,000+</span>
            </div>
            <div className="card-price">$499</div>
            <div className="card-price-note">one-time · no monthly fees</div>
            <div className="card-divider"></div>
            <div className="card-name">Growth</div>
            <div className="card-tagline">Perfect for businesses ready to scale online</div>
            <div className="card-features">
              {growthFeatures.map((f, i) => (
                <div key={i} className="card-feature">
                  <CheckIcon featured />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <button className="card-cta cta-featured">Book a Free Zoom Call →</button>
          </div>

          {/* GRAPHIC DESIGN */}
          <div className="p-card design-card">
            <div className="agency-price-row">
              <span className="agency-label" style={{ color: "rgba(167,139,250,0.4)" }}>Agencies charge</span>
              <span className="agency-old-price">$800+</span>
            </div>
            <div className="card-price" style={{ fontSize: "40px", letterSpacing: "-1px", paddingTop: "7px", color: "#a78bfa" }}>Design</div>
            <div className="card-price-note">digital delivery only</div>
            <div className="card-divider" style={{ background: "rgba(167,139,250,0.1)" }}></div>
            <div className="card-name">Graphic Design</div>
            <div className="card-tagline">Logos, banners & posters — delivered as digital files</div>
            <div className="design-services">
              {designServices.map((s, i) => (
                <div key={i} className="design-service-row">
                  <div className="design-service-top">
                    <span className="design-service-name">{s.name}</span>
                    <div style={{ textAlign: "right" }}>
                      <div className="design-service-agency">{s.agency}</div>
                      <div className="design-service-price">{s.price}</div>
                    </div>
                  </div>
                  <div className="design-service-note">{s.note}</div>
                </div>
              ))}
            </div>
            <div className="design-disclaimer">
              ⚠️ Digital files only — PNG, SVG, PDF, JPG. We do not handle printing or physical production.
            </div>
            <button className="card-cta cta-design">Get a Free Quote →</button>
          </div>

          {/* CUSTOM */}
          <div className="p-card">
            <div className="agency-price-row">
              <span className="agency-label">Agencies charge</span>
              <span className="agency-old-price">$10,000+</span>
            </div>
            <div className="card-price" style={{ fontSize: "40px", letterSpacing: "-1px", paddingTop: "7px" }}>Let's Talk</div>
            <div className="card-price-note">custom quote · no surprises</div>
            <div className="card-divider"></div>
            <div className="card-name">Custom</div>
            <div className="card-tagline">For businesses with specific or advanced needs</div>
            <div className="card-features">
              {customFeatures.map((f, i) => (
                <div key={i} className="card-feature">
                  <CheckIcon />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <button className="card-cta cta-default">Book a Free Zoom Call →</button>
          </div>

          

        </div>

        {/* Footer */}
        <div className="pricing-footer">
          <p className="pricing-footer-note">
            Not sure which plan? <strong className="text-[#0046BF]">Book a free call</strong> and we'll tell you exactly what your business needs — honestly.
          </p>
          <button className="pricing-footer-cta">Book a Free Zoom Call →</button>
          <p className="pricing-guarantee">
            Free call · No commitment · Live mockup included
          </p>
        </div>

      </div>
    </>
  );
}