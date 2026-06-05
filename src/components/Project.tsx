import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/example/project1"
  },
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/example/project1"
  },
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/example/project1"
  },
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/example/project1"
  },
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/example/project1"
  },
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/example/project1"
  },
];

export default function Project() {
  return (
    <div className="text-center py-25">
      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        <div className="text-left border-b border-t border-dashed border-gray-200 dark:border-zinc-800">
          <SectionLabel border={true}>
            PERSONAL
          </SectionLabel>
          <SectionTitle className="text-5xl">
            Projects.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-2 items-start justify-center px-6">
          {items.map((item, index) => {
            const isOdd = index % 2 === 0;
            const isLastGridItem = index === items.length - 1 || index === items.length - 2;

            return (
              <div key={index} className={`
                w-full text-left border-gray-200 border-dashed dark:border-zinc-800 ${isOdd ? 'border-l border-r' : 'border-r'}
                ${!isLastGridItem && 'border-b'}`
              }>
                {/* Title row with circle */}
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 mb-4">{item.subtitle}</p>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}