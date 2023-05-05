import Goalkeeper from "./Goalkeeper.jsx";
import Defender from "./Defender.jsx";
import Midfielders from "./Midfielders.jsx";
import Forwards from "./Forwards.jsx";
import Coaches from "./Coaches.jsx";
const Team = () => {


  return (
    <div>
      <div className="h-[158px] flex justify-start text-7xl font-bold p-4 items-center bg-[#FAE115]">
        Teams
      </div>
      {/* Goalkeeper */}
      <Goalkeeper />
      {/*Defenders */}
      <Defender />
      {/*Midfielders */}
      <Midfielders />
      {/*Forwards */}
      <Forwards />
      {/*Coach */}
      <Coaches />
    </div>
  );
};

export default Team;
