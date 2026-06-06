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
          <SectionTitle className="xl:text-5xl lg:text-5xl text-4xl text-green-500">
            Hi there,
          </SectionTitle>
        </div>

        <div className="xl:text-xl lg:text-xl text-base text-left my-4 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}