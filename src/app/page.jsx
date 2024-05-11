"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const Homepage = () => {

  const downloadResume = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the path of your resume PDF
    link.href = './RikhiSingh - Resume.pdf';
    // Set the download attribute to force download the file
    link.download = 'RikhiSingh - Resume.pdf';
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Trigger a click event on the anchor element
    link.click();
    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(link);
  };

  const seeMyWork = () => {
    // Open the GitHub profile in a new tab
    window.open('https://github.com/RikhiSingh', '_blank');
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
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PL3C263S');</script>
            <!-- End Google Tag Manager -->
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </Head>
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
          <p className="md:text-xl">Web and Software Developer with expertise in Cybersecurity with Certification from University of Michigan, Google, University of Helsinki, Microsoft and Member of CIPS Ontario</p>
          {/* Buttons */}
          <div className="flex gap-4 lg:w-full">
            <div className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer" onClick={downloadResume}>See my Resume</div>
            <div className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer" onClick={seeMyWork}>See my work</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
