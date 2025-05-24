import React from 'react'
import styles,{layout} from '../style'
import Image from 'next/image'
import { feedback } from "../constents";
import { features } from 'process';
import { quotes } from "../assets"


const FeedbackCard =({id,content,name,title,img}:any) => (

  <div className="flex flex-col justify-start  w-[370px] mr-0 sm:mr-5 md:mr-10 px-12 py-10 rounded-[20px] feedback-card">

    <Image src={quotes} alt='quotes'/>
    <p className='text-white font-poppins font-normal leading-8 text-[18px] my-6'>{content}</p>

      <div className="flex flex-row">
        <Image src={img} alt='person image' className='h-[48px] w-[48px] rounded-full ' />
        <div className="flex flex-col ml-4">
            <h4 className="text-[20px] font-normal font-poppins leading-8 text-white">{name}</h4>
            <p className='text-dimWhite font-poppins text-[16px] font-normal leading-6'>{title}</p>

        </div>
      </div>

  </div>
)

const Testimonials = () => (
  <section className={`${styles.paddingY} relative flex-col ${styles.flexCenter} `}>
    <div className='w-full flex  justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]  '>
      <h1 className={`${styles.heading2} `}>
         What People are <br className="sm:block hidden" /> saying about us
      </h1>
      <div className={`w-full mt-0 ms:mt-6`}>
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>Everything you need to accept card payments and grow your business
          anywhere on the planet.</p>
      </div>

    </div>

    <div className="flex flex-1 flex-wrap sm:justify-start justify-center items-center feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card}/> 

        
      )}


    </div>

  </section>
)

export default Testimonials
