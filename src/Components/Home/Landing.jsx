import banner from "../../assets/banner.png";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import featured1 from "../../assets/featured1.png";
const Landing = () => {
  const news = [
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news1,
    },
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news2,
    },
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news3,
    },
    {
      id: 1,
      title: "WAZITO FC  1-0 MURANGA SEAL ",
      description: "Penalty for Wazito fc on the ground  ",
      date: " 20th/ April/ 2023 ",
      image: news4,
    },
  ];

  const featuredNews = [
    {
      id: 1,
      title: "DONT MISS THIS GAME FOR ALL STARS VS SEALS",
      image: featured1,
    },
    {
      id: 2,
      title: "DONT MISS THIS GAME FOR ALL STARS VS SEALS",
      image: featured1,
    },
  ];
  return (
    <div
      className="bg-center flex justify-end bg-no-repeat bg-cover mt-4"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white  flex  ">
        <div className="flex flex-col  justify-between ">
          {news.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-2  group hover:bg-[#FAE115] hover:scale-110 transition-all duration-500 cursor-pointer"
            >
              <div className="flex-col ">
                <p className="bg-[#FAE115] p-2 flex group-hover:bg-black group-hover:text-white justify-center w-[50%] rounded-lg font-semibold">
                  Latest News
                </p>
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-sm">{item.description}</p>

                <p className="text-[#A8A2A2]">{item.date}</p>
              </div>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-end gap-4  justify-between">
          {featuredNews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[303px]   text-white bg-black"
            >
              <img src={item.image} alt="" className="w-[300px]" />
              <p className=" text-xs p-2">Featured</p>
              <p className="text-xl p-4 font-bold w-[90%]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
