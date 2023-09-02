import React from "react";
import logo from "../img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
function Headerhome() {
  return (
    <div className="w-full h-14 bg-[#2f3441] flex">
      <div className="flex justify-start">
        <div className="w-[1000px] flex items-center justify-evenly pl-16">
          <img src={logo} alt="" className="w-9 h-9 cursor-pointer " />
          <div className=" items-center justify-center flex w-28 h-9 gap-2 bg-[#3f4757] rounded text-white font-roboto text-sm cursor-pointer">
            <GiHamburgerMenu className="h-4 w-4" />
            Browse
          </div>
          <div className="flex bg-white rounded">
            <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Enter keywords..."
              className="w-[700px] h-8 font-roboto pl-3 rounded outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-[350px] items-center justify-end cursor-pointer">
          <div className="flex items-center text-white font-roboto text-sm gap-2">
            <div className="text-lg">
              <BiUser />
            </div>
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headerhome;
