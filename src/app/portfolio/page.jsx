"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Rss } from "lucide-react"

const items = [
    {
        id: 1,
        color: " from-red-300 to-blue-300",
        title: "DuoClone",
        desc: "Duolingo Clone bootstrapped using NextJS, Drizzle and Neon for DB with admin dashboard and Stripe integration for premium users and in app content purchase. SSO Authentication using google ID.",
        img: "./duolingo.png",
        link: "https://github.com/RikhiSingh/Duolingo-Clone",
        liveLink: "https://duoclone-rs.vercel.app/"
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "CMS Admin Dashboard",
        desc: "Developed and Designed Web Content Management System using Next.JS, by using Clerk for authentication, TypeScript, TailwindCSS, Zod, Cloudinary, MySQL, Prisma, AXion, ShadCN and more!",
        img: "./CMSAdmin.png",
        link: "https://github.com/RikhiSingh/ecommerceCMS/tree/main/ecommerce-admin",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "CMS based Web Store",
        desc: "Fully Designed Web store for customer with Stripe integration, which fetching products and updating order details in the Admin CMS, using TypeScript, ShadCN, TailwindCSS and other latest web technologies!",
        img: "./WebStore.png",
        link: "https://github.com/RikhiSingh/ecommerceCMS/tree/main/ecommerce-store",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Portfolio Website",
        desc: "Developed Portfolio Website using Next.JS, Tailwind CSS, MailJS, Motion-Framer and latest web technologies!",
        img: "./portfolio.png",
        link: "https://github.com/RikhiSingh/rikhisingh.github.io",
        liveLink: "https://rikhisingh.github.io/"
    },

];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center">
                    <div>
                        My Works
                    </div>
                    <div className="flex justify-center items-center text-sm ">
                        <motion.svg
                            className="mt-[calc(100%-0px)] bottom-16"
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={100}
                            height={100}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                        <motion.div
                            className="mt-[calc(100%-0px)] bottom-16 text-xl"
                            initial={{ opacity: 0.2, y: -15 }}
                            animate={{ opacity: 1, y: "25px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            Scroll Down
                        </motion.div>
                    </div>
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    {item.liveLink && (
                                        <Link href={item.liveLink} className="flex justify-end" target="_blank">
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded flex flex-row gap-2">
                                                <Rss width={24} height={24} />Live
                                            </button>
                                        </Link>
                                    )}
                                    <Link href={item.link} className="flex justify-end" target="_blank">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded flex flex-row gap-2">

                                            <Image src='./github.png' alt="github logo" width={24} height={24} />Github
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-fuchsia-100 to-violet-200">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Software and Web Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;
