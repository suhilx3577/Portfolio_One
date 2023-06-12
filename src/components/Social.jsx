import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
// import pdff from './resume.pdf'

const Social = () => {

    const links = [
        {
            id:1,
            href:'https://www.linkedin.com/in/suhil-d-8234a8189/',
            child:<>LinkedIn <FaLinkedin size={30}/></>,
            style:'rounded-tr-md'
        },
        {
            id:2,
            href:'https://github.com/suhilx3577',
            child:<>GitHub <FaGithub size={30}/></>,
        },
        {
            id:3,
            href:'mailto:suhilkhan450@gmail.com',
            child:<>Mail <HiOutlineMail size={30}/></>,
        },
        {
            id:4,
            href:'resume.pdf',
            child:<>Resume <BsFillPersonLinesFill size={30}/></>,
            download:true,
            style:'rounded-br-md'
        },

    ]

  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                links.map(({id,style,href,child,download})=> (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] duration-300 '+ style}>
                        <a className='flex justify-between items-center w-full text-white ' href={href} target='_blank' download={download} rel='noreferrer'>
                            {child}
                        </a> 
                    </li>
                ))
            }

        </ul>
    </div>
  )
}

export default Social