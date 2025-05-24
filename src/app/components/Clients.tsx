import React from 'react'
import Image from 'next/image'
import { clients } from "../constents";
import styles from "../style";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[190px] m-5`}>

          <Image src={client.logo} alt='client' className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>

  </section>
)

export default Clients
