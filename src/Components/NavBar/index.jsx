import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { React, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

import { BsChevronDown } from "react-icons/bs";

import SportpesaLogo from "../../assets/SP_logo-01.png";
import FinixCasinoLogo from "../../assets/finix-casino.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showServicesDetails, setShowServicesDetails] = useState(false);
  const [showStoreDetails, setShowStoreDetails] = useState(false);

  const handleServicesClick = () => {
    setShowServicesDetails(!showServicesDetails);
  };
  const handleStoreClick = () => {
    setShowStoreDetails(!showStoreDetails);
  };

  return (
    <>
      <div>
        {/* Header one with sponsors */}
        <div className="p-2 content-end bg-[#F6F6F6] border-b-4 border-[#f4e721]">
          <ul className={"flex justify-end gap-5 p-2 text-[#F6F6F6]"}>
            <li>
              <a target="_blank" rel="noreferrer" href="#">
                <BsInstagram className="text-xl text-[#050505] hover:text-[#f4e721]" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Mseal_FC"
              >
                <BsTwitter className="text-xl text-[#050505] hover:text-[#f4e721]" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/msealfc/"
              >
                <BsFacebook className="text-xl text-[#050505] hover:text-[#f4e721]" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@murangasealfc"
              >
                <BsYoutube className="text-xl text-[#050505] hover:text-[#f4e721]" />
              </a>
            </li>
            <li className="mr-10">
              <a target="_blank" rel="noreferrer" href="#">
                <BsTiktok className="text-xl text-[#050505] hover:text-[#f4e721]" />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ke.sportpesa.com/en/sports-betting/football-1/"
              >
                <img
                  src={SportpesaLogo}
                  alt="Sportpesa Logo"
                  className="w-[100px] text-[#F6F6F6]"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ke.sportpesa.com/en/sports-betting/football-1/"
              >
                <img
                  src={FinixCasinoLogo}
                  alt="Sportpesa Logo"
                  className="w-[100px] text-[#F6F6F6]"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* Header two with navigation */}
        <div
          style={{ backgroundColor: `#050505` }}
          className={
            shadow
              ? "w-full h-20 shadow-xl md:mt-0 z-[100] md:px-24"
              : "w-full h-20 z-[100] md:mt-0 md:px-24"
          }
        >
          <div className="flex justify-between md:justify-end items-center w-full md:mt-0 h-full  md:px-4 py-7 px-2 2xl:px-16 rounded">
            <div className="md:absolute md:top-0 bottom-0 left-2 xl:w-[180px] mt-5 md:mt-0 lg:w-[160px] md:w-[140px] sm:w-[120px] w-[120px]">
              <NavLink exact="true" to="/">
                <img src={logo} alt="Muranga seals logo" />
              </NavLink>
            </div>
            <div>
              <ul className="hidden items-center md:flex gap-5">
                <NavLink exact="true" to="/news">
                  <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                    NEWS
                  </li>
                </NavLink>

                <NavLink exact="true" to="/team">
                  <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                    TEAM
                  </li>
                </NavLink>

                <NavLink exact="true" to="/ticket">
                  <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                    TICKETS
                  </li>
                </NavLink>
                <NavLink exact="true" to="/membership">
                  <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                    MEMBERSHIP
                  </li>
                </NavLink>
                <NavLink exact="true" to="/ourclub">
                  <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                    OUR CLUB
                  </li>
                </NavLink>
                <NavLink exact="true" to="/ourclub">
                  <li className="hover:underline text-[#f4e721] underline-offset-8 hover:text-[#f4e721]">
                    LOGIN
                  </li>
                </NavLink>
                <div className="hidden md:flex">
                  <div className="flex items-center">
                    <HiShoppingCart
                      size={40}
                      className="text-[#f4e721]  mr-3 mt-2"
                    />
                    <AiOutlineSearch size={40} className="text-[#f4e721]" />
                  </div>
                </div>
              </ul>
              <div
                className="md:hidden flex justify-between items-center w-full h-full"
                onClick={handleNav}
              >
                <HiShoppingCart
                  size={40}
                  className="text-[#f4e721] text-center align-middle justify-center mr-3 "
                />
                <AiOutlineSearch className="text-[#f4e721]" />
                <RiMenu5Line size={40} className="text-[#f4e721]" />
              </div>
            </div>
          </div>

          <div
            className={
              nav
                ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-[#050505]"
                : ""
            }
          >
            <div
              className={
                nav
                  ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#000] text-white p-2 ease-in duration-500"
                  : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
              }
            >
              <div>
                <div className="flex justify-between items-center w-full mt-3 px-3">
                  <Link className="font-bold text-4xl uppercase animate-pulse">
                    Mechanic
                  </Link>
                  <div
                    onClick={handleNav}
                    className="cursor-pointer text-[#fae115]"
                  >
                    <AiOutlineClose size={35} />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col  py-4">
                  <ul>
                    <Link to="/" onClick={handleNav}>
                      <li className="ml-3 text-xl">Home</li>
                    </Link>
                    <li className="relative">
                      <div
                        className="flex items-center justify-between px-3 py-4 cursor-pointer"
                        onClick={handleServicesClick}
                      >
                        <div className="text-xl">Services</div>
                        <div>
                          <BsChevronDown size={25} className={``} />
                        </div>
                      </div>
                      {showServicesDetails && (
                        <ul className="left-full bg-[#000] py-2 rounded-lg shadow-lg">
                          <Link to="/services">
                            <li
                              className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200"
                              onClick={handleNav}
                            >
                              Services
                            </li>
                          </Link>
                          <Link to="/performance" onClick={handleNav}>
                            <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                              Service Details
                            </li>
                          </Link>
                        </ul>
                      )}
                    </li>
                    <Link to="/store" onClick={handleNav}>
                      <li className="ml-3 text-xl">Store</li>
                    </Link>
                    <Link to="/about" onClick={handleNav}>
                      <li className="py-4 text-xl ml-3 cursor-pointer">
                        About
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Header three with logo */}

        <div className="hidden md:absolute md:top-0 bottom-0 left-2 xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] w-[120px]">
          <NavLink exact="true" to="/">
            <img src={logo} alt="Muranga seals logo" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
