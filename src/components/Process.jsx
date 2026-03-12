const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your business model, pain points, current tools and goals.",
  },
  {
    number: "02",
    title: "Solution Design",
    text: "We define the best Salesforce approach with clear priorities, scope and timeline.",
  },
  {
    number: "03",
    title: "Build & Validate",
    text: "We implement, test and refine the solution with business users and key stakeholders.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    text: "We support adoption, measure results and continue optimizing your Salesforce ecosystem.",
  },
];

function Process() {
  return (
    <section className="section section--light" id="process">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Our Process</span>
          <h2>A simple and reliable delivery model</h2>
          <p>
            We keep projects structured and transparent so your team always
            knows what comes next.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.number}>
              <span className="process-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
