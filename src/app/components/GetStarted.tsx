import React from 'react'
import styles from '../style'
import Image from 'next/image'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={` ${styles.flexCenter} h-[140px] w-[140px] p-[2px] rounded-full bg-blue-gradient cursor-pointer hover:scale-105 `}>
      <div className={`bg-primary w-[100%] h-[100%] rounded-full ${styles.flexCenter} flex-col `} >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <Image src={arrowUp} alt="arrowUp" className={` w-[32px] h-[32px] object-center`} />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
    
  )
}

export default GetStarted