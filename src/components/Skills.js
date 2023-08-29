import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center md:text-sm m-2 cursor-pointer 
      rounded-full font-medium  bg-dark text-light
        absolute py-3 px-6 shadow-dark
        lg:py-2 lg:px-4 sm:!text-sm sm!:p-0 sm:w-16
        "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};
const SmSkill = ({ name, x, y }) => {
  return (
    <div
      className="flex items-center justify-center md:text-sm m-2 cursor-pointer 
      rounded-full font-medium  bg-dark text-light
        py-3 px-6 shadow-dark w-auto
        lg:py-2 lg:px-4 sm:!text-sm sm!:p-0 
        "
    >
      {name}
    </div>
  );
};
export const NewSkills = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="font-bold  text-8xl  mt-56 sm:mt-20  md:mt-32 mb-6 w-full text-center">
        Skills
      </h2>
      <div className="w-full flex flex-col justify-center">
        <div>
          <SmSkill name="HTML" />
          <SmSkill name="CSS" />
        </div>
        <div>
          <SmSkill name="Javascipt" />
          <SmSkill name="Typescript" />
        </div>

        <div>
          <SmSkill name="Reactjs" />
          <SmSkill name="Nextjs" />
        </div>
        <div>
          <SmSkill name="Redux" />
          <SmSkill name="Zustand" />
        </div>
        <div>
          <SmSkill name="Git" />
          <SmSkill name="Github" />
        </div>
        <div>
          <SmSkill name="FireBase" />
          <SmSkill name="MongoDB" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold  text-8xl  mt-56 sm:hidden md:mt-32 mb-6 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen md:max-h-96 sm:mt-28  relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full p-8 md:p-3 md:text-white
          cursor-pointer font-semibold bg-dark text-light shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="CSS" x="9vw" y="-2vw" />
        <Skill name="HTML" x="-4vw" y="-10vw" />
        <Skill name="JS" x="-5vw" y="7vw" />
        <Skill name="Reactjs" x="-15vw" y="12vw" />
        <Skill name="Nextjs" x="-2vw" y="15vw" />
        <Skill name="Typescript" x="0vw" y="21vw" />
        <Skill name="Tailwindcss" x="15vw" y="-10vw" />
        <Skill name="SCSS" x="20vw" y="0vw" />
        <Skill name="MongoDB" x="10vw" y="10vw" />
        <Skill name="FireBase" x="30vw" y="5vw" />
        <Skill name="Figma" x="5vw" y="-20vw" />
        <Skill name="SASS" x="-15vw" y="-20vw" />
        <Skill name="Redux" x="-14vw" y="-7vw" />
        <Skill name="Zustand" x="-25vw" y="-15vw" />
        <Skill name="Context" x="-25vw" y="0vw" />
        <Skill name="PHP" x="-33vw" y="-1vw" />
        <Skill name="Github" x="-33vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;
