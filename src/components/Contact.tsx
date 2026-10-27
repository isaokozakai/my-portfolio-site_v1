const headlineClass =
  "relative z-0 mt-5 mb-[55px] inline-block text-center text-[35px] font-black after:absolute after:-bottom-[5px] after:left-1/4 after:block after:h-1 after:w-1/2 after:bg-[#228b22] after:content-['']";

const Contact = () => (
  <section id="contact" className="mx-auto mb-12 scroll-mt-12 px-7.5 py-7.5 text-center md:px-22.5 md:py-10">
    <h2 className={headlineClass}>CONTACT</h2>
    <div>
      <div className="mb-7.5 text-[25px] md:text-[30px]">
        <a
          href="mailto:isaokozakai@gmail.com"
          className="relative inline-block text-[#222] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-[#222] after:transition-all after:duration-500 after:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] after:content-[''] hover:after:w-full"
        >
          isaokozakai@gmail.com
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/isao-kozakai-019536a2/"
          rel="noopener noreferrer"
          target="_blank"
          className="mx-1.25"
        >
          <i className="fab fa-linkedin fa-3x text-gray-500" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/isaokozakai"
          rel="noopener noreferrer"
          target="_blank"
          className="mx-1.25"
        >
          <i className="fab fa-github-square fa-3x text-gray-500" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
