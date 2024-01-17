import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Testimonials />
      <Form />
    </div>
    </>
  )
}
