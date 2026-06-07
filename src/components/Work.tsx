import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "JUNE 2025 - PRESENT",
    company_name: "ARRL, The National Association for Amateur Radio",
    job_title: "Full Stack Web Developer",
    location: "Newington, CT",
    description: [
      "Develop full-stack web applications using Python frameworks (Django, FastAPI) and React to modernize the company's technology stack.",
      "Implement OAuth-based authentication integrated with existing applications.",
      "Introduce unit testing, pre-commit hooks, and CI/CD pipelines using GitHub Actions to improve code quality and reliability.",
      "Deploy and maintain applications on AWS, supporting scalable and reliable production environments."
    ]
  },
  {
    title: "MAY 2024 - MAY 2025",
    company_name: "Nexas America LLC",
    job_title: "Full Stack Web Developer",
    location: "Hampden, MA",
    description: [
      "Led the development of both front-end and back-end components using Vue.js for dynamic user interfaces and PHP with the Laravel framework for robust RESTful API services. Collaborated with UI/UX designers to ensure the development of user-friendly interfaces. ",
      "Worked alongside senior developers to integrate web application functionalities with desktop services, ensuring seamless communication and high performance.",
      "Delivered production-ready solutions, overseeing deployment and continuous improvement of features to ensure scalability and reliability.",
      "Emphasized clean code practices, including SOLID design principles, for long-term project sustainability."
    ]
  },
  {
    title: "DEC 2023 - MAY 2024",
    company_name: "YNS, Philippines Inc.",
    job_title: "Software Engineer II",
    location: "Manila, Philippines",
    description: [
      "Assigned as one of the lead developers and collaborated with a team to improve and build new features of existing PHP Laravel applications.",
      "Took an active part in the integration of Firebase with Vue.js project, contributing to enhanced functionality and user experience.",
      "Assisted new developers with tasks and project-related challenges, ensuring smooth onboarding and successful contributions.",
    ]
  },
  {
    title: "AUG 2022 - AUG 2023",
    company_name: "YNS, Philippines Inc.",
    job_title: "Software Engineer I",
    location: "Manila, Philippines",
    description: [
      "Gained experience with Agile Scrum methodology, including writing and managing user stories, participating in sprint planning, and contributing to iterative development cycles.",
      "Collaborated with a team on multiple projects to develop and implement new features using PHP (Laravel), Vue.js, Nuxt.js, and other modern technologies, hosted on AWS, ensuring high-quality, scalable, and efficient application delivery.",
      "Gained proficiency in unit testing, adopted new technologies, and contributed to improving code quality and development processes.",
    ]
  },
  {
    title: "JAN 2021 - MAY 2022",
    company_name: "Pandalivery",
    job_title: "Web Analyst | Internship",
    location: "Naga City, Philippines",
    description: [
      "Involved in conducting research on emerging technology trends to identify opportunities on improving web applications and adapt to industry changes.",
      "Evaluated and assessed existing web applications, providing essential insights in improving performance and usability.",
    ]
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
                    <div className="h-5 w-5 rounded-full bg-sky-500/20 animate-ping" />
                    
                    {/* inner solid dot */}
                    <div className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.9)]" />
                  </div>

                  {/* title */}
                  <div className="tracking-tighter font-medium text-balance dark:text-sky-500 text-neutral text-left  xl:flex-row lg:flex-row flex-col gap-2 xl:justify-between items-center">
                    <div className="lg:text-3xl text-2xl">{item.job_title}</div> 
                    <div className="lg:text-xl text-lg">{item.title} </div>
                  </div>
                </div>
                {/* Location */}
                <div className="pl-6 px-2 pb-1 -mt-2 flex xl:flex-row lg:flex-row flex-col justify-between">
                  <div className="lg:text-lg text-sm text-left font-normal dark:text-white text-neutral-700">
                    {item.company_name}
                  </div>
                  <div className="lg:text-lg text-sm text-left font-normal dark:text-white text-neutral-700">
                    {item.location}
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`pl-6 px-10 pb-4 ${isLast ? "mb-6" : ""}`}
                >
                  <ul className="list-disc pl-5 space-y-2 lg:text-lg text-sm text-left font-normal dark:text-zinc-400 text-neutral-700">
                    {item.description.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}