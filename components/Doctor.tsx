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
    <div>
      <div className="flex flex-col mx-auto items-center justify-center gap-10">
        
          <div className="flex w-[50vh] flex-col items-center justify-center border-8 px-5 py-5 bg-[#04293A]">
          <div className="pb-5 text-[26px] font-bold">Name </div>
          <div>7 years of experience</div>
          <div className="font-semibold tracking-wide text-cyan-400 rounded-md px-2"> Expertise </div>
          <div className=""> City </div>
          </div>
      </div>
    </div>
  )
}

export default Doctor
