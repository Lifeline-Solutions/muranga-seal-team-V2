import { useState } from "react";
import banner from "../../assets/banner.png";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import featured1 from "../../assets/featured1.png";

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const images = [news1, news2, news3, news4];
  const changeImage = () => {
    setTimeout(() => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    }, 500);
  };
  const news = [
    {
      id: 1,
      title: "AQUINAS FC  1-0 MURANGA SEAL ",
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
      <div className="flex flex-col md:flex-row gap-5 mt-20  m-4 md:m-[28px]">
        <div className="w-full">
          <a href="#"
             className=" flex flex-col items-center bg-white border border-[#FAE115] rounded-lg shadow md:flex-row ">
            <img className="object-cover w-full rounded-t-lg lg:w-[70%] md:h-[400px] md:w-[600px] sm:w-[200px] md:rounded-none md:rounded-l-lg hover:bg-[#FAE115]"
                 src={banner} alt="Muranga seals" />
            <div className="flex flex-col justify-between leading-normal p-5">
              <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A Win For Seals</h5>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Murang&rsquo;a Seals defeated Shaban FC 2-0</p>
              <p className="bg-[#FAE115] sm:p-2 flex group-hover:bg-black group-hover:text-white justify-center  rounded-lg font-semibold">
                Read More
              </p>
            </div>

          </a>


          <div className="flex flex-row  justify-between md:mr-[20px]">
            {news.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col-reverse justify-between mt-5 p-2  group hover:bg-[#FAE115]  hover:scale-105 transition-all duration-500 cursor-pointer"
                    onMouseEnter={changeImage}
                >
                  <div className="flex-col">
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                    <p className="bg-[#FAE115] sm:p-2 flex group-hover:bg-black group-hover:text-white justify-center  rounded-lg font-semibold">
                      Latest News
                    </p>
                  </div>
                  <img className="" src={item.image} alt="" />
                </div>
            ))}
          </div>
        </div>


        <div className="bg-white  flex flex-col md:flex-row border-t-indigo-500">
          <div className="flex flex-col md:items-end gap-5 hidden sm:flex ">
            {featuredNews.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col md:w-[303px] text-white bg-black"
                >
                  <img src={item.image} alt="" className="md:w-[300px]" />
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
