type ProjectProps = {
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  websiteUrl: string;
  githubUrl: string;
  description: string;
};

const Project = ({ imageSrc, imageAlt, technologies, websiteUrl, githubUrl, description }: ProjectProps) => (
  <div className="border border-[#666] bg-[#ddd]">
    <div className="group h-52.5 w-full overflow-hidden">
      <img
        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.3]"
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
    <div className="px-3.75 text-left text-[17px]">
      <p className="min-h-17.5">{description}</p>
      <ul className="mt-1.25 flex min-h-15 list-none flex-wrap content-start justify-start p-0">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="mx-0.75 mb-1.75 inline-block rounded-[5px] border border-black px-0.75 text-center"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
    <div className="my-2.5 mb-3.75 flex justify-evenly">
      <a
        href={websiteUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="inline-block rounded-[5px] bg-[#e69400] px-2.25 py-1.75 text-center text-white transition duration-300 hover:scale-[1.2]"
      >
        Visit Website
      </a>
      <a
        href={githubUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="inline-block rounded-[5px] bg-[#333] px-2.25 py-1.75 text-center text-white transition duration-300 hover:scale-[1.2]"
      >
        <i className="fab fa-github fa-1x mr-1.25" />
        Learn More
      </a>
    </div>
  </div>
);

export default Project;
