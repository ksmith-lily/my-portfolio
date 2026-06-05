import Typewriter from "./Typewriter";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

export default function Hero() {
  return (
    <div className="border-b border-gray-200 dark:border-zinc-800 text-center">
      <div className="flex flex-col justify-start items-start">
        <SectionLabel marginClass="-mb-2">
            FULL STACK
        </SectionLabel>
        <SectionTitle className="xl:text-6xl lg:text-6xl text-4xl">
          Software Developer
        </SectionTitle>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <Typewriter text="< I’m passionate about writing clean code, continuous learning, and my cats. />" />
      </div>
      <div className="flex flex-col gap-2 justify-end items-end">
        <SectionTitle className="xl:text-8xl lg:text-8xl text-4xl">
          Karen Angelica Smith
        </SectionTitle>
        {/* <p className="text-lg text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
    </div>
  );
}