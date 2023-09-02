import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/IMG_20230215_032956_499.jpg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import lightBuld from '../../public/images/svgs/miscellaneous_icons_1.svg';
export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Khaled</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full h-min dark:bg-dark dark:text-light pt-0">
        <Layout className="pt-0 md:pt-16 sm:!p-8">
          <div className="  w-full flex items-center justify-center text-center lg:flex-col">
            <div className="w-1/2 md:w-full flex justify-start  items-center rounded-full ">
              <Image
                src={profilePic}
                alt="Ahmed"
                className=" rounded-full  md:inline-block md:mb-8 md:w-full "
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center text-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Ahmed Khaled"
                className="!text-6xl xl:text-5xl !text-center md:text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="Front end developer"
                className="!text-5xl xl:text-5xl self-center !text-center md:text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base sm:text-start font-medium">
                As a Junior Front-end Developer with one year of experience, I
                have successfully implemented projects using Reactjs. I
                specialize in Nextjs and Tailwindcss at creating responsive
                designs and delivering real projects.
              </p>
              <div className="flex items-center justify-center  lg:gap-6">
                <Link
                  className=" mt-2 bg-dark text-light px-4 py-3
                  rounded-lg text-lg font-semibold hover:bg-light
                  hover:text-dark border flex flex-row
                  border-solid border-transparent
                  hover:border-dark dark:border-light
                   dark:p-4
                   "
                  href="/AHMED_KHALED_FRONT_END)DEVELOPEr.pdf"
                  target={'_blank'}
                  download={true}
                >
                  Resume
                  <LinkArrow className={'w-6 ml-1 '} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium
                   capitalize text-dark dark:text-light underline"
                  href="mailto: ahmed.khaled01233@gamil.com"
                >
                  contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBuld}
            alt=" Ahmed Khaled"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
