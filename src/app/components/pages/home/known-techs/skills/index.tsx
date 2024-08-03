import Image from "next/image";

interface Skill {
  title: string;
  image: {
    url: string;
  };
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="logos overflow-hidden pt-10 bg-gray-900 whitespace-nowrap relative">
      {repeatedSkills.map((skill, index) => (
        <div key={index} className="logos-slide inline-block p-4">
          <Image
            src={skill.image.url}
            alt={skill.title}
            width={70}
            height={70}
          />
        </div>
      ))}
    </section>
  );
};

export default Skills;
