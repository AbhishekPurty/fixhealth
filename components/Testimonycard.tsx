import Image, { StaticImageData } from "next/image";

interface Props{
    quote : String;
    name: String;
    profession : String;
    issue: String;
    p_image: StaticImageData;
}
const Testimonycard = ({quote, name, profession, issue, p_image }: Props) => {
  return (
    <div className="container justify-center px-14 py-12 mx-auto gap-10 flex flex-col items-center text-white ">
        <div className="bg-[#04293A] py-10 border-8 flex flex-col items-center justify-center">
        <div className=" w-full flex flex-col items-center justify-center">
        <div className="drop-shadow-lg p-3">
            <Image src={p_image} alt="p1" width={250} height={250} />
        </div>
        </div>
        <div>
            <div className="flex flex-col justify-center h-full items-center">
                <div className="mx-auto items-center justify-center text-center">
                    <p className="text-[22px] text-center lg:text-left mb-7 gap-x-2 items-center tracking-widest py-[10px] px-[20px]">
                        <span className="flex flex-row mx-2 text-xl lg:text-2xl">{quote}</span>
                    </p>
                    <div className="px-[20px] text-[26px] items-center font-bold text-cyan-400">{name}</div>
                    <div className="px-[20px] font-medium uppercase tracking-[2.24px]">{profession}</div>
                    <div className="px-[20px]">{issue}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonycard
