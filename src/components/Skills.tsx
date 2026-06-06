import python from "../assets/logo/python.png";
import php from "../assets/logo/php.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/react.png";
import django from "../assets/logo/django.png";
import tailwind from "../assets/logo/tailwind.png";
import bootstrap from "../assets/logo/bootstrap.webp"
import jquery_light from "../assets/logo/jquery-light.png"
import jquery_dark from "../assets/logo/jquery-dark.png"
import react_router_light from "../assets/logo/react-router-light.png"
import react_router_dark from "../assets/logo/react-router-dark.svg"
import fastapi from "../assets/logo/fastapi.png";
import ts from "../assets/logo/ts.png";
import vue from "../assets/logo/Vue.png";
import laravel from "../assets/logo/laravel.png";
import nuxt from "../assets/logo/nuxt.svg"

import git from "../assets/logo/git.png";
import aws_ec2 from "../assets/logo/aws-ec2.png";
import docker from "../assets/logo/docker.png";
import github from "../assets/logo/github.svg";

import firebase from "../assets/logo/firebase.svg";
import mysql from "../assets/logo/mysql.png";
import mariadb from "../assets/logo/mariadb.svg";
import postgre from "../assets/logo/postgresql.webp";

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
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full items-stretch">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={python} alt="Python" className="lg:w-40 w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={php} alt="PHP" className="lg:w-40 w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={js} alt="Javascript" className="lg:w-40 w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={ts} alt="Typescript" className="lg:w-40 w-20" />
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
        <div className="grid lg:grid-cols-6 grid-cols-2 w-full">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={django} alt="Django" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={fastapi} alt="FastAPI" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={laravel} alt="Laravel" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={react} alt="React" className="w-40" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={vue} alt="Vue" className="w-20" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={nuxt} alt="Vue" className="w-40" />
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
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full items-stretch">
  
          <div className="flex-1 flex items-center gap-2 justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={tailwind} alt="Python" className="w-15" /> <div className="text-3xl">tailwindcss</div>
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={bootstrap} alt="Bootstrap" className="w-25" />
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img
              src={jquery_light}
              alt="jQuery"
              className="w-40 dark:hidden"
            />

            <img
              src={jquery_dark}
              alt="jQuery"
              className="hidden dark:block w-40"
            />
          </div>

          <div className="flex-1 flex flex-col gap-3 items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img
              src={react_router_light}
              alt="React Router"
              className="w-30 dark:hidden"
            />

            <img
              src={react_router_dark}
              alt="React Router"
              className="hidden dark:block w-30"
            />

            <div className="text-xl font-semibold">React Router</div>
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
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full items-stretch">
  
          <div className="flex-1 flex items-center gap-2 flex-row justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={git} alt="Git" className="w-20" /> <div className="text-4xl font-semibold">git</div>
          </div>

          <div className="flex-1 flex gap-2 flex-col items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={github} alt="Github Actions" className="w-20 dark:invert" /> <div className="text-xl font-semibold">Github Actions</div>
          </div>

          <div className="flex-1 flex flex-col gap-2 items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={aws_ec2} alt="AWS EC2" className="w-15" /> <div className="text-xl font-semibold">AWS EC2</div>
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={docker} alt="Docker" className="w-40" />
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
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full items-stretch">
  
          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800">
            <img src={mysql} alt="MYSQL" className="w-40" />
          </div>

          <div className="flex-1 flex flex-col gap-0 items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={mariadb} alt="Maria DB" className="w-30" /> <div className="text-2xl font-semibold tracking-widest">Maria DB</div>
          </div>

          <div className="flex-1 flex items-center justify-center border-r border-dashed border-gray-200 dark:border-zinc-800 py-10">
            <img src={postgre} alt="Postgre SQL" className="w-30" />
          </div>

          <div className="flex-1 flex items-center justify-center py-10">
            <img src={firebase} alt="Firebase" className="w-40" />
          </div>

        </div>
      </div>
    </div>
  );
}