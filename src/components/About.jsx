import React from 'react'

const About = () => {
  return (
    <div name='about'
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>ABOUT</p>
            </div>

            <p className=' mt-4px text-lg md:text-xl md:mt-20'>
              I am a results-oriented React.js developer with a deep passion for building exceptional web applications. With a strong foundation in front-end development and a keen eye for design, I strive to create seamless user experiences that leave a lasting impression. My journey as a developer began with a fascination for crafting elegant code and a commitment to continuous learning. This drive has led me to stay up-to-date with the latest industry trends and leverage cutting-edge technologies to deliver innovative solutions.
              </p>
            <br/>
            <p className='text-lg md:text-xl'>
              I thrive in collaborative environments where I can contribute my skills and expertise to a team working towards a shared vision. I am skilled in leveraging the power of React.js to develop scalable and maintainable codebases, ensuring high performance and code reusability. From crafting pixel-perfect UIs to implementing complex functionality, I am dedicated to delivering clean, efficient, and user-centric applications. I am passionate about staying at the forefront of web development, constantly exploring new tools and techniques to enhance my craft and deliver the best possible results for every project.
              </p>
        </div>
    </div>
  )
}

export default About