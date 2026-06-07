import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";


const items = [
  {
    title: "SMART PET FEEDER",
    subtitle: "IoT Project | ESP32, Python, React",
    description:
      "Building a smart pet feeder powered by ESP32 that automates feeding schedules and enables remote management through a connected web interface. The project combines embedded systems, IoT communication, and modern web technologies.",
    github: "#",
    status: "IN PROGRESS"
  },
  {
    title: "KS | PORTFOLIO",
    subtitle: "Web Application | (React) Typescript",
    description:
      "Designed and developed a responsive portfolio website to showcase professional experience, technical skills, and personal projects. Built with React, TypeScript, and Tailwind CSS, featuring dark mode support, interactive UI components, and a modern user experience.",
    github: "https://github.com/karenangelica/study"
  },
  {
    title: "EDITOR HANDLER | THIRD PARTY",
    subtitle: "Desktop Application | (Electron) Javascript",
    description:
      "Developed a desktop application using Electron Framework that enables seamless interaction between web applications and a native editor. Allows web-based platforms to launch and communicate with the desktop editor for enhanced editing workflows.",
    github: "https://github.com/karenangelica/editor-handler"
  },
  {
    title: "DOIT | PRODUCTIVITY APPLICATION",
    subtitle: "Android Application | Kotlin (Android)",
    description:
      "Developed an Android application to manage and organize daily to-do lists, using MVP architecture and RoomDB for local data persistence.",
    github: "https://github.com/karenangelica/doitapp"
  },
  {
    title: "TOEBEANS | CAT ENTHUSIASTS APPLICATION",
    subtitle: "Android Application | Kotlin (Android)",
    description:
      "Built a fun cat photo viewer app using Kotlin and TheCatAPI. Implemented the MVP architecture, integrated Retrofit for API calls, and used RoomDB for local image storage.",
    github: "https://github.com/karenangelica/toebeans"
  },
  {
    title: "K-LAIR | PORTFOLIO WEBSITE",
    subtitle: "Web Application | Django (Python)",
    description:
      "Developed a personal web application for blogging, storing code snippets, and showcasing portfolio projects using the Django framework.",
    github: "https://github.com/karenangelica/k-lair"
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
          <SectionTitle className="xl:text-5xl lg:text-5xl text-4xl">
            Projects.
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch justify-center px-6">
          {items.map((item, index) => {
            const isOdd = index % 2 === 0;
            const isLastGridItem = index === items.length - 1 || index === items.length - 2;

            return (
              <div key={index} className={`
                w-full text-left border-gray-200 border-dashed dark:border-zinc-800 ${isOdd ? 'lg:border-l lg:border-r border-b border-r' : 'lg:border-r border-b border-r'}
                ${!isLastGridItem && 'lg:border-b'}`
              }>
                {/* Title row with circle */}
                <div className="p-10">
                  <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start mb-2">
                    <h3 className="lg:text-xl text-base font-bold tracking-tigtest text-balance">{item.title}</h3>
                    {item.status && 
                      <div className="bg-sky-600 rounded px-2 lg:text-sm text-xs tracking-tigtest text-balance text-white">IN PROGRESS</div>
                    }
                  </div>
                  <p className="text-gray-500 mb-4 lg:text-base text-xs">{item.subtitle}</p>
                  <p className="text-gray-400 mb-4 lg:text-base text-xs">{item.description}</p>
                  <div className="flex justify-end">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 hover:bg-white/10 px-2 py-1 rounded-lg lg:text-2xl text-lg"
                    >
                      <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
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