import React from "react";
import Header from "../components/Header";
import logo from "../img/logo.png";
import { FaSearch } from "react-icons/fa";
function Home() {
  return (
    <div>
      <Header />
      <body className="w-full h-screen bg-[#1f2129] flex justify-center">
        <div className="w-[1200px] h-screen">
          <div className="flex justify-center mt-20">
            <div className="flex-col flex gap-5">
              <img src={logo} alt="" className="w-24 h-24 cursor-pointer" />
              <p className="text-white text-4xl font-roboto">SFlix</p>
            </div>
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="Enter keywords..."
              className="w-[1200px] h-12 font-roboto pl-5 rounded-lg"
            />
            <div className="h-12 w-[80px] bg-[#04abc1] rounded-r-lg -ml-[80px] cursor-pointer flex justify-center items-center">
              <FaSearch className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
