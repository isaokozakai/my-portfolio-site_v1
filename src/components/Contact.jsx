const Contact = (props) => (
  <section id="contact" className="container">
    <h2 className="headline">CONTACT</h2>
    <div className="contact-content">
      <div className="email">
        <a href="mailto:isaokozakai@gmail.com">isaokozakai@gmail.com</a>
      </div>
      <div className="social-media">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/isao-kozakai-019536a2/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-3x" aria-hidden="true" />
        </a>
        {/* GitHub */}
        <a href="https://github.com/isaokozakai" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square fa-3x" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
