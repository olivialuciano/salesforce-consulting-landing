const items = [
  {
    title: "Business + Technical Vision",
    text: "We translate business needs into practical Salesforce solutions without overengineering.",
  },
  {
    title: "Scalable Architecture",
    text: "We prioritize clean configuration, maintainable automations and sustainable development.",
  },
  {
    title: "Fast Execution",
    text: "Lean processes, clear scope and smart prioritization help your team move faster.",
  },
  {
    title: "Clear Communication",
    text: "We explain the why behind each decision and keep stakeholders aligned from start to finish.",
  },
];

function WhyUs() {
  return (
    <section className="section section--dark" id="why-us">
      <div className="container">
        <div className="section-heading section-heading--dark">
          <span className="eyebrow eyebrow--dark">Why choose us</span>
          <h2>
            A consulting partner focused on outcomes, not just configuration
          </h2>
          <p>
            We combine Salesforce expertise, structured delivery and product
            thinking to help your company get real business value from the
            platform.
          </p>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <div className="why-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
