import React from 'react'

const About = () => {
  return (
    <div name='about'
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>ABOUT</p>
            </div>

            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit laboriosam voluptates deserunt sapiente eveniet commodi facere ex, iure sunt dolorum consequuntur fugiat officiis neque tempora blanditiis eos aspernatur. Modi dolorem veniam porro corrupti corporis velit ea exercitationem sed consequuntur fugiat. Illo error perferendis quas a praesentium nemo impedit odio.</p>
            <br/>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit laboriosam voluptates deserunt sapiente eveniet commodi facere ex, iure sunt dolorum consequuntur fugiat officiis neque tempora blanditiis eos aspernatur. Modi dolorem veniam porro corrupti corporis velit ea exercitationem sed consequuntur fugiat. Illo error perferendis quas a praesentium nemo impedit odio.</p>
        </div>
    </div>
  )
}

export default About