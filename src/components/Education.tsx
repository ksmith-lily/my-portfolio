import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "BS Information Technology",
    subtitle: "2018 - 2022",
    description:
      "Ateneo De Naga University",
  },
];

export default function Education() {
  return (
    <div className="text-center py-25">
      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        <div className="text-left border-b border-t border-dashed border-gray-200 dark:border-zinc-800">
          <SectionLabel border={true}>
            BACKGROUND
          </SectionLabel>
          <SectionTitle className="text-5xl">
            Education.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 items-start justify-center px-6">
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
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xl">{item.description}</p>
                  <p className="text-xl">{item.subtitle}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}