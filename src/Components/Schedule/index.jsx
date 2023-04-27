import React from "react";
import wazitologo from "../images/wazitologo.png";
import msealskit from "../images/msealskit.png";
import msealslogo from "../images/msealslogo.png";

const index = () => {
  return (
    <div>
      <h1>Match Schedule</h1>
      <div className="flex justify-between">
        <div className="border-2 border-r text-center flex flex-col gap-2 border-white">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col ">
              <img src={wazitologo} alt="wazitologo" />
              <h1>Wazito FC</h1>
            </div>
            <p>VS</p>
            <div className="flex flex-col">
              <img src={msealslogo} alt="msealslogo" />
              <h1>Muranga Seals</h1>
            </div>
          </div>
        </div>
        <div className="border-2 border-r text-center flex flex-col gap-2 border-white">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col ">
              <img src={wazitologo} alt="wazitologo" />
              <h1>Wazito FC</h1>
            </div>
            <p>VS</p>
            <div className="flex flex-col">
              <img src={msealslogo} alt="msealslogo" />
              <h1>Muranga Seals</h1>
            </div>
          </div>
        </div>

        <div className=" border-r-black text-center flex flex-col gap-2">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col ">
              <img src={wazitologo} alt="wazitologo" />
              <h1>Wazito FC</h1>
            </div>
            <p>VS</p>
            <div className="flex flex-col">
              <img src={msealslogo} alt="msealslogo" />
              <h1>Muranga Seals</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
