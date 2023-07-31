import React from "react";

function Footer() {
  return (
    <div>
      <div className="mt-10 flex justify-center gap-10 text-white font-roboto font-thin">
        <p className="cursor-pointer">Android App</p>
        <p className="cursor-pointer">Terms of servise</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">Sitemap</p>
        <p className="cursor-pointer">9anime</p>
      </div>
      <div className="mt-5 flex-col justify-center items-center text-gray-600 font-roboto font-thin text-xs">
        <div className="flex justify-center">
          SFlix is a Free Movies streaming site with zero ads. We let you watch
          movies online without having to register or paying, with over{" "}
        </div>
        <div className="flex justify-center mt-1">
          10000 movies and TV-Series. You can also Download full movies from
          MoviesCloud and watch it later if you want.
        </div>
      </div>
      <div className="mt-5 flex justify-center font-roboto font-thin text-gray-400">
        © SFlix
      </div>
      <br />
    </div>
  );
}

export default Footer;
