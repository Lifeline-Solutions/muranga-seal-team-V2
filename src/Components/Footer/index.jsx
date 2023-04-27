import React from "react";
import Link from "react-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";

const index = () => {
  return (
    <div className="bg-[#000] md:pr-72 pl-28 pt-12 pb-2 text-white">
      <div className="grid grid-cols-4 gap-4">
        <div className="text-xl">murangaseals@gmail.com</div>
        <div className="text-xl">0722 222 222</div>
        <div className="flex space-between">
          <AiFillInstagram size={25} className="mr-10" />
          <BsTwitter size={25} className="mr-8" />
          <ImFacebook size={25} />
        </div>
        <div>
          <AiOutlineSearch />
        </div>
      </div>
      <div className="flex space-between pt-6">
        <div className="mr-20">
          <h5 className="text-[#fae115]">News</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
        <div className="mr-14">
          <h5 className="text-[#fae115]">Teams</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
        <div className="mr-20">
          <h5 className="text-[#fae115]">Tickets</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>

        <div className="mr-24">
          <h5 className="text-[#fae115]">Memberships</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#fae115]">Club & History</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold pt-4">Newsletter</h1>
        <button className="bg-[#fae115] text-[#000] text-start p-2 w-[15%] text-2xl font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default index;
