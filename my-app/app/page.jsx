import Navbar from '@/component/Navbar'
import React from 'react'
import { Cinzel, Cinzel_Decorative } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ["latin"],
});
const page = () => {
  return (
    <div className={'grow  flex justify-center h-full w-full'}>
      <Navbar />
      <div className=" grow">
        <img className='w-full h-full object-cover -z-1 absolute top-0 opacity-80' src="./img/top-foreground.jpg" alt="top foreground" />

        <div className=" flex  items-center w-full h-full flex-col">
          <div className="flex justify-center items-center flex-col relative top-45">
            <h1 className={`text-8xl font-bold ${cinzel.className} text-transparent bg-clip-text bg-linear-180 from-white to-transparent z-1  tracking-widest`}>ASHVATHHA</h1>


            <h2 className={`${cinzel.className} font-thin text-4xl text-red-600 tracking-widest text-shadow-md text-shadow-red-900  opacity-90`}>The world forgot its gods.</h2>
            <h2 className={`${cinzel.className} font-thin text-4xl text-red-600 tracking-widest  text-shadow-md  text-shadow-red-900 opacity-90`}>The sea remembers.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page
