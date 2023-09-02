import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../img/logo.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import whatsapp from "../img/whatsapp.png";
import messenger from "../img/messenger.png";
import reddit from "../img/reddit.png";
import telegram from "../img/telegram.png";
import { FaSearch } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Firstpage() {
  return (
    <div>
      <Header />
      <body className="w-full h-screen flex justify-center">
        <div className="w-[1200px] h-screen">
          <div className="flex justify-center mt-20">
            <div className="flex-col flex gap-5">
              <img src={logo} alt="" className="w-24 h-24 cursor-pointer" />
              <p className="text-white text-4xl font-roboto">SFlix</p>
            </div>
          </div>
          <div className="mt-3 flex justify-center">
            <input
              type="text"
              placeholder="Enter keywords..."
              className="w-[1100px] h-12 font-roboto pl-5 rounded-lg"
            />
            <div className="h-12 w-[80px] bg-[#04abc1] rounded-r-lg -ml-[80px] cursor-pointer flex justify-center items-center">
              <FaSearch className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            <div className="font-roboto text-[#4c4c4d]">
              32.1k <p className="text-xs -mt-1">shares</p>
            </div>
            <div className="w-32 h-8 bg-[#1977f2] text-white gap-5 font-roboto text-xs flex items-center justify-center cursor-pointer">
              <img src={facebook} alt="" className="w-4 h-4" />
              4.5k
            </div>
            <div className="w-32 h-8 bg-[#00a8f4] text-white gap-5 font-roboto text-xs flex items-center justify-center cursor-pointer">
              <img src={twitter} alt="" className="w-5 h-5" />
              10.2k
            </div>
            <div className="w-32 h-8 bg-[#28a71a] text-white gap-5 font-roboto text-xs flex items-center justify-center cursor-pointer">
              <img src={whatsapp} alt="" className="w-5 h-5" />
              9k
            </div>
            <div className="w-32 h-8 bg-[#0084ff] text-white gap-5 font-roboto text-xs flex items-center justify-center cursor-pointer">
              <img src={messenger} alt="" className="w-5 h-5" />
              6.6k
            </div>
            <div className="w-32 h-8 bg-[#ff4500] text-white gap-5 font-roboto text-xs flex items-center justify-center cursor-pointer">
              <img src={reddit} alt="" className="w-5 h-5" />
              1.4k
            </div>
            <div className="w-32 h-8 bg-[#039be5] text-white gap-5 font-roboto text-xs flex items-center justify-center cursor-pointer">
              <img src={telegram} alt="" className="w-5 h-5" />
              0.4k
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-5 flex items-center justify-center gap-3 w-[250px] h-[60px] bg-[#04abc1] rounded-full font-roboto text-white text-xl font-bold cursor-pointer duration-300 hover:scale-125 z-10 shadow-3xl hover:shadow-[#04abc1]">
              View Full Site <BsFillArrowRightCircleFill />
            </div>
          </div>
          <div className="text-[#8d95a5] font-roboto mt-20">
            <p className="font-bold text-xl">Watch Movies Online For Free</p>
            <p>
              SFlix is the best website that allows users to watch HD movies and
              TV shows online free with no registration required. The new HD
              movies and shows are updated daily on various genres such as
              romance, action, adventure, comedy, etc. SFlix is likely to have
              all the movies you are looking for on the site, If not you can
              simply request it and it will be available for you to watch
              shortly.
            </p>
          </div>
          <div className="text-[#8d95a5] font-roboto mt-5">
            <p className="font-bold text-xl">What is SFlix?</p>
            <p>
              SFlix is your go-to website to watch free HD movies and TV shows!
              Here you can download or watch thousands of movies and series
              online seamlessly. SFlix also provides the ad-free feature as well
              as private source links for their users safety. We want to make
              movies and TV shows available for everyone regardless of their
              financial situation. Although this is a long journey, we strongly
              believe we can become the #1 Netflix alternative shortly with your
              support.
            </p>
          </div>
          <div className="text-[#8d95a5] font-roboto mt-5">
            <p className="font-bold text-xl">
              Is SFlix or 123Movies Better to watch series and movies?
            </p>
            <p>
              Nowadays when searching for 123Movies, we only see copies of this
              website with slightly different names. It is because 123Movie,
              which was once the most famous free movie stream ever, was shut
              down in 2018. We have not heard of the team comeback since. The
              copies of 123Movies with countless ads and pop-ups can put users
              at big risk such as virus, malware, leak of personal information,
              etc. Therefore we recommend SFlix all for your safety and quality
              streaming time. This website doesn’t require your registration or
              money, hence there is no chance for scammers and hackers to cause
              you harm.
            </p>
          </div>
          <div className="text-[#8d95a5] font-roboto mt-5">
            <p className="font-bold text-xl">Is It legal to Use SFlix?</p>
            <p>
              If you can get access to SFlix website, it is legal in your area.
              According to copyright attorneys, streaming movies and TV shows
              online is not illegal but downloading and sharing pirated files
              are. Therefore, you should protect yourself by using a reliable
              VPN to download files anonymously.
            </p>
          </div>
          <div className="text-[#8d95a5] font-roboto mt-5">
            <p className="font-bold text-xl">Is SFlix safe?</p>
            <p>
              Although SFlix is newly-created, please rest assured about its
              security. This is an ad-free website that doesn’t ask for your
              information to sign up or download any apps, extensions and such
              to stream movies. Hence SFlix keeps you from common Internet risks
              such as data loss, identity theft, etc, which allows you to enjoy
              your movie night risk-free. In addition to the above features, we
              also offer:
            </p>
            <p>- Clean and optimized UX & UI</p>
            <p>- Mobile friendly, Chromecast and Android supported</p>
            <p>- Best customer service – able to request titles</p>
            <p>- Adjustable. HD Resolution (720p)</p>
            <p>- No ads, pop-ups, commercials</p>
            <p>- No registration</p>
            <p>- Completely free!</p>
          </div>
          <div className="flex justify-center">
            <div className="mt-5 flex items-center justify-center gap-3 w-[250px] h-[60px] bg-[#04abc1] rounded-full font-roboto text-white text-xl font-bold cursor-pointer duration-300 hover:scale-125 z-10 shadow-3xl hover:shadow-[#04abc1]">
              Go To SFlix <BsFillArrowRightCircleFill />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default Firstpage;
