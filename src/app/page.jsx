"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Homepage = () => {
  const downloadResume = () => {
    // Create an anchor element
    const link = document.createElement("a");

    // Set the href attribute to the path of your resume PDF
    link.href = "./Rikhi Singh - Resume.pdf";

    // Set the download attribute to force download the file
    link.download = "Rikhi Singh - Resume.pdf";

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="./image.webp"
            alt="hero Image"
            fill
            className="object-contain"
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I am Rikhi</h1>
          {/* description */}
          <p className="md:text-xl">
            Web and Software Developer with expertise in Cybersecurity with
            Certification from University of Michigan, Google, University of
            Helsinki, Microsoft and Member of CIPS Ontario
          </p>
          {/* Buttons */}
          <div className="flex gap-4 lg:w-full">
            <div
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer"
              onClick={downloadResume}
            >
              See my Resume
            </div>
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer"
            >
              See My Work
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
