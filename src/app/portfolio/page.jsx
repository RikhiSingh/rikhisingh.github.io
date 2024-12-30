"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import { CircleXIcon } from "lucide-react";

const PortfolioPage = () => {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mr-2 md:mr-0 h-auto">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CircleXIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={600}
                    height={600}
                    quality={100}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4 border-t">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 p-4 sm:p-8 md:p-12 lg:p-20 lg:px-32">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer group"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={600}
                    height={600}
                    src={card.src}
                    quality={100}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-lg text-neutral-600 dark:text-neutral-800 text-center md:text-left group-hover:text-white"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

const cards = [
  {
    description: "AI Idea Validator",
    title: "IdeaXcel-AI",
    src: "/portfolio/ideaxcel.webp",
    ctaText: "Visit",
    ctaLink: "https://ideaxcel-ai.vercel.app/",
    content: () => {
      return (
        <p>
          The ultimate AI-driven business idea validator. Our platform uses
          multiple advanced AI models and tailored prompts and heuristics to
          assess the viability of your business idea, considering factors like
          your concept, target audience, and more. Developed with precision and
          passion, IdeaXcel-AI empowers entrepreneurs with instant insights and
          actionable guidance, helping you refine your ideas and bring them
          closer to reality. Whether you&apos;re a budding innovator or a seasoned
          entrepreneur, IdeaXcel-AI is your trusted partner on the path to
          success.
        </p>
      );
    },
  },
  {
    description: "Communocart-Store",
    title: "E-Commerce Frontend Store",
    src: "/portfolio/communocart-store.webp",
    ctaText: "Visit",
    ctaLink: "https://communocart-store.vercel.app/",
    content: () => {
      return (
        <p>
          This e-commerce platform allows users to explore and shop from local
          stores in their vicinity, offering a wide range of fresh, high-quality
          products. With an easy-to-use interface, customers can browse through
          stores, place orders, and make secure payments via Stripe, all while
          supporting local businesses. It&apos;s a seamless way to discover and
          purchase from nearby stores, bringing fresh, local goods straight to
          your door.
        </p>
      );
    },
  },
  {
    description: "Communocart-Admin",
    title: "E-Commerce Admin Panel",
    src: "/portfolio/communocart-admin.webp",
    ctaText: "Visit",
    ctaLink: "https://communocart.vercel.app/",
    content: () => {
      return (
        <p>
          E-commerce Web CMS for a farm platform using Next.js, Clerk for
          authentication, TypeScript, TailwindCSS, Zod, Cloudinary, MySQL,
          Prisma, AXion, and ShadCN. The CMS allows farm owners to easily upload
          and manage products, with AI-powered crop suggestions to help optimize
          their offerings. Integrated with Stripe for secure online payments,
          this platform provides a seamless experience for both farm owners and
          customers.
        </p>
      );
    },
  },
  {
    description: "CelebSavvy",
    title: "SaaS AI Companion APP",
    src: "/portfolio/celebSavvy.png",
    ctaText: "Visit",
    ctaLink: "https://celebsavvy.vercel.app/",
    content: () => {
      return (
        <p>
          CelebSavvy is an innovative SaaS AI Companion app that lets users
          interact with AI-powered versions of their favorite celebrities. Built
          with cutting-edge web technologies, CelebSavvy offers a unique,
          immersive experience where users can engage in personalized
          conversations, explore celebrity insights, and enjoy exclusive
          content. This project is designed to provide an entertaining and
          interactive platform, bringing fans closer to their idols in an
          entirely new way.
        </p>
      );
    },
  },
  {
    description: "DuoClone",
    title: "DuoLingo Clone",
    src: "/portfolio/duolingo.png",
    ctaText: "Visit",
    ctaLink: "https://duoclone-rs.vercel.app/",
    content: () => {
      return (
        <p>
          Duolingo Clone built using Next.js, Drizzle, and Neon for the
          database, featuring an admin dashboard for easy management. The app
          includes Stripe integration for premium users and in-app content
          purchases, while SSO authentication through Google ID ensures a
          seamless login experience. This project replicates the core
          functionality of Duolingo, providing an engaging language-learning
          platform with added features for premium access and content
          management.
        </p>
      );
    },
  },
];
