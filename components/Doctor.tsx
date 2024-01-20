import React, { useState } from 'react'
// import axios from 'axios';
// interface Props{
//   name: string
//   expertise: string
//   city: string
// }


const Doctor = () => {

  // const getData = () => {
  //   axios.get(`/api/hello`)
  //   .then(res => {
  //     console.log(res.data.name)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
    
  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-10">
      <div className=" w-[20rem] xs:w-auto max-w-sm shadow-md mb-5 sm:mx-auto mt-16 bg-[#04293A] rounded-lg text-gray-900 hover:scale-[1.03] duration-500 ease-in-out">
        <div className="rounded-t-lg h-32 bg-[#041C32] overflow-hidden">
            {/* <img className="object-cover object-top w-full" src="./contact.png" alt='cover photo'></img> */}
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              {/* <Image className="object-cover object-center " src={p_image} alt='Woman looking front'></Image> */}
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold tracking-wide text-xl text-white my-2">Name</h2>
          <p className="text-white tracking-[2.24px]">Expertise</p>
        </div>
        <div className="w-full block text-white text-center px-4 pt-2">Years of experience</div>
        <div className="w-full block text-white text-center hover:shadow-lg px-4 py-2">City</div>
      </div>
    </div>
  )
}

export default Doctor
