import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "JUNE 2025 - PRESENT",
    company_name: "ARRL, The National Association for Amateur Radio",
    job_title: "Full Stack Web Developer",
    location: "Newington, CT",
    description: [
      "Build and maintain full-stack web applications using Python, Django, FastAPI, React, and relational databases, owning features through development, testing, deployment, and production support.",
      "Building a Django and React e-commerce application for contest awards, integrating contest data through an existing API and Authorize.Net payment processing to support sponsor-funded and winner-purchased awards.",
      "Developed a Django-based application that transformed a manual application process into a digital workflow, providing online submissions, administrative status management, automated email notifications, and third-party API integration.",
      "Developed a React and FastAPI application integrating with WSPR.net for balloon tracking, with OAuth integration to a third-party application for user access management.",
      "Developed a Django-based comparison application with administrative publishing controls and membership-based access, restricting selected data for unauthenticated and non-member users.",
      "Build and maintain CI/CD workflows using GitHub Actions to run unit and feature tests and automate application deployments to AWS EC2.",
      "Work directly with users and stakeholders to gather requirements, troubleshoot issues, and translate business needs into production features and application improvements."
    ]
  },
  {
    title: "MAY 2024 - MAY 2025",
    company_name: "Nexas America LLC",
    job_title: "Full Stack Web Developer",
    location: "Hampden, MA",
    description: [
      "Developed front-end and back-end functionality for production web applications using Vue.js, PHP, Laravel, and RESTful APIs.",
      "Built dynamic Vue.js user interfaces backed by Laravel services and relational data.",
      "Designed and developed RESTful API functionality to support communication between web applications and backend services.",
      "Collaborated with UI/UX designers to translate application requirements and designs into functional, user-friendly interfaces.",
      "Worked alongside senior developers to integrate web applications with desktop services, supporting reliable communication between systems.",
      "Delivered production-ready features from development through deployment and continued maintenance.",
      "Applied SOLID design principles and clean-code practices to improve application maintainability, scalability, and long-term sustainability."
    ]
  },
  {
    title: "DEC 2023 - MAY 2024",
    company_name: "YNS, Philippines Inc.",
    job_title: "Software Engineer II",
    location: "Manila, Philippines",
    description: [
      "Assigned as one of the lead developers responsible for improving and developing new functionality within existing PHP/Laravel applications.",
      "Worked within established production codebases to troubleshoot issues, implement new features, and improve existing functionality.",
      "Integrated Firebase with a Vue.js application, contributing to new functionality and improved user experience.",
      "Collaborated with other developers throughout implementation, testing, and delivery of application changes.",
      "Assisted new developers with technical tasks and project-related challenges, supporting onboarding and successful contributions to the development team."
    ]
  },
  {
    title: "AUG 2022 - AUG 2023",
    company_name: "YNS, Philippines Inc.",
    job_title: "Software Engineer I",
    location: "Manila, Philippines",
    description: [
      "Developed and implemented features across multiple production web applications using PHP, Laravel, Vue.js, and Nuxt.js.",
      "Worked within Agile/Scrum teams, writing and managing user stories, participating in sprint planning, and contributing throughout iterative development cycles.",
      "Built and maintained web application functionality deployed on AWS with a focus on scalability, reliability, and code quality.",
      "Developed experience working within existing codebases and collaborating with other developers to implement new functionality.",
      "Wrote and maintained unit tests and contributed to improving application quality and development processes.",
      "Adopted new technologies and development practices as project requirements evolved."
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