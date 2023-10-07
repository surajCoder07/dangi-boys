import React from 'react'
import { services } from '../utils/services'
import { Fade } from 'react-awesome-reveal'

const Services = () => {
  return (
    <div id='services' className='p-web max-sm:p-mobile py-10 bg-primary-bg'>
    
        <h1 className='text-primary-orange text-xl heading '>Our Services </h1>

      <div className='py-10 flex flex-wrap justify-around'>

      {
        services?.map(service=>{
          return <div key={service.id} className='card duration-200 hover:scale-[1.01] p-3 text-white w-[350px] gap-3 z-30 my-5 flex flex-col '>
          <Fade className='w-full'>
          <img src={service?.src} alt='img' className='z-40 h-[200px] max-sm:h-[150px] w-full object-cover rounded-t-md' />
          <h1 className='text-white text-center py-3 z-50 font-semibold text-2xl max-sm:text-xl'>{service?.title}</h1>
          <p className='text-gray-300 text-justify px-2  max-sm:text-sm'>
          {service?.desc}
          </p>
          </Fade>
        </div>
        })
      }

        
      </div>
    </div>
  )
}

export default Services