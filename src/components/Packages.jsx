import React from 'react'
import { packs } from '../utils/packs'
import {GiFrayedArrow} from "react-icons/gi"
import {LiaRupeeSignSolid} from "react-icons/lia"

const Packages = () => {
  return (
        <div id='packages' className='p-web max-sm:p-mobile py-10 bg-primary-bg flex flex-col'>
    
        <h1 className='text-primary-orange text-xl heading '>Our Packages </h1>
        <div className='my-4 py-4 flex  flex-wrap gap-4 justify-around'>
        {
          packs?.map((pack)=>{
            return <div key={pack.id} className='package-card flex-shrink-0 text-white flex flex-col h-fit max-sm:w-full'>
        <img src={pack.src} className='rounded-t-[10px] w-full h-[250px] object-cover max-sm:h-[200px]'/>
        <div className='flex flex-col pb-4'>
          <h1 className='capitalize text-white px-2 text-center font-semibold text-xl'>{pack.title}</h1>
          <ul className='py-3 '>
          {
            pack?.details.map((feature,index)=>{
              return <li key={index} className='px-3 text-sm flex items-center gap-3 justify-normal py-1  '> <GiFrayedArrow size={"1.5rem"} className='-rotate-45'/>{feature}</li>
            })
          }
          </ul>
          <div className='border border-primary-orange  self-center w-[90%]  text-center text-xl font-semibold flex items-center justify-center h-[40px]  bg-primary-orange text-primary-text duration-500 cursor-pointer hover:text-white hover:bg-transparent rounded-md' ><LiaRupeeSignSolid/>{pack.price}</div>
          <span className='text-sm self-end my-1 px-4 text-gray-500'> *{pack.info }</span>
        </div>

        </div>
          })
        }

        </div>
        <a href='https://wa.me/9627283304?text=Hello' target='blank' className='border border-primary-orange  w-[300px] flex items-center justify-center self-center  text-center text-xl font-semibold   h-[50px]  my-4  bg-primary-orange text-primary-text duration-500 cursor-pointer hover:text-white hover:bg-transparent rounded-md'>Book now</a>
        </div>
  )
}

export default Packages