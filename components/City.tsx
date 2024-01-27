import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"
import Doctor from "@/components/Doctor"

type Props = {
  city: string
}

export default function City({city} : Props){

  
  const router = useRouter();
  if(city===""){
    router.push("/")
  }
  function handleHome(){
    router.push("/")
  }
  const [data, setData ] = useState([])
  const [isLoad, setIsLoad] = useState(false)
  
  useEffect(()  => {


    axios.get('/api/hello')
    .then((res) => {
      let temp:any = []
      for(let item of res.data){
        if(city && item.city.toLowerCase() === city.toLowerCase()){
          temp.push(item)
        }
        else if(city && city.toLowerCase()==="all"){
          temp.push(item)
        }
      }
      setData(temp)

      setTimeout(() => {
        
      }, 1000);

      setIsLoad(true)
    })
  }, [city])

  return (
    <>
      {isLoad && data.length != 0 ?
      <div>
        <div className="lg:grid grid-cols-2 lg:px-36 lgl:px-60 mb-20">
          {data.map((doctor:any) => {
            return(
              <Doctor key={doctor.id} name={doctor.name} years={doctor.years} expertise={doctor.expertise} city={doctor.city} image={doctor.photo} />
            )
          })}
        </div>
        <div className="flex items-center justify-center mb-10">
        <button 
          onClick={handleHome}
          className="text-white border-2 bg-transparent border-cyan-400 hover:bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2"
        >
          Home
        </button>
        </div>
        </div>
        :
        <div>
        <div className="flex items-center justify-center">
          <h1 className="bg-[#04293A] rounded-md w-fit mx-10 my-20 py-2 px-2 text-3xl">
            {
              !isLoad
              ?
              <div>Loading...</div>
              :
              <div>Sorry! No doctor found in your location!</div>
            }
          </h1>
        </div>
        <div className="flex items-center justify-center mb-10">
        <button 
          onClick={handleHome}
          className="text-white border-2 bg-transparent border-cyan-400 hover:bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2"
        >
          Home
        </button>
        </div>
        </div>
        
      }
  </>
  )
}