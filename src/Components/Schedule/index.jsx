import React from "react";
import wazitologo from "../images/wazitologo.png";
import msealskit from "../images/msealskit.png";
import msealslogo from "../images/msealslogo.png";

const index = () => {
  return (
    <div className="bg-black text-white px-4 py-8">
      <h1>Match Schedule</h1>
      <div className="flex justify-between px-4">
        <div className=" text-center border-r  flex flex-col gap-2 border-white">
          <div className="flex gap-4 justify-center items-center ">
            <div className="flex  flex-col ">
              <img src={wazitologo} alt="wazitologo" />
              <h1>Wazito FC</h1>
            </div>
            <p>VS</p>
            <div className="flex flex-col">
              <img src={msealslogo} alt="msealslogo" />
              <h1>Muranga Seals</h1>
            </div>
          </div>
          <h1 className="text-center w-[70%] mx-auto">
            Murang'a stadium , Email muranga seals to book a ticket today
          </h1>
        </div>

        <div className=" text-center border-r  flex flex-col gap-2 border-white">
          <div className="flex gap-4 justify-center items-center ">
            <div className="flex  flex-col ">
              <img src={wazitologo} alt="wazitologo" />
              <h1>Wazito FC</h1>
            </div>
            <p>VS</p>
            <div className="flex flex-col">
              <img src={msealslogo} alt="msealslogo" />
              <h1>Muranga Seals</h1>
            </div>
          </div>
          <h1 className="text-center w-[70%] mx-auto">
            Murang'a stadium , Email muranga seals to book a ticket today
          </h1>

          <button className="bg-[#FAE115] text-black font-bold p-2 w-[40%] mx-auto">
            Buy Ticket
          </button>
        </div>

        <div className="flex justify-between p-4 ">
          <div className="flex flex-col gap-2">
            <p>AUTHENTIC HOME SHIRT</p>
            <p>Team jersey</p>
            <p>1500 KSh</p>
            <p>Short sleeve</p>
            <p>10% Discount off On membership</p>
            <p>Medium</p>
            <button className="bg-[#FAE115]  flex justify-center text-black font-bold p-2 w-[80%] mx-auto">
              Buy Now
            </button>
          </div>
          <img src={msealskit} alt="msealskit" />
        </div>
      </div>
    </div>
  );
};

export default index;
