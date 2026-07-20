import React from 'react'
import Link from 'next/link'
import { Cinzel } from 'next/font/google'
const cinzel = Cinzel({
  subsets: ["latin"],
}); 
const Navbar = () => {
  return (
    <div className='fixed top-0 bg-transparent bg-linear-180 from-black to-transparent w-full h-1/10 max-h-13 flex justify-between'>
        <div className="Navlogo w-2/10 flex gap-5 items-center">
            <div className="symbol ml-3"></div>
            <div className={`${cinzel.className} underline decoration-1  text-2xl text-transparent bg-clip-text bg-linear-180 from-yellow-500 to bg-yellow-700`}>ASHVATHHA</div>
        </div>
        <div className="pages w-6/10">
            <ul className='flex w-full h-full justify-around'>
                <li className='h-full flex items-center '>
                    <Link className={`${cinzel.className}`} href="/">Home</Link>
                </li>
                <li className='h-full flex items-center '>
                    <Link className={`${cinzel.className}`} href="/">About</Link>
                </li>
                <li className='h-full flex items-center '>
                    <Link className={`${cinzel.className}`} href="/">Chapters</Link>
                </li>
                <li className='h-full flex items-center '>
                    <Link className={`${cinzel.className}`} href="/">Characters</Link>
                </li>
                <li className='h-full flex items-center '>
                    <Link className={`${cinzel.className}`} href="/">Galary</Link>
                </li>
                <li className='h-full flex items-center '>
                    <Link className={`${cinzel.className}`} href="/">world</Link>
                </li>
            </ul>
        </div>
        <div className={`${cinzel.className} w-2/10 flex items-center justify-center`}>
        <Link className=' border-2 border-yellow-700 px-5 py-2' href={'/'}>Begin your Journey</Link>
        </div>
    </div>
  )
}

export default Navbar
