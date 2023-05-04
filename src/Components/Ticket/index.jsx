import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const Ticket = () => {
  return (
    <div>
      <h1 className="p-8 bg-[#FAE115] font-bold uppercase text-3xl">Tickets</h1>
      <div className="p-6">
        <h1 className="text-3xl font-normal mb-3">Ticket availability</h1>
        <button className="flex bg-[#FAE115] w-[317px] justify-between items-center">
          <p className="ml-4">All</p>
          <AiOutlineDown className="mr-4" size={35} />
        </button>
      </div>
    </div>
  );
};

export default Ticket;
