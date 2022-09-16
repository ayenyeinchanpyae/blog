import React from "react";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import banner from "../images/banner.jpg";
const Hero = () => {
  return (
    <section className="h-full mb-8 xl:mb-[100px] pt-[100px] lg:ml-[100px]">
      <div className="flex flex-col lg:flex-row ">
        <div className="flex items-center justify-center w-full">
          <img
            src={banner}
            className="lg:w-[450px] w-[350px] lg:h-auto lg:p-[20px] "
            alt=""
          />
        </div>
        <div className=" lg:order-first flex flex-col items-center lg:items-start text-center lg:text-left justify-center px-4 lg:px-0">
          <p className="text-cyan-800 text-4xl lg:text-[58px] leading-none mb-6">
            Write and share what you want
          </p>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae architecto qui adipisci in officiis, aperiam sequi atque
            perferendis eos,
          </p>
          <Link to={"/blogs"}>
            <button className="bg-cyan-700 flex items-center space-x-[5px] text-white px-3 py-2 rounded-[5px]">
              <p className="">See Blogs</p>
              <BiLinkExternal />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
