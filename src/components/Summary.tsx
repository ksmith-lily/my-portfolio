import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <div className="text-center py-25">
      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        <div className="text-left  border-t border-dashed border-gray-200 dark:border-zinc-800">
          <SectionLabel border={true}>
            SUMMARY
          </SectionLabel>
          <SectionTitle className="xl:text-5xl lg:text-5xl text-4xl">
            Hi there,
          </SectionTitle>
        </div>

        <div className="xl:text-xl lg:text-xl text-sm text-left my-4 tracking-wide">
          I’m a Full Stack Web Developer with over three years of experience building modern web applications from concept to deployment. I enjoy working across the entire stack, from designing intuitive user interfaces with React and Vue to developing robust back-end systems with Django, FastAPI, and Laravel. Throughout my career, I’ve collaborated in Agile teams, designed RESTful APIs, and applied software engineering principles such as SOLID to create scalable and maintainable solutions. I’m passionate about clean code, continuous learning, and crafting products that deliver meaningful experiences for users.
        </div>
      </div>
    </div>
  );
}