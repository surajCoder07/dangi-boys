import React ,{useState} from 'react'
import {  RiCloseFill } from "react-icons/ri";
import {HiMenuAlt1} from "react-icons/hi"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
        
  return (
    <div className='flex justify-between bg-transparent   text-white items-center relative     py-2 h-[80px] px-4 '>
        <div>
                <h1 className='font-semibold text-xl z-[999999] relative'>Random Shots</h1>
        </div>
        <div className={`max-sm:absolute max-sm:flex max-sm:justify-center max-sm:items-center  max-sm:shadow-lg max-sm:bg-primary-bg max-sm:top-0 max-sm:h-screen  max-sm:w-[60%] max-sm:z-[9999] max-sm:left-0 max-sm:duration-300 
        ${
          isOpen ? " max-sm:-translate-x-0 " : "max-sm:-translate-x-[100%]"}`}>
                <ul className='flex items-center gap-5 max-sm:flex-col z-[9999] relative '>
                        <li className='cursor-pointer text-lg text-shadow btn'>Home</li>
                        <li className='cursor-pointer text-lg text-shadow btn'>About</li>
                        <li className='cursor-pointer text-lg text-shadow btn'>Tools</li>
                        <li className='cursor-pointer text-lg text-shadow btn'>Services</li>
                        <li className='cursor-pointer text-lg text-shadow btn'>Contact us</li>
                </ul>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="z-10 relative hidden max-sm:flex">
        {isOpen ? (
          <RiCloseFill size={"1.5em"}  color='#ffffff' className=" text-white cursor-pointer" />
        ) : (
          <HiMenuAlt1 size={"1.5em"} color='#ffffff' className="text-white cursor-pointer" />
        )}
      </div>
    </div>
  )
}

export default Header