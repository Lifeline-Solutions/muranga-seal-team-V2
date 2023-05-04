import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#000]  p-8  text-white">
    

      <div className="mx-auto py-8 w-[80%] flex justify-between">
        <h1>Murangaseals@gmail.com</h1>
        <h1>+2547 000 000 000</h1>
        <div className="flex gap-4 justify-between">
          <AiFillInstagram size={40} />
          <BsTwitter size={35} />
          <ImFacebook size={35} />
        </div>
        <AiOutlineSearch size={35} />
      </div>

      <div className="w-[80%] my-8 mx-auto flex justify-between">
        <div className="flex flex-col gap-2">
          <h5 className="text-[#fae115]">News</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#fae115]">Tickets</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#fae115]">Teams</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#fae115]">Memberships</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#fae115]">Club & History</h5>
          <ul>
            <li>Home Jersey</li>
            <li>Season Jersey</li>
            <li>News trophy</li>
            <li>room</li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] mx-auto  flex  flex-col gap-2">
        <h1 className="text-3xl  font-bold pt-4">Newsletter</h1>
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="h-[50px] w-[455px] p-2 bg-[#A8A2A2] focus:outline-none placeholder-[#D9D9D9]"
          />
          <p className="text-3xl font-bold text-[#F4E721] p-2 cursor-pointer">
            Subscribe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
