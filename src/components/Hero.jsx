function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">
            Salesforce Consulting for Growing Businesses
          </span>
          <h1>
            We help companies implement, optimize and scale
            <span className="text-accent"> Salesforce</span> with confidence.
          </h1>
          <p className="hero__text">
            From CRM strategy and administration to automation, integrations and
            ongoing support, we build practical Salesforce solutions that
            improve operations, customer experience and visibility across your
            business.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Schedule a Free Consultation
            </a>
            <a href="#services" className="btn btn--secondary">
              Explore Services
            </a>
          </div>

          <div className="hero__stats">
            <div className="stat-card">
              <strong>CRM Strategy</strong>
              <span>Design aligned with business goals</span>
            </div>
            <div className="stat-card">
              <strong>Automation</strong>
              <span>Flows, approvals and scalable processes</span>
            </div>
            <div className="stat-card">
              <strong>Support</strong>
              <span>Reliable continuous improvement</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero-card hero-card--top">
            <p>Salesforce Health Check</p>
            <strong>Improve adoption, data quality and efficiency</strong>
          </div>

          <div className="hero-orb">
            <div className="hero-orb__inner"></div>
          </div>

          <div className="hero-card hero-card--bottom">
            <p>Business-first delivery</p>
            <strong>
              Consulting, implementation and optimization in one team
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
