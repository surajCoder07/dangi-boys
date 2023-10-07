import React from 'react'
import photo from "../assets/bg.png"

const Services = () => {
  return (
    <div className='p-web max-sm:p-mobile py-10 bg-primary-bg'>
    
        <h1 className='text-primary-orange text-xl heading '>Our Services </h1>

      <div className='py-10'>
        <div className='card p-3 text-white w-[350px] h-[500px] flex flex-col'>
          <img src={photo} alt='img' className='z-20 h-[200px] w-full object-cover rounded-t-md' />
          <div className='text-white'>Wedding Videography</div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services