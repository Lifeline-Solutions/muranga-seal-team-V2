import banner from "../../assets/logo.png";
import wazito from "../../assets/wazitologo.png";

const SingleTicket = () => {
  return (
    <div className="bg-[#FCFEE9] flex justify-between p-10 m-2">
      <div className="flex align-center">
        <img src={banner} alt="logo" height={150} width={150} />
        <img src={wazito} alt="logo" height={150} width={150} />
      </div>
      <div className="flex flex-col justify-between">
        <h1>Murang&apos;a seals</h1>
        <div className="flex flex-col">
          <div className="flex align-center text-center">
            <p>Sun 29 April</p>
            {/* vertical line */}
            <div className="border-l-2 border-[#000] h-5"></div>
            <p>2:00pm</p>
            <div className="border-l-2 border-[#000] h-5"></div>
            <p>Murang&apos;a stadium</p>
          </div>

          <div>
            <p className="text-[#A8A2A2]">Division 2</p>
          </div>
        </div>
      </div>
      <div className="flex align-center items-center">
        <p className="text-[#FE0B0B] uppercase">Sold out</p>
      </div>
      <div className="flex flex-col justify-between">
        <button
          style={{
            background: "rgba(244, 238, 238, 0.72)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="p-4"
        >
          General Membership
        </button>
        <button
          className="bg-[#FAE115] p-4"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default SingleTicket;
