import { IoPeople, IoCalendar } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

const Stats = () => {
  return (
      <div id="stats" className="pb-10 my-5 lg:px-10">
          <div className="container mx-auto h-full py-5 bg-[#04293A]">
            <div className="flex flex-col lg:flex-row gap-y-6 justify-between">
              <div className="flex-1 flex flex-col lg:border-r-2 border-[#034868] items-center">
                <div className="text-6xl mb-2 text-cyan-400"><IoPeople /></div>
                <div className="text-2xl xl:text-[40px] font-semibold text-cyan-400 xl:mb-2">+10000</div>
                <div className="tracking-wider text-lg">Happy Patients</div>
              </div>
              <div className="flex-1 flex flex-col lg:border-r-2 border-[#034868] items-center">
                <div className="text-6xl mb-2 text-cyan-400"><IoCalendar /></div>
                <div className="text-2xl xl:text-[40px] font-semibold text-cyan-400 xl:mb-2">+1 Lakh</div>
                <div className="tracking-wider text-lg">Session</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="text-6xl mb-2 text-cyan-400"><AiOutlineSmile /></div>
                <div className="text-2xl xl:text-[40px] font-semibold text-cyan-400 xl:mb-2">9.6/10</div>
                <div className="tracking-wider text-lg">Avg. Rating</div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Stats
