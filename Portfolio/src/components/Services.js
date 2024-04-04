import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// fadeIn
import { fadeIn } from '../variants';

//services data
const services = [
  {
    name: 'UI/UX design',
    description: 'lorem ipsum cofojanbgkjnajkgnkljag kjj fkjan akj kjn jn kjn lorem kljbngkjn kjlkj hiu hiu kjn knkj nj nkjn kjn kjnkj nkj nkj nkj nkj nkjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn kjn',
    link: 'Learn more',
  },
  {
    name: 'Web Development',
    description: 'lorem ipsum cofojanbgkjnajkgnkljag kjj fkjan akj kjn jn kjn',
    link: 'Learn more',
  },
  {
    name: 'CYbersecurity',
    description: 'lorem ipsum cofojanbgkjnajkgnkljag kjj fkjan akj kjn jn kjn',
    link: 'Learn more',
  },
  {
    name: 'Software Development',
    description: 'lorem ipsum cofojanbgkjnajkgnkljag kjj fkjan akj kjn jn kjn',
    link: 'Learn more',
  },

];


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text and images*/}
          <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blen-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              What I Do
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio ipsam, soluta voluptates
            </h3>
            <button className='btn btn-sm'>See my Work</button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Services;
