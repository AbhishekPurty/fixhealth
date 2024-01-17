import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 px-4 bg-bgGrey">
        <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={35}/>
            </Link>
            <ul className="hidden lg:flex gap-7 ">
                <div className="flex items-center gap-1 font-medium text-white hover:text-cyan-400 cursor-pointer duration-300">
                    <li>Home</li>
                </div>
                <div className="flex items-center gap-1 font-medium text-white hover:text-cyan-400 cursor-pointer duration-300">
                    <li>Services</li>
                </div>
                <div className="flex items-center gap-1 font-medium text-white hover:text-cyan-400 cursor-pointer duration-300">
                    <li>Blogs</li>
                </div>
                <div className="flex items-center gap-1 font-medium text-white hover:text-cyan-400 cursor-pointer duration-300">
                    <li>About</li>
                </div>
            </ul>
            <button className="text-white border-2 bg-transparent border-cyan-400 hover:bg-cyan-400 duration-300 lg:w-auto lg:mx-0 rounded-full gap-3 px-4 py-2">BOOK NOW</button>
        </div>
    </div>
  )
}

export default Navbar
