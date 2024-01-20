import { RiHeartPulseLine } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react"
import Popup from "./Popup"

const Hero = () => {

  const [showPopup, setShowPopup ] = useState(false)

  return (
    <div id="home" className="h-[110vh] xl:pb-20 md:pb-20 ">
      <div className="container mx-auto h-full">
        {/* In next line use "bg-[url('/fixhealthbg.jpg')] py-[4rem] bg-center bg-no-repeat bg-cover" for whole screen bg */}
        <div className="py-10 xl:py-0 xl:px-10 flex flex-col xl:flex-row items-center justify-between h-full">
          <div className="mx-10 xl:w-[48%] text-center justify-center xl:text-left">
            <div className="flex items-center tracking-widest bg-white text-black py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              <RiHeartPulseLine />
              <span>LIVE YOUR LIFE</span>
            </div>
            <h1 className="mb-6 text-5xl lg:text-6xl tracking-wide font-semibold text-cyan-400">
              Welcome to Fix Health
            </h1>
            <p className="mb-[42px] text-xl lg:text-2xl">
            At Fix Health, our experienced physiotherapists are dedicated to empowering you to live pain-free. We provide personalized and compassionate care for optimal physical health.
            </p>
            <button 
              onClick= {() => setShowPopup(true)}
              className="text-white border-2 border-cyan-400 bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2 bg-transparent hover:bg-cyan-400">
              BOOK NOW
            </button>
            {showPopup && <Popup onClose={() => setShowPopup(false)}/>}
          </div>
          <div className="max-w-[814px] py-10">
            <Image src="/hero_img4.png" alt="heroimage" width={600} height={300}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
