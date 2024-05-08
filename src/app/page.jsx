"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src='./hero.webp' alt="hero Image" fill className="object-contain" />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I am Rikhi</h1>
          {/* description */}
          <p className="md:text-xl">Web and Software Developer and expertise in Cybersecurity with Certification from University of Michigan, Google, University of Helsinki, Microsoft and Member of CIPS Ontario</p>
          {/* Buttons */}
          <div className="flex gap-4 lg:w-full">
            <div className="p-4 rounded-lg ring-1 ring-black bg-black text-white">See my Resume</div>
            <div className="p-4 rounded-lg ring-1 ring-black bg-black text-white">See my work</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
