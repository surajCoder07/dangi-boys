import React from 'react'
import { tools } from '../utils/tools'

const Tools = () => {
  return (
    <div className=' bg-primary-bg p-web max-sm:p-mobile pt-10 '>
        <h1 className='text-primary-orange text-xl heading '>Tools </h1>
        <div className='flex py-5 items-center flex-wrap gap-5 justify-between max-sm:block  '>
        {
                tools?.map((tool)=>{
                        return <div key={tool.id} className='rounded-lg tool-card  relative flex flex-col max-sm:m-5 justify-center p-3 items-center max-h-[200px]'>
        <img src={tool?.src} className='w-[200px] max-sm:w-[150px] h-auto object-cover '/>
        <h2 className='text-primary-text font-semibold text-2xl pb-2 '>{tool?.name}</h2>
                
        </div>
                })
        }
        
        </div>
        
        

    </div>
  )
}

export default Tools