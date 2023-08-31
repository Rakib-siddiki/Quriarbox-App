import { useState } from "react";
import logo from "../../assets/images/Nav&Banner/Logo.png";
import search from "../../assets/images/Nav&Banner/Search.svg";
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
const Navbar = () => {
  const [show,setShow]=useState(false)
  const handleClick=()=>{
    setShow(!show)
  }
  return (
    <>
      <nav className="navbar-bg relative">
        <div className="max-w-container mx-auto md:py-4 py-1 px-4 md:px-3 xl:px-0">
          <div className=" md:flex md:items-center">
            <div className="md:w-1/4 mb-5 md:mb-3 ">
              <img src={logo} alt="logo" />
            </div>
            {/* icon */}
            
            <div onClick={handleClick} className={ `md:hidden absolute top-4 right-0 text-2xl px-2 `}>
              {
                show == true? <FaBars/>:<GrClose/>
              }
            
            </div>
            {/* icon */}
            <div className={`md:flex md:items-center xl:w-3/4 justify-end duration-500 ${show==true?'-left-[-100%]':'left-0'} md:static absolute left-0 w-full pl-5 md:pl-0  bg-[#FFF8ED] rounded md:rounded-none rounded-br-lg z-10 `}>
            <ul className="flex md:flex-row flex-col xl:gap-x-6  md:gap-x-3 gap-y-2">
              <li className="text-[#817382] capitalize font-bold font-Raleway hover:text-primary duration-300 cursor-pointer">home</li>
              <li className="text-[#817382] capitalize font-bold font-Raleway hover:text-primary duration-300 cursor-pointer">Our services</li>
              <li className="text-[#817382] capitalize font-bold font-Raleway hover:text-primary duration-300 cursor-pointer">About Us</li>
              <li className="text-[#817382] capitalize font-bold font-Raleway hover:text-primary duration-300 cursor-pointer">What’s new?</li>
            </ul>
            <div className="xl:ml-[45px] md:ml-2 hidden md:block md:static absolute -top-1 right-8  scale-[.6] md:scale-100">
              <img src={search} alt="search" />
            </div>
            <div className="mt-3 md:mt-0 pb-5 md:pb-0">
            <a href="#" className=" px-2 py-2.5 md:py-[12px] md:px-[20px] border rounded-md md:ml-2 bg-[#FFE4D9] text-primary capitalize font-Oxanium md:font-bold font-semibold md:text-[20px] hover:bg-primary hover:text-white duration-500">contact us</a>
            </div>
            </div>
          </div>
        </div>
        {/* search for mobile */}
        <div className="md:hidden absolute top-1 right-8  scale-[.6] md:scale-100">
              <img src={search} alt="search" />
            </div>
        {/* search for mobile */}
      </nav>
    </>
  );
};

export default Navbar;
