import React from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import { apple, bill, google } from "../assets";


const Billing = () => (
  <section className={ `${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <Image src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]'/>
    </div>

    <div className={`${layout.sectionInfo} sm:ml-10`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-1 flex-row flex-wrap mt-6 sm:mt-10">
        <Image src={apple} alt='apple' />
        <Image src={google} alt='google' />

      </div>
    </div>



  </section>

)

export default Billing
