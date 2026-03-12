function CTA() {
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-box__content">
            <span className="eyebrow">Get started</span>
            <h2>
              Need a Salesforce consulting partner for your next stage of
              growth?
            </h2>
            <p>
              Whether you need a new implementation, improvements in an existing
              org or long-term support, we can help you define the right path.
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Work email" />
            <input type="text" placeholder="Company" />
            <textarea
              rows="4"
              placeholder="Tell us briefly what you need"
            ></textarea>
            <button type="button" className="btn btn--primary btn--full">
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
