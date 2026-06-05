import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "1001 Lorem ipsum dolor sit amet.",
    location: "Lorem, IP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "1002 Lorem ipsum dolor sit amet.",
    location: "Lorem, IP",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "1003 Lorem ipsum dolor sit amet.",
    location: "Lorem, IP",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "1004 Lorem ipsum dolor sit amet.",
    location: "Lorem, IP",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Work() {
  return (
    <div className="text-center py-25">
      <div className="flex flex-col">
        
        <div className="text-left border-b border-t border-dashed border-gray-200 dark:border-zinc-800">
          <SectionLabel border={true}>
            PROFESSIONAL
          </SectionLabel>
          <SectionTitle className="text-5xl">
            Experience.
          </SectionTitle>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col gap-1 items-start justify-center">
          
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === items.length - 1;

            return (
              <div key={index} className="w-full border-l border-dashed border-gray-200 dark:border-zinc-800 ml-6">
                {/* Title row with circle */}
                <div className={`relative pl-6 p-2 ${isFirst ? "mt-6" : "mt-6"}`}>
                  {/* glowing dot */}
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    
                    {/* outer glow ring */}
                    <div className="h-5 w-5 rounded-full bg-rose-500/20 animate-ping" />
                    
                    {/* inner solid dot */}
                    <div className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.9)]" />

                  </div>

                  {/* title */}
                  <div className="text-3xl tracking-tighter font-medium text-balance dark:text-rose-500 text-neutral text-left">
                    {item.title}
                  </div>
                </div>
                {/* Location */}
                <div className="pl-6 px-10 pb-1 -mt-1">
                  <div className="text-lg text-left font-normal dark:text-white text-neutral-700">
                    {item.location}
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`pl-6 px-10 pb-4 ${isLast ? "mb-6" : ""}`}
                >
                  <div className="text-lg text-left font-normal dark:text-white text-neutral-700">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}