import React from "react";
import logo from "../img/logo.png";
function Header() {
  const text = ["Home", "Movies", "TV Shows", "Top IMDB"];
  return (
    <div className="w-full h-16 bg-[#2f3441] flex justify-center">
      <div className="w-[1200px] flex justify-between items-center">
        <img src={logo} alt="" className="w-9 h-9 cursor-pointer" />
        <div className="flex gap-10 text-white font-roboto ">
          {text.map((text, index) => (
            <div className="cursor-pointer hover:text-[#04abc1]" key={index}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
