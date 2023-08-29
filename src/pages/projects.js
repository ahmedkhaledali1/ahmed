import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ecommerce from '../../public/images/projects/jordan.png';
import cart from '../../public/images/projects/amazona.png';
import twitter from '../../public/images/projects/twitter.png';
import worker from '../../public/images/projects/worker.png';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full md:flex-col h-full flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light
    shadow-2xl p-12  sm:!p-3 2xl:p-8 dark:bg-dark dark:border-light"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 md:w-full md:p-0 xl:p-0 cursor-pointer overflow-hidden  rounded-lg"
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            maxHeight: '400px',
            cursor: 'pointer',
          }}
        >
          <Image
            src={img}
            fill
            sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
            className="object-cover"
            alt="card photo"
          />
        </div>
      </Link>
      <div className="w-1/2 md:w-full md:pl-0 flex flex-col items-start  pl-6">
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 mb-10 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="dark:text-light">{summary}</p>
        <div className="mt-9 flex items-center justify-center  dark:text-light">
          <Link className="w-10  " href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4  rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col h-full items-center 
      rounded-3xl border border-solid border-dark bg-light 
      shadow-2xl p-6 sm:!p-3 relative mt-8 dark:bg-dark dark:border-light"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden  rounded-lg"
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            maxHeight: '350px',
            cursor: 'pointer',
          }}
        >
          <Image
            src={img}
            fill
            sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
            className="object-cover"
            alt="card photo"
          />
        </div>
      </Link>
      <div className="w-full flex flex-col items-start  p-2 ">
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="text-dark dark:text-light h-[110px] overflow-hidden">
          {summary}
        </p>
        <div className="mt-9 flex items-center justify-center dark:text-light">
          <Link className="w-10 " href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className=" px-1 underline text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Ahmed | Projects Page</title>
        <meta name="desription" content="A fonrt end developer" />
      </Head>
      <main className=" w-full  mb-16 flex  flex-col items-center justify-center">
        <div className="p-32 sm:p-8 sm:!px-1">
          <AnimatedText
            className="text-8xl  md:text-6xl md:mb-14 !text-center mx-auto w-auto !mb-20 dark:text-light"
            text="Imagination Trumps Knowldge!"
          />
          <div className="mb-24 h-[450px] sm:h-fit">
            <FeaturedProject
              img={ecommerce}
              title="jordan starts here"
              summary="This is a tourism project for the State of Jordan in a way that you can identify and reach all the places you want in Jordan through Google Maps, and you can search for hotels and tourist places by
              The name, region, rating, or price, and you can also know the latest news, concerts, and articles, and it contains 5 languages"
              link="https://jordanstartshere.com/en/home"
              github="https://jordanstartshere.com/en/home"
            />
          </div>
          <div className=" flex justify-center h-[650px] sm:h-fit sm:flex-col  items-center gap-16  mb-24">
            <Project
              img={worker}
              title="Worker Dashboard"
              summary="This is a company dashboard web application built using Next.js 13, Tailwind CSS, and Next-Auth for authentication. The dashboard allows the company to manage and control various aspects of their system.
                           "
              link="https://worker-web.vercel.app/"
              type="Dashboard"
              github="https://github.com/ahmedkhaledali1/worker"
            />
            <Project
              img={twitter}
              title="full stack social media app"
              summary=" a Twitter clone with React, typescript, Tailwind CSS, Next.JS, zustand, Prisma and MongoDB
                - Authentication system
                - Notification system
                - Image Upload using Base64 strings
                - Prisma ORM with MongoDB
                - Responsive Layout
                - 1 To Many Relations (User - Post)
                - Many To Many Relations (Post - Comment)
                - Following functionality
                - Comments / Replies
                - Likes functionality
                "
              link="https://twitter-dun-pi.vercel.app/"
              type="big Project"
              github="https://github.com/ahmedkhaledali1/twitter"
            />
          </div>
          <div className=" h-[450px] sm:h-fit">
            <FeaturedProject
              img={cart}
              title="E-commerce Application"
              summary="a feature-rich Amazon clone using Next.js 13.4.8. Learn how to seamlessly integrate Stripe payment, implement AuthJS login, leverage Tailwind CSS for stunning designs, and harness the power of Redux for state management"
              link="https://amazona-blue.vercel.app/"
              type="Practice project"
              github="https://github.com/ahmedkhaledali1/amazona"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
