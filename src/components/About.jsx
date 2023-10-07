import React from 'react'
import photo from "../assets/photo-1.jpg"
import {LuPhoneCall} from "react-icons/lu"
const About = () => {
  return (
    <div className='flex items-center max-sm:flex-col-reverse bg-primary-bg  p-web max-sm:p-mobile'>
        <div className='flex-1 flex flex-col p-5 relative'>
                <img src={photo} alt='photo' className='w-[400px] h-[500px] object-cover rounded-md relative'  />
                <div className='absolute w-[150px] max-sm:w-[100px] max-sm:h-[100px] h-[150px] bg-primary-orange right-[10%]  bottom-0 rounded-xl flex items-center justify-center flex-col'>
                        <h1 className='text-primary-text text-3xl font-semibold max-sm:text-xl'>10+</h1>
                        <span className='text-primary-text text-xl  text-center max-sm:text-sm'>years of experience</span>
                </div>
        </div>
        <div className='flex-1 '>
        <h1 className='text-primary-orange text-xl heading my-4'>About </h1>
        <h1 className='text-white text-5xl max-sm:text-4xl font-semibold'>
                Random Shots <span className='linear-text-bg'>(Dangi Boys)</span>
        </h1>
        <p className='text-gray-400 mb-7 mt-5  text-xl max-sm:text-justify max-sm:text-sm'>We offer a wide range of services, including cinematography, pre-wedding shoots, wedding photography and videography, video editing, candid photography, birthday shoots, photo sessions, modeling shoots, and portfolio sessions, among others."</p>
        <div className='flex items-center  gap-3'>
                <a href='#' className='bg-white font-semibold border-2 border-white py-3 px-5 text-lg hover:bg-transparent hover:text-white rounded-md duration-300 max-sm:text-sm '>Hire me</a>
                <div className=''>
                        <p className='text-primary-orange font-semibold text-xl max-sm:text-sm '>Need Help?</p>
                        <span className=' flex items-center gap-3 font-semibold text-xl max-sm:text-sm text-white'><LuPhoneCall size={"1.2em"} color='#fcac11'/>+91-962783304</span>
                </div>
        </div>
        </div>
    </div>
  )
}

export default About