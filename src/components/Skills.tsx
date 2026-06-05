import python from "../assets/logo/python.png";
import php from "../assets/logo/php.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/react.png";
import django from "../assets/logo/django.png";
import tailwind from "../assets/logo/tailwind.png";

import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";


export default function Skills() {
  return (
    <div className="">
      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        {/* Left */}
        <div className="text-left border-t border-b border-dashed border-gray-200 dark:border-zinc-800">
          <SectionLabel border={true}>
            TECH STACK
          </SectionLabel>
          <SectionTitle className="text-5xl">
            Languages.
          </SectionTitle>
        </div>

        {/* Right */}
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={python} alt="Python" className="lg:w-40 w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={js} alt="JavaScript" className="lg:w-40 w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={react} alt="React" className="lg:w-40 w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={django} alt="Django" className="lg:w-40 w-20" />
          </div>

        </div>
      </div>

      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        {/* Left */}
        <div className="text-left border-b border-dashed border-gray-200 dark:border-zinc-800">
          <SectionTitle className="text-5xl">
            Frameworks.
          </SectionTitle>
        </div>

        {/* Right */}
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={python} alt="Python" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={js} alt="JavaScript" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={react} alt="React" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={django} alt="Django" className="w-40" />
          </div>

        </div>
      </div>

      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        {/* Left */}
        <div className="text-left border-b border-dashed border-gray-200 dark:border-zinc-800">
          <SectionTitle className="text-5xl">
            Libraries.
          </SectionTitle>
        </div>

        {/* Right */}
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={python} alt="Python" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={js} alt="JavaScript" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={react} alt="React" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={django} alt="Django" className="w-40" />
          </div>

        </div>
      </div>


      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        {/* Left */}
        <div className="text-left border-b border-dashed border-gray-200 dark:border-zinc-800">
          <SectionTitle className="text-5xl">
            Tools.
          </SectionTitle>
        </div>

        {/* Right */}
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={python} alt="Python" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={js} alt="JavaScript" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={react} alt="React" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={django} alt="Django" className="w-40" />
          </div>

        </div>
      </div>

      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-zinc-800">
        
        {/* Left */}
        <div className="text-left border-b border-dashed border-gray-200 dark:border-zinc-800">
          <SectionTitle className="text-5xl">
            Databases.
          </SectionTitle>
        </div>

        {/* Right */}
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={python} alt="Python" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={js} alt="JavaScript" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={react} alt="React" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={django} alt="Django" className="w-40" />
          </div>

        </div>
      </div>

      
    </div>
  );
}