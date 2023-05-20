import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full p-10 "
    >
      <div className="flex flex-col items-center justify-around max-w-screen-lg px-16 m-auto lg:flex-row-reverse md:flex-col gap-x-16 ">
      <div className=" flex justify-center items-centerbg-transparent  min-[320px]:px-[16px]  sm:px-16 md:px- py-8 mt-16   border-cyan-400 group md:flex  ">
      <img
        src={HeroImage}
        alt="my profile"
        className=" duration-700  shadow-md md:w-[70%] lg:w-[90%]   rounded-2xl hover:scale-105"
      />
    </div>
        <div className="mt-10 ">
          <h2 className=" font-bold text-[16px] text-white sm:text-4xl">
            I'am a Full Stack Web Developer
          </h2>
          <p className="max-w-md sm:text-[18px] py-4 text-gray-500 text-[12px]">
            I am a full stack web developer with excellent knowledge of HTML,
            CSS, JavaScript, React, NodeJS, Node, Python and other related
            technologies.
          </p>
          <div  className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-slate-600 ">
           
          <a href="/Santosh_Yadav_Resume.pdf" download onClick={()=>window.open("https://drive.google.com/drive/u/1/folders/1SHMGIJ8A68kNu-JAfoNYcTrK7OYXOC3q","_blank" ) } >Resume</a>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Home
