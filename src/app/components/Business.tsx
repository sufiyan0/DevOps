import { features } from '../constents'
import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import Image from 'next/image'
// 'use client'

// const FeaturesCart = ({ }) => (
//   

// )

const FeatureCard = ({index,icon ,title,content}:any) => (
 
    <div className={`flex flex-row p-6 feature-card rounded-[20px] ${index !==features.length - 1 ? "mb-6" : "mb-0" }`}>

      <div className={` w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <Image src={icon} alt='icons'/>
      </div> 
      
      <div className={`flex flex-1 flex-col ml-3 `}>
          <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1' >
            {title}
          </h4>
          <p className='font-poppins font-semibold text-dimWhite text-[14px] leading-[20px] mb-1'>
            {content}
          </p>
      </div>


  </div>


)


const Business = () => (

  <section id='features' className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[487px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button />

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {
        features.map((feature, index) => (

          <FeatureCard key={feature.id} {...feature} index={index} />

        ))


      }

    </div>


  </section>
)


export default Business
