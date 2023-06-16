import React from 'react'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import dbms1 from '../assets/portfolio/dbms1.jpg'
import ImageGallery from '../assets/portfolio/ImageGallery.jpg'
import Movizz from '../assets/portfolio/Movizz.jpg'
import ParallaxEffect from '../assets/portfolio/ParallaxEffect.jpg'
import ShareIt from '../assets/portfolio/ShareIt.jpg'

// import usestate from '../assets/portfolio/usestate.jpg'



const Portfolio = () => {

    const portfolios = [
        {
            id: 2,
            src: dbms1,
            demolink: 'https://www.youtube.com/watch?v=zGtpQlZYgIA',
            gitLink: 'https://github.com/suhilx3577/banking-tsf'

        },
        {
            id: 3,
            src: ImageGallery,
            demolink: 'https://image-gallery-suhil.netlify.app/',
            gitLink: 'https://github.com/suhilx3577/MernLearning/tree/master/CSS/unwrapClass'
        },
        {
            id: 4,
            src: Movizz,
            demolink: 'https://suhil-moviz.netlify.app/',
            gitLink: 'https://github.com/suhilx3577/Moviezz'
        },
        {
            id: 5,
            src: ParallaxEffect,
            demolink: 'https://suhil-parallax.netlify.app/',
            gitLink: 'https://github.com/suhilx3577/MernLearning/tree/master/CSS/Lec-3/Parallax'
        },
        {
            id: 6,
            src: ShareIt,
            demolink: 'https://share-it-suhil.netlify.app/',
            gitLink: 'https://github.com/suhilx3577/Share-It-App'
        },

    ]



    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>PORTFOLIO</p>
                    <p className='py-6'>Check out some of My Works Right Here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {

                        portfolios.map(({ id, src ,demolink , gitLink}) => (

                            <div key={id}  className='shadow-md shadow-gray-800 rounded-lg '>
                                <img src={src}
                                    alt=""
                                    className='rounded-md hover:scale-105 duration-300 h-44'/>
                                <div className='flex items-center justify-center'>
                                    <button  className='w-1/2 px-6 py-3 hover:scale-110 duration-300'>
                                        <a href={demolink} target='_blank'>Demo</a>
                                    </button>
                                    <button className='w-1/2 px-6 py-3 hover:scale-110 duration-300'>
                                    <a href={gitLink} target='_blank'>Code</a>
                                        
                                    </button>
                                </div>
                            </div>

                        ))

                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio