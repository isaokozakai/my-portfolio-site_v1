import skillData from '../../assets/skills.json';

const categories = [
  ['languages', 'Languages'],
  ['frontend', 'Frontend'],
  ['backend', 'Backend'],
  ['databases', 'Databases'],
  ['other', 'Other'],
] as const;

const Skills = () => {
  return categories.map(([key, label]) => (
    <div
      key={key}
      className="mx-auto my-10 rounded-[10px] border-2 border-[#cecece] md:mx-22.5 md:flex md:justify-between"
    >
      <div className="mb-2.5 border-b-2 border-[#cecece] md:mb-0 md:flex md:w-1/4 md:items-center md:justify-center md:border-r-2 md:border-b-0 min-[1440px]:w-[15%]">
        <h4 className="my-1.25 text-center text-lg font-medium md:my-auto md:w-full md:p-0 md:text-2xl">
          {label}
        </h4>
      </div>
      <div className="flex flex-row flex-wrap justify-center md:w-3/4 min-[1440px]:w-[85%]">
        {skillData[key].map(({ logoUrl, name }) => (
          <div key={name} className="m-2.5 w-17.5 md:mx-10 md:my-8.75 md:w-21.25">
            <img className="mx-auto h-15 w-full object-contain md:h-21.25" src={logoUrl} alt={name} />
            <p className="text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default Skills;
