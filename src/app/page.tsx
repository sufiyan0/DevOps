import style from "./style"

import {Navbar,Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CAT, Footer} from "./components/index"

export default function Home() {
  return (


    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero/>
        </div>
      </div>
     
      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CAT/>
          <Footer/>
        </div>
      </div>



    </div>


  )
}
