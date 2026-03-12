const services = [
  {
    title: "Salesforce Implementation",
    text: "End-to-end setup of Salesforce tailored to your commercial, operational and service processes.",
  },
  {
    title: "Admin & Process Automation",
    text: "Configuration, Flows, validation rules, permissions, reports and dashboards to reduce manual work.",
  },
  {
    title: "Customization & Development",
    text: "Apex, Lightning components and business logic for more complex requirements and scalable solutions.",
  },
  {
    title: "Integrations",
    text: "Connect Salesforce with ERP, websites, APIs, email platforms and internal systems to unify data.",
  },
  {
    title: "Support & Continuous Improvement",
    text: "Ongoing maintenance, backlog execution, issue resolution and optimization after go-live.",
  },
  {
    title: "Functional Consulting",
    text: "Process analysis, solution design, prioritization and roadmap definition with clear business focus.",
  },
];

function Services() {
  return (
    <section className="section section--light" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2>What we can do for your business</h2>
          <p>
            Flexible Salesforce consulting services designed for companies that
            need clarity, speed and long-term maintainability.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__icon">↗</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
