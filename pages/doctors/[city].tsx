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
      console.log(temp)
    })
  }, [city])

  return (
    <div className="lg:grid grid-cols-2 lg:px-64">
      {data ?
        data.map((doctor:any) => {
          console.log("Hello")
          return(
            <Doctor key={doctor.id} name={doctor.name} years={doctor.years} expertise={doctor.expertise} city={doctor.city} />
          )
        })
        :
        <div className="text-white bg-red-600 w-[100rem] h-[100rem]">
          No doctor found in your location
        </div>
      }
    </div>
  )
}