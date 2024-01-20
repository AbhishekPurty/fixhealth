import Image, { StaticImageData } from "next/image";

interface Props{
    quote : String;
    name: String;
    age: String;
    profession : String;
    issue: String;
    p_image: StaticImageData;
}
const Testimonycard = ({quote, name, profession, issue, p_image,age }: Props) => {
  return (
        <div className="container justify-center mx-auto flex flex-col items-center text-white ">
            <div className="w-[20rem] lg:w-[25rem] h-[27rem] xs:w-auto max-w-sm shadow-md mb-5 sm:mx-auto mt-16 bg-[#04293A] rounded-lg text-gray-900 hover:scale-[1.03] duration-500 ease-in-out">
            <div className="rounded-t-lg h-20 bg-[#041C32] overflow-hidden">
                {/* <img className="object-cover object-top w-full" src="./contact.png" alt='cover photo'></img> */}
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <Image className="object-cover object-center " src={p_image} alt='Woman looking front'></Image>
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold tracking-wide text-xl text-white my-2">{name}, {age}</h2>
                <p className="text-white tracking-[2.24px]">{profession}</p>
            </div>
                <div className="w-full block text-white text-center hover:shadow-lg px-4 py-2">{quote}</div>
            </div>
        </div>
  )
}

export default Testimonycard
