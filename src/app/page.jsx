"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { Modal, ModalTrigger } from "../../components/ui/animated-modal";

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

  const words = [
    {
      text: "Hi, ",
    },
    {
      text: "I ",
    },
    {
      text: "am ",
    },
    {
      text: "Rikhi",
      className: "text-blue-500",
    },
  ];

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
            src="/image.png"
            alt="hero Image"
            fill
            className="object-contain p-10"
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <TypewriterEffectSmooth words={words} />
          {/* description */}
          <p className="md:text-xl">
            Web and Software Developer with expertise in Cybersecurity with
            Certification from University of Michigan, Google, University of
            Helsinki, Microsoft and Member of CIPS Ontario
          </p>
          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:w-full">
            <Modal>
              <ModalTrigger className="bg-black text-white flex justify-center group/modal-btn" >
                <span
                  className="group-hover/modal-btn:translate-x-40 transition duration-500 p-4"
                  onClick={() => downloadResume()}
                >
                  See my Resume
                </span>
                <div
                  className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                  onClick={() => downloadResume()}
                  style={{ fontSize: '2rem' }}
                >
                  📄
                </div>
              </ModalTrigger>
            </Modal>
            <Modal>
              <Link href="/portfolio">
                <ModalTrigger className="bg-black text-white flex justify-center group/modal-btn" >
                  <span
                    className="group-hover/modal-btn:translate-x-40 transition duration-500 p-4"
                  >
                    See my Work
                  </span>
                  <div
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                    style={{ fontSize: '2rem' }}
                  >
                    ⚒️
                  </div>
                </ModalTrigger>
              </Link>
            </Modal>
          </div>
        </div>
      </div>
    </motion.div >
  );
};

export default Homepage;
