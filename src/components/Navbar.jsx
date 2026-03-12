function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="brand">
          <span className="brand__logo">S</span>
          <span className="brand__text">Skyforce Consulting</span>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm">
          Book a Call
        </a>
      </div>
    </header>
  );
}

export default Navbar;
