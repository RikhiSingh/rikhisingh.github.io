import React from 'react';
// motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <div className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl text-accent uppercase font-medium mb-2 tracking-wide'>
                Get in Touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                LEt's work <br />
                together !
              </h2>
            </div>
          </motion.div>
          {/* fomr */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
