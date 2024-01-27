import City from "@/components/City";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Testmonial_v2 from "@/components/Testmonial_v2";

import { useSearchParams } from "next/navigation";

export default function Home() {

  const params = useSearchParams()


  return (
    <>
    <div>
      <Navbar/>
      {
        params.has("city")
        ?
          <City city = {params.get("city") || ""}/>
        :
        <>
          <Hero />
          <Stats />
          <Testmonial_v2/>
        </>
      }
      
    </div>
    </>
  )
}
