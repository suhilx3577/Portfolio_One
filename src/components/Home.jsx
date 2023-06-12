import React from 'react'
import heroimage from "../assets/heroImage.png"
import {BiRightArrow} from 'react-icons/bi'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className=' relative top-28 max-w-screen-lg mx-auto flex flex-col  items-center justify-center px-4 md:flex-row'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='mx-16 text-4xl md:text-7xl font-bold text-white'>
                    I'm a React JS Developer 
                </h2>
                <p className=' text-gray-500 mx-9 py-4 max-w-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis animi neque nisi quod nihil unde, alias sint ad doloribus. Quas impedit nisi natus, voluptatum voluptatem in quaerat repellendus asperiores beatae.
                </p>
                <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300 ml-2'> <BiRightArrow size={18}/></span>
                </button>

                </div>
            </div>
            <div>
                <img src={heroimage} alt="my_profile" className='rounded-2xl mx-auto w-2/3'/>
            </div>
        </div>
    </div>
  )
}

export default Home