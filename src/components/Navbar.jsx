import React, { useState } from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const links = [
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ]


  return (
    <div className='flex justify-between items-center w-full bg-black text-white h-20 fixed px-4'>
        <div>
            <h1 className='text-5xl font-signature capitalize ml-2 mt-3 cursor-pointer hover:scale-105 duration-200 '> Suhil D</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({link,id})=>(
                    <li key={id} className='px-4 text-xl font-bold text-gray-500 cursor-pointer capitalize hover:scale-110 duration-300'>{link}</li>
                ))
            }
        </ul>
        <div onClick={()=> setNav(!nav)} className='flex cursor-pointer pr-4 z-10 text-gray-500 hover:scale-105 duration-200 md:hidden'>
            { nav? <FaTimes  size={30}/> : <FaBars  size={30}/> }
        </div>
        {
        nav && 
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800 md:hidden'>
            {
                links.map(({link,id})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 '>{link}</li>
                ))
            }
        </ul>

        }

    </div>
  )
}

export default Navbar