import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"
import Doctor from "@/components/Doctor"

export default function City(){

  const router = useRouter()
  const [data, setData ] = useState([])
  let city:any = router.query.city
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
    })
  }, [city])

  return (
    <>
      {data.length != 0 ?
        <div className="lg:grid grid-cols-2 lg:px-36 lgl:px-60">
          {data.map((doctor:any) => {
            return(
              <Doctor key={doctor.id} name={doctor.name} years={doctor.years} expertise={doctor.expertise} city={doctor.city} />
            )
          })}
        </div>
        :
        <div className="flex items-center justify-center">
          <h1 className="bg-[#04293A] rounded-md w-fit mx-10 my-20 py-2 px-2 text-3xl">
            Sorry! No doctor found in your location!
          </h1>
        </div>
      }
  </>
  )
}