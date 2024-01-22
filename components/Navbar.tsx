import Image from "next/image"
import Link from "next/link"
// import { useState } from "react"
// import Popup from "./Popup"

const Navbar = () => {

    function handleClick(){
        alert("Someone from our team will call you!")
    }

    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>{
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
        // Update the class name of the clicked link
        const links = document.querySelectorAll(".nav-link")
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };

    // const [showPopup, setShowPopup ] = useState(false)

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] top-0 z-50 px-4 bg-bgDarkblue">
        <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={35}/>
            </Link>
            <ul className="hidden lg:flex gap-7 ">
                <Link href="/#home" onClick={handleScroll} className="flex items-center gap-1 font-medium text-xl text-white hover:text-cyan-400 cursor-pointer duration-300 nav-link">
                    <li>Home</li>
                </Link>
                <Link href="/#stats" onClick={handleScroll} className="flex items-center gap-1 font-medium text-xl text-white hover:text-cyan-400 cursor-pointer duration-300 nav-link">
                    <li>Stats</li>
                </Link>
                <Link href="/#testimonials" onClick={handleScroll} className="flex items-center gap-1 font-medium text-xl text-white hover:text-cyan-400 cursor-pointer duration-300 nav-link">
                    <li>Testimonials</li>
                </Link>
            </ul>
            <button 
                // onClick= {() => setShowPopup(true)}
                onClick={handleClick}
                className="text-white border-2 bg-transparent border-cyan-400 hover:bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2"
            >
                Contact Us
            </button>
            {/* {showPopup && <Popup onClose={() => setShowPopup(false)}/>} */}
        </div>
    </div>
  )
}

export default Navbar
