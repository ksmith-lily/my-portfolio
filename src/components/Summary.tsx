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
          I’m a Full Stack Software Developer with over four years of experience building web applications from idea to launch. I enjoy working across the full stack, whether I’m creating user-friendly interfaces with React and Vue or building the back end with Django, FastAPI, and Laravel.
          <br></br><br></br>
          I’ve worked on everything from APIs and third-party integrations to authentication, payments, databases, testing, and deployment. I enjoy solving real-world problems, learning new technologies, and building applications that are reliable, maintainable, and easy to use.        </div>
      </div>
    </div>
  );
}