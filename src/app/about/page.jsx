"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import SkillList from "@/components/skillsList";
import Brain from "@/components/brain";

const AboutPage = () => {

    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* text container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:pt-8 xl:pr-48 xl:pb-48 xl:pl-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">ABOUT ME</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            A diligent individual with my journey in technology is fueled by a commitment to continuous learning and a drive to craft efficient, scalable, and maintainable solutions. Currently, I&apos;m a Software Developer at the University of Guelph, deeply immersed in web and software development. <br /> <br />

                            With expertise in JavaScript, C#, Python, SQL, and HTML/CSS, coupled with frameworks like ReactJS, NodeJS (MERN), TSX/TS, Bootstrap and more, I bring a diverse skill set to the table. My proficiency extends to essential tools and platforms such as Docker, PenTesting, VCS, and the Microsoft 365 Suite. <br /> <br />

                            Throughout my career, I&apos;ve optimized websites for SEO, managed server migrations, and delved into cybersecurity principles. I excel at problem-solving, troubleshooting, and maintaining a meticulous attention to detail. <br /> <br />

                            Certified in cybersecurity, IT automation, and more, I&apos;m equipped to thrive in the fast-paced tech landscape. I&apos;m always eager to collaborate, learn, and contribute to innovative projects. Let&apos;s connect and grow together in the exciting world of technology!
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            Life Long Learner
                        </span>
                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end flex w-full flex-row-reverse justify-between">
                            <svg width="136" height="100" viewBox="0 0 136 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15C10.6439 17.764 11.896 21.1864 13.3333 24.7222C17.4964 34.9634 21.0182 45.4959 24.4444 56C28.9203 69.7221 33.7983 83.689 36 98" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M2.00057 48.8012C2.00057 39.5303 1.79625 32.6268 9.11168 25.4679C15.2432 19.4675 29.3365 7.37709 38.6672 13.8567C45.4482 18.5657 51.6695 36.0698 44.6672 42.6901C38.3791 48.6353 29.0175 50.1805 21.7783 54.579C17.8739 56.9513 22.1597 58.5757 24.445 59.8012C34.0562 64.955 43.0849 70.5361 50.7784 78.3568C52.9712 80.5859 55.2276 84.4147 58.0006 85.8012" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M60 65C60.6488 68.4603 62.4155 81.7077 65 83" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M61 58C59.8125 56.6641 59.9265 56 58 56" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M49.7391 6.37619C50.1482 9.03554 51.8853 11.8268 52.8746 14.2466C57.177 24.7713 60.3015 35.6896 63.8078 46.4919C66.3455 54.3102 69.3153 62.0251 71.4874 69.9578C72.079 72.1185 72.5914 74.2786 73.2959 76.3924" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M76.8949 43.1838C76.7631 44.041 76.0648 44.9342 75.6407 45.6376C73.9967 48.3644 72.3031 51.0608 70.6331 53.7716C69.9075 54.9494 69.2325 56.1556 68.5882 57.3797C67.9272 58.6357 68.1839 58.7869 69.2244 59.7608C72.0865 62.4396 75.1148 64.726 78.6035 66.5407C80.5353 67.5455 82.5827 68.3071 84.4927 69.3489C84.8941 69.5679 85.0978 69.8956 85.5652 70.0124" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M68.2247 2.28647C70.1197 5.99029 72.2756 9.54426 74.1139 13.2833C75.5304 16.1642 76.8445 19.0936 78.2854 21.9626C79.9297 25.2365 81.7021 28.4447 83.1295 31.8234C86.9497 40.866 90.382 50.0877 93.3811 59.4336C94.581 63.173 95.7155 66.9512 96.362 70.8303" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M89.6549 48.255C89.6549 44.4803 91.0285 39.5182 94.5989 37.5308C96.35 36.5562 98.4282 37.0805 100.052 38.0216C103.379 39.9501 105.34 43.9759 106.795 47.3825C108.446 51.2476 109.944 55.2117 110.558 59.3973C110.722 60.5174 111.195 61.5659 111.412 62.6509" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M112.23 41.5479C113.485 43.6384 113.761 46.4247 114.484 48.7276C115.118 50.7464 115.882 52.9074 117.592 54.2715C117.872 54.4944 119.592 55.3548 119.592 54.4714" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M110.104 32.8776C110.125 33.2395 110.344 33.5138 110.431 33.8592" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M72.6416 92.5877C73.3 92.478 74.1801 91.5995 74.5865 91.279C80.2937 86.7779 85.923 82.1506 91.8906 77.9919C102.409 70.6615 113.767 65.0788 125.299 59.5608C128.196 58.175 131.172 56.9288 133.824 55.1258" stroke="black" stroke-width="3" stroke-linecap="round" />
                            </svg>
                            {/* BIOGRAPHY SCROLL SVG */}
                            <div className="flex mt-6">
                                <motion.svg
                                    initial={{ opacity: 0.2, y: 0 }}
                                    animate={{ opacity: 1, y: "10px" }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={50}
                                    height={50}
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
                                    initial={{ opacity: 0.2, y: 0 }}
                                    animate={{ opacity: 1, y: "30px" }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                >
                                    Scroll Down
                                </motion.div>
                            </div>
                        </div>

                    </div>
                    {/* skills container */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* skills TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <SkillList />
                        </motion.div>
                        {/* Scroll svg */}
                        <div className="flex">
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: "10px" }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
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
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: "30px" }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                Scroll Down
                            </motion.div>
                        </div>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-400px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-400px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 text-lg font-semibold rounded-b-lg rounded-s-lg text-center">
                                        WEB DEVELOPER
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        Utilized C#, JavaScript, MERN Stack, TS, SQL, Python and more to develop websites and automation scripts, aligning with the job&apos;s emphasis on software development skills and the ability to automate tasks to improve operational efficiency.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold text-center">
                                        2023 - Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-2 rounded bg-white text-base font-semibold text-center">
                                        UNIVERSITY OF GUELPH
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>

                        </motion.div>
                    </div>
                </div>
                {/* svg container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-40 xl:1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div >
    );
}

export default AboutPage;