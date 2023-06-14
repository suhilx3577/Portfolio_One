import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import graphql from '../assets/graphql.png'
// import icon from '../assets/icon.jpg'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import reactimage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import nextjs from '../assets/nextjs.png'



const Experience = () => {

    const exps = [
        {
            id:1,
            src: html,
            name:'HTML'
        },
        {
            id:2,
            src: css ,
            name:'CSS'
        },
        {
            id:3,
            src: github ,
            name:'GITHUB'
        },
        {
            id:4,
            src: javascript,
            name:'JAVASCRIPT'
        },
        {
            id:5,
            src: node,
            name:'NODE'
        },
        {
            id:6,
            src: reactimage,
            name:'REACT'
        },
        {
            id:7,
            src: tailwind,
            name:'TAILWIND'
        },
        {
            id:8,
            src: nextjs,
            name:'NEXTJS'
        },

    ]


  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'> EXPERIENCE </p>
                <p className='py-6'> These are the technologies I've Worked With</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0 '>
                {
                    exps.map(({id,src,name})=>(
                        <div key={id} className='shadow-md shadow-gray-900 hover:scale-110 duration-300 rounded-lg'>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{name}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience