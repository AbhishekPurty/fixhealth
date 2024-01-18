// import Form from "@/components/Form";
import Form_v2 from "@/components/Form_v2";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Testmonial_v2 from "@/components/Testmonial_v2";
// import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <Stats />
      {/* <Testimonials /> */}
      {/* <Form /> */}
      <Form_v2 />
      <Testmonial_v2/>
    </div>
    </>
  )
}
