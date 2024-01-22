import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
type Props = {
  key: number
  name: string
  years : string
  expertise: string
  city: string
}


const Doctor = ({ key, name, years, expertise, city }: Props) => {
  
  const router = useRouter()

  function handleClick(){
    alert("Booking successful")
    router.push("/")
  }

    
  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-10">
      <div className="pb-10 w-[20rem] xs:w-auto max-w-sm shadow-md mb-5 sm:mx-auto mt-16 bg-[#04293A] rounded-lg text-gray-900 hover:scale-[1.03] duration-500 ease-in-out">
        <div className="rounded-t-lg h-10 bg-[#041C32] overflow-hidden">
            {/* <img className="object-cover object-top w-full" src="./contact.png" alt='cover photo'></img> */}
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <Image className="object-cover object-center " src={'/placeholder.png'} width={'300'} height={'300'} alt='Woman looking front'></Image>
        </div>
        <div className="text-center mt-2">
          <div>{key}</div>
          <h2 className="font-semibold tracking-wide text-xl text-white my-2">{name}</h2>
          <p className="text-white tracking-[2.24px]">{expertise}</p>
        </div>
        <div className="w-full block text-white text-center px-4 pt-2">{years} Years of experience</div>
        <div className="w-full block text-white text-center hover:shadow-lg px-4 py-2">{city}</div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleClick}
            className="text-white border-2 bg-transparent border-cyan-400 hover:bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2"
          >Book Consult</button>
        </div>
      </div>
    </div>
  )
}

export default Doctor
