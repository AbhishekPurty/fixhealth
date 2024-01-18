import { RiHeartPulseLine } from "react-icons/ri";
import Form_v2 from "./Form_v2";

const Hero = () => {
  return (
    <div className="h-[110vh] xl:pb-20 ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full bg-[url('/fixhealthbg.jpg')] py-[4rem] bg-center bg-no-repeat bg-cover">
          <div className="mx-10 xl:w-[48%] text-center xl:text-left">
            <div className="flex items-center tracking-widest bg-white text-black py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              <RiHeartPulseLine />
              <span>LIVE YOUR LIFE</span>
            </div>
            <h1 className="mb-6 text-5xl lg:text-6xl tracking-wide font-semibold text-cyan-400">Welcome to Fix Health</h1>
            <p className="mb-[42px] text-xl lg:text-2xl">
            At Fix Health, our experienced physiotherapists are dedicated to empowering you to live pain-free. We provide personalized and compassionate care for optimal physical health.
            </p>
            <button className="text-white border-2 border-cyan-400 bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2">Contact Us</button>
          </div>
          <div>
            <Form_v2/>
          </div>
          {/* <div className="hidden xl:flex max-w-[814px] self-end">
            <Image src="/fixhealthbg.jpg" alt="heroimage" width={600} height={400}/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
