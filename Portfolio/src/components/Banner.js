import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// github link
const githubLink = "https://github.com/RikhiSingh/";
// linkedIn link
const linkedInLink = "https://www.linkedin.com/in/rikhi-singh/";
// instagram link
const InstagramLink = "https://www.instagram.com/rikhi_singh/";




const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto mt-[-60px] md:mt-[-100px] lg:mt-0">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.22)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'><span className='text-white text-[40px] font-bold leading-[0.8] lg:text-[89px]'>I</span> <span className='text-white text-[35px] font-bold leading-[0.8] lg:text-[70px]'>am</span> RIKHI </motion.h1>
            <motion.div variants={fadeIn('up', 0.46)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              
              < TypeAnimation sequence={[
                'Full Stack Dev',
                2000,
                'Cyber Analyst',
                2000,
                'Software Dev',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Certified from Google, UMICH and Microsoft</motion.p>
            <motion.div variants={fadeIn('up', 0.94)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>My Portfolio</button>
              <a href="#contact" className='text-gradient btn-link'>Contact Me!</a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 1.18)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={InstagramLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.46)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='w-[482px] h-[512px]' src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
