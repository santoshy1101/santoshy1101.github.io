import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const links =[
    {id:1, link:"home"},
    {id:2, link:"about"},
    {id:3, link:"projects"},
    {id:4, link:"skills"},
    {id:5, link:"contact"},
]

const Navbar = () => {
    const [nav,setNav] =useState(false)
    // const navigate = useNavigate();
  return (
    <div className='fixed z-50 flex items-center justify-between w-full h-20 px-4 text-white bg-slate-700 '  >
    <div>
    <h1 className='ml-2 text-5xl font-signature'>Santosh</h1>
    </div>

    <ul className='items-center hidden md:flex'>

    {
        links.map(({id, link},ind)=>(
         <Link to={link} key ={ind}><li  className='px-4 py-2 font-medium text-gray-500 capitalize duration-700 shadow-xl cursor-pointer hover:shadow-cyan-400 hover:rounded-lg hover:scale-105'
         >
         {link}
         </li>  </Link> 
        ))
    }     
    <li className='px-4 py-2 font-medium text-gray-500 capitalize duration-700 shadow-xl cursor-pointer hover:shadow-cyan-400 hover:rounded-lg hover:scale-105'
        >
        <a href="/Santosh_Yadav_Resume.pdf" download onClick={()=>window.open("https://drive.google.com/file/d/1S9esGcvYnjMRnbvpiOeRbbdj25JMoopq/view","_blank" ) } >Resume</a>
    
        </li>   
    </ul>

    <div onClick={()=> setNav(!nav)}
    className='z-10 pr-4 text-gray-500 cursor-pointer md:hidden'
    >
    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
    </div>

    { nav && (
        <ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800'>

    {
        links.map(({id, link},ind)=>(
            <li key ={ind} className='px-4 py-2 my-2 text-4xl capitalize duration-700 cursor-pointer hover:shadow-inner hover:shadow-cyan-400 hover:rounded-lg hover:scale-105'
        >
        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}> {link}</Link>
        </li>   
        ))
    }

    <li className='px-4 py-2 my-2 text-4xl font-medium text-gray-500 capitalize duration-700 cursor-pointer hover:shadow-inner hover:shadow-cyan-400 hover:rounded-lg hover:scale-105'
    >
    <a href="/Santosh_Yadav_Resume.pdf" download={true} onClick={()=>window.open("https://drive.google.com/file/d/1S9esGcvYnjMRnbvpiOeRbbdj25JMoopq/view","_blank" ) } >Resume</a>
    </li> 
    

    </ul>
        
    )}

    
    
    </div>
  )
}

export default Navbar