import goalkeeper1 from "../../assets/goalkeeper1.png";
import goalkeeper2 from "../../assets/goalkeeper2.png";
import defender1 from "../../assets/defender1.png";
import defender2 from "../../assets/defender2.png";

import defender3 from "../../assets/defender3.png";
import midfielder1 from "../../assets/midfielder1.png";
import midfielder2 from "../../assets/midfielder2.png";
import forward1 from "../../assets/forward1.png";
import forward2 from "../../assets/forward2.png";
import coach1 from "../../assets/coach1.png";
import coach2 from "../../assets/coach2.png";
const Team = () => {
  const goalkeepers = [
    {
      name1: "Cetric",
      name2: "Anyango",
      image: goalkeeper1,
      number: "01",
      id:1,
    },
    {
      name1: "Kevin",
      name2: "Magona",
      image: goalkeeper2,
      number: "01",
      id:2,
    },
  ];
  const defenders = [
    {
      name1: "Samuel",
      name2: "Semo",
      image: defender1,
      number: "06",
      id:3,
    },
    {
      name1: "Henry",
      name2: "Omollo",
      image: defender2,
      id:4,
      number: "03",
    },
    {
      name1: "Victory",
      name2: "Onyango",
      image: defender3,
      id:5,
      number: "22",
    },
  ];
  const midfielders = [
    {
      name1: "Francis",
      name2: "Ocholla",
      image: midfielder1,
      id:6,
      number: "06",
    },
    {
      name1: "Victory",
      name2: "Onyango",
      image: midfielder2,
      number: "22",
      id:7,
    },
  ];

  const forwards = [
    {
      name1: "Christian ",
      name2: "Mutiso",
      image: forward1,
      number: "06",
      id:8,
    },
    {
      name1: "Tom",
      name2: "Kangeta",

      image: forward2,
      number: "06",
      id:9,
    },
  ];

  const coaches = [
    {
      image: coach1,
      id:10,
    },
    {
      image: coach2,
      id:11,
    },
  ];

  return (
    <div>
      <div className="h-[158px] flex justify-start text-7xl font-bold p-4 items-center bg-[#FAE115]">
        Teams
      </div>

      {/* Goalkeepers */}
      <div className="my-4">
        <h1 className="text-4xl p-4 font-bold">Goalkeepers</h1>
        <div className="flex p-2 gap-8">
          {goalkeepers.map((goalkeeper) => (
            <div key={goalkeeper.id} className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500">
              <img src={goalkeeper.image} alt="player" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="">{goalkeeper.name1}</h1>
                  <h1 className="font-semibold text-2xl">{goalkeeper.name2}</h1>
                </div>
                <h1 className="text-gray-400 text-5xl">{goalkeeper.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Defenders */}
      <div className="my-4">
        <h1 className="text-4xl p-4 font-bold">Defenders</h1>
        <div className="flex p-2 gap-8">
          {defenders.map((defender) => (
            <div key={defender.id} className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500">
              <img src={defender.image} alt="player" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="">{defender.name1}</h1>
                  <h1 className="font-semibold text-2xl">{defender.name2}</h1>
                </div>
                <h1 className="text-gray-400 text-5xl">{defender.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Midfielders */}
      <div className="my-4">
        <h1 className="text-4xl p-4 font-bold">Midfielders</h1>
        <div className="flex p-2 gap-8">
          {midfielders.map((midfielder) => (
            <div key={midfielder.id} className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500">
              <img src={midfielder.image} alt="player" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="">{midfielder.name1}</h1>
                  <h1 className="font-semibold text-2xl">{midfielder.name2}</h1>
                </div>
                <h1 className="text-gray-400 text-5xl">{midfielder.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Forwards */}
      <div className="my-4">
        <h1 className="text-4xl p-4 font-bold">Forwards</h1>
        <div className="flex p-2 gap-8">
          {forwards.map((forward) => (
            <div key={forward.id} className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500">
              <img src={forward.image} alt="player" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="">{forward.name1}</h1>
                  <h1 className="font-semibold text-2xl">{forward.name2}</h1>
                </div>
                <h1 className="text-gray-400 text-5xl">{forward.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Coach */}
      <div className="my-4">
        <h1 className="text-4xl p-4 font-bold">Coaches</h1>
        <div className="flex p-2 gap-8">
          {coaches.map((coach) => (
            <div key={coach.id} className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 transition ease-in-out duration-500">
              <img src={coach.image} alt="player" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
