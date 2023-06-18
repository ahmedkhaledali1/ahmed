import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ecommerce from '../../public/images/projects/ecommerce-cover-image.jpg';
import cart from '../../public/images/projects/cart.jpg';
import twitter from '../../public/images/projects/twitter.jpg';
import worker from '../../public/images/projects/worker.png';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full md:flex-col  flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light
    shadow-2xl p-12 !md:p-2 md:px-1 2xl:p-8 dark:bg-dark dark:border-light"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 md:w-full md:p-0 xl:p-0 cursor-pointer overflow-hidden  rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 md:w-full md:pl-0 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium  dark:text-primaryDark">
          {type}
        </span>
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
      className="w-full flex flex-col  items-center justify-between 
      rounded-3xl border border-solid border-dark bg-light 
      shadow-2xl p-6 !md:p-2 relative mt-8 dark:bg-dark dark:border-light"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden  rounded-lg"
      >
        <Image src={img} alt={title} height="800px" className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between p-2 mt4">
        <span className="text-primary font-medium">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="text-dark dark:text-light">{summary}</p>
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
        <div className="p-32 sm:p-8">
          <AnimatedText
            className="text-8xl  md:text-6xl md:mb-14 !text-center mx-auto w-auto !mb-20 dark:text-light"
            text="Imagination Trumps Knowldge!"
          />
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={ecommerce}
              title="E-commerce Application"
              summary="A E-commerce Application with paying by Paypal, you can add the prodution what you in the dashboard ,you can show your history of dealing and every thing is saving in database .
                I used Nextjs, Javescript, Tailwind CSS, Redux toolkit, NextAuth for authentication, JWT for protecting the data of users and MongoDB for database. 
. You can easily convert the price in your 
local currency.
                "
              link="https://e-commerce-eosin-tau.vercel.app/"
              type="big Project"
              github="https://github.com/ahmedkhaledali1/e-commerce"
            />
          </div>
          <div className=" flex justify-center sm:order-3 items-center gap-16 sm:flex-col mb-24">
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
              img={cart}
              title="Cart Application"
              summary="A Practice project using React, Tailwind CSS, Context API and  React Router. 
                      it's a cart app for resturant
                           "
              link="https://cart-app-ten.vercel.app/"
              type="Practice project"
              github="https://github.com/ahmedkhaledali1/cart-app"
            />
          </div>
          <div className="sm:order-1">
            <FeaturedProject
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
        </div>
      </main>
    </>
  );
};

export default projects;
