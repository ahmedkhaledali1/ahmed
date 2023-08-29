import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import profilePic from '../../public/images/profile/IMG_20221021_220314_501.jpg';
import Skills from '@/components/Skills';
import { NewSkills } from '@/components/Skills';
import { CiCalendarDate } from 'react-icons/ci';
import { HiOutlineLocationMarker } from 'react-icons/hi';
const about = () => {
  return (
    <>
      <Head>
        <title> Ahmed | About Page</title>
        <meta name="desription" content="A fonrt end developer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="!pt-28 sm:!p-5">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-center !text-6xl lg:text-7xl sm:mb-6 mt-0 pt-0 mb-16"
          />
          <div className="grid w-full xl:grid-cols-8 md:grid-cols-8 grid-cols-8 gap-16 sm:gap-8 !text-6xl">
            <div className="col-span-3 md:col-span-8 md:order-2 flex flex-col  items-start  justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-light/75">
                Biography
              </h2>
              <p className=" text-xl w-full">
                - Hi, I&apos;m Ahmed Khaled, Junior Front-end developer with one
                year of implement projects with Reactjs. specializes in Nextjs
                thrives at creating responsive designs and real projects with
                modern Technologies like nextjs, typescript, tailwindcss,
                mongoDB, prisma and others..
              </p>
              <p className=" text-xl font-medium my-4 w-full">
                -I’m an out-of-the-box thinker and capable of finding a solution
                for the non-typical task. my dream that I will be great
                Programmer and I Upgradable every-time
              </p>
              <p className=" text-xl font-medium my-4 w-full">
                - I believe that development is about more than just making
                things look pretty – it&apos;s about solving problems and
                creating intuitive, enjoyable experiences for users.
              </p>
            </div>

            <div
              className="col-span-3  md:col-span-8 xl:order-1 md:order-1 relative rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 shadow-black shadow-lg my-auto mx-auto  "
            >
              <Image
                src={profilePic}
                alt="Ahmed"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div
              className="col-span-2 xl:text-4xl xl:order-3 xl:col-span-8 lg:col-span-8 md:col-span-8
             xl:flex-row xl:justify-center xl:items-center flex flex-col 
            gap-6 md:gap-0 items-center xl:flex  md:order-3 "
            >
              <div>
                <p className="xl:font-bold md:text-xl ">
                  {' '}
                  +10 projects completed
                </p>
              </div>
              <div>
                <p className="xl:font-bold md:text-xl mt-10 sm:mt-0 md:mt-0 xl:mt-0">
                  One year experience
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-28 sm:mt-10 justify-center items-center w-full">
            <h1 className="text-7xl sm:text-4xl font-bold my-6">experience</h1>
            <div className="w-[90%] sm:w-full flex flex-col gap-6">
              <h3 className="text-3xl">Front-End Developer</h3>
              <div className="text-xl text-gray-500 dark:text-gray-200 flex gap-3">
                <CiCalendarDate size={30} />
                <p>May 2023</p>
              </div>
              <div className="text-xl  text-gray-500 dark:text-gray-200 flex gap-3">
                <HiOutlineLocationMarker size={30} />
                <p>We Can, Jordan (Remotely)</p>
              </div>
              <div className="text-xl flex flex-col gap-5">
                <p>
                  Troubleshot and debugged issues in web applications, both
                  independently and in collaboration with other developers, to
                  ensure optimal user experience
                </p>
                <p>
                  Developed and implemented responsive design principles to
                  ensure web applications were accessible on a range of devices,
                  including desktop and mobile
                </p>
                <p>
                  Developed communication and teamwork skills in a remote work
                  environment, collaborating with developers, project managers,
                  and clients across different time zones
                </p>
                <p>
                  Demonstrated adaptability and flexibility by working on
                  multiple projects simultaneously and adjusting to changing
                  project requirements and timelines
                </p>
              </div>
            </div>
            <div className="w-[90%] sm:w-full  mt-20  flex flex-col gap-6">
              <h3 className="text-3xl">Front-End Developer</h3>
              <div className="text-xl text-gray-500 dark:text-gray-200 flex gap-3">
                <CiCalendarDate size={30} />
                <p>jun 2023</p>
              </div>
              <div className="text-xl text-gray-500 dark:text-gray-200 flex gap-3">
                <HiOutlineLocationMarker size={30} />
                <p>FreeLaner </p>
              </div>
            </div>
            <div className="w-[90%] sm:w-full  flex flex-col mt-20 gap-6">
              <h3 className="text-3xl">Front-End Developer</h3>
              <div className="text-xl text-gray-500 dark:text-gray-200 flex gap-3">
                <CiCalendarDate size={30} />
                <p>Feb 2023 - May 2023</p>
              </div>
              <div className="text-xl text-gray-500 dark:text-gray-200 flex gap-3">
                <HiOutlineLocationMarker size={30} />
                <p>Etrevago, Jordan (Remotely)</p>
              </div>
              <div className="text-xl flex flex-col gap-5">
                <p>
                  Collaborated with back-end and front-end teams to develop and
                  maintain web applications using JavaScript, HTML, CSS, and
                  Next.js
                </p>
                <p>
                  Worked with APIs to integrate third-party services, such as
                  payment gateways and social media platforms, into web
                  applications
                </p>
                <p>
                  Reviewed code written by interns, providing actionable
                  feedback and suggestions for improvement to ensure code
                  quality and maintainability
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden w-full">
            <Skills />
          </div>
          <div className="hidden sm:block w-full">
            <NewSkills />
          </div>
          <div className="mt-44 mb-20 md:mt-32 sm:!mt-24"></div>
          <div>
            <h2 className="text-center text-4xl my-6 font-bold">Education</h2>
            <p className="text-center md:text-xl font-serif text-2xl">
              I&apos;m a student in computer engineering menufya-university
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
