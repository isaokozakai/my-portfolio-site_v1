import Skills from './partials/Skills';

const headlineClass =
  "relative z-0 mt-5 mb-[55px] inline-block text-center text-[35px] font-black after:absolute after:-bottom-[5px] after:left-1/4 after:block after:h-1 after:w-1/2 after:bg-[#228b22] after:content-['']";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto min-h-screen scroll-mt-12 px-7.5 py-7.5 text-center md:px-22.5 md:py-10 lg:px-37.5"
    >
      <h2 className={headlineClass}>ABOUT</h2>
      <div className="flex flex-col items-start justify-center text-center">
        <div className="mb-5 w-full max-w-187.5 px-2.5 text-[18px] leading-6.25 md:mx-auto md:px-10">
          <h3 className="mt-0 text-2xl">Who I am</h3>
          <p className="my-4 text-[#4d4d4d]">
            My name is Isao Kozakai, and I'm a full-stack software developer based in Montreal, originally
            from Japan. With 8+ years of experience, I build responsive web and mobile applications with
            TypeScript, React, Node.js, Go, PostgreSQL, and MongoDB. I focus on user-centered solutions and on
            getting the details right. Outside of work, I practice Jeet Kune Do, a martial art founded by
            Bruce Lee. His philosophy and life have been a great inspiration to me ever since I began my
            journey in martial arts.
          </p>
          <h3 className="mt-10 text-2xl">How I work</h3>
          <p className="my-4 text-[#4d4d4d]">
            I’m always eager to learn new technologies and confident in my ability to adapt quickly.
            <br />
            As a dedicated, detail-oriented team player, I thrive under pressure and consistently deliver
            high-quality work. I back that work with unit tests and careful code review.
          </p>
        </div>
        <div className="mt-5 w-full">
          <h3 className="text-2xl">My Skills</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
