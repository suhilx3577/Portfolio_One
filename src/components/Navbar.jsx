import React from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'

const Navbar = () => {

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
                    <li key={id} className='px-4 font-bold text-gray-500 cursor-pointer capitalize hover:scale-110 duration-300'>{link}</li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default Navbar