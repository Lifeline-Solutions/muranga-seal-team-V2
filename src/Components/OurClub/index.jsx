import clubhistory1 from "../../assets/clubhistory1.png";
import clubhistory2 from "../../assets/clubhistory2.png";
import clubhistory3 from "../../assets/clubhistory3.png";
import clubhistory4 from "../../assets/clubhistory4.png";
import clubhistory5 from "../../assets/clubhistory5.png";

const index = () => {
  const clubhistorycontent = [
    {
      id: 1,
      image: clubhistory1,
      title: "Our team members",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
    {
      id: 2,
      image: clubhistory2,
      title: "Our management",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
    {
      id: 3,
      image: clubhistory3,
      title: "OUR SPONSORS  &  PARTNERS ",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
    {
      id: 4,
      image: clubhistory4,
      title: "Our Academy",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
    {
      id: 5,
      image: clubhistory5,
      title: "OUR  CLUB PRODUCTS  ",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
  ];

  return (
    <div>
      <div className="h-[158px] flex justify-start text-5xl font-bold p-4 items-center bg-[#FAE115]">
        CLUB & HISTORY
      </div>

      {/* Club History */}

      <div className="flex flex-col gap-4">
        {clubhistorycontent.map((clubhistory) => (
          <div key={clubhistory.id} className={clubhistory.id % 2 ==! 0 ? "flex justify-between items-center border-t-2  border-[#FAE115] my-4 bg-gray-100 mx-auto w-[95%] p-4" : "flex justify-between flex-row-reverse items-center border-t-2  border-[#FAE115] my-4 bg-gray-100 mx-auto w-[95%] p-4"}>
            <div className="flex flex-col  ">
              <h1 className="text-5xl font-bold mb-8">{clubhistory.title}</h1>
              <p className="w-[928px] h-[256px] text-xl">
                {clubhistory.content}
              </p>

              <button className="w-[303px] h-[81px] bg-[#F4E721] p-4 text-3xl ">
                Read More
              </button>
            </div>

            <div>
              <img src={clubhistory.image} alt="logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
