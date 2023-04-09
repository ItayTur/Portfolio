import { BallCanvas } from "./canvas";
import Section from "./Section";
import { Sections, technologies } from "@/consts";

const Tech = () => {
  return (
    <Section idName={Sections.Tech}>
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tech;
