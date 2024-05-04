import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className='w-1 sm:h-80  h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>Rikhi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web and Software Developer <br className='sm:block hidden'/> and Cybersecurity
          </p>
        </div>
      </div>

        <ComputersCanvas />
    </section>
  )
}

export default Hero