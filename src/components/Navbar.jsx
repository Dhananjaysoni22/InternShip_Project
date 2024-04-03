import React from "react";
import Logo from "../assets/logo.png";
import J from "../assets/J.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className="lg:mb-4 md:mb-4 ">
      <nav className="flex lg:h-[80px] bg-white lg:items-center lg:justify-between lg:pl-[150px] lg:pr-[150px] md:h-[80px] md:items-center md:justify-between md:pl-[10px] md:pr[1 0px]">
        <div className="flex lg:items-center lg:justify-center lg:h-[100%] md:items-center md:justify-center md:h-[100%]">
          <img
            className=" lg:pl-6 lg:h-[70%] md:pl-5 md:h-[70%] h-[40px] "
            src={Logo}
            alt=""
          />
        </div>
        <div className="md:pr-11 lg:pl-0 md:pl-0 pl-11">
          <ul className="flex lg:space-x-3 md:space-x-3 space-x-1">
            <li className="flex text-center items-center justify-center"><p>Integration</p></li>
            <li className="flex  text-center items-center justify-center" >
             <p> Help <ArrowDropDownIcon/> </p>
            </li>
            <li className="flex h-[100%] items-center justify-center">
              <img
                className="h-[50px]  self-center  "
                src={J}
                alt=""
              />
            </li>
            <li className="flex text-center items-center justify-center"><p>Account <ArrowDropDownIcon/></p></li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
