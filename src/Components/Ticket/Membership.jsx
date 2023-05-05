import banner from "../../assets/clubhistory1.png";

const Membership = () => {
  return (
    <div className="flex">
      <div className="w-[50%] flex flex-col items-center text-center gap-5 justify-center p-5">
        <h1 className="font-bold text-5xl">Muranga seals membership</h1>
        <p className="text-4xl font-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi
        </p>
        <button className="uppercase p-4 bg-[#FAE115] w-[20%]">Join now</button>
      </div>
      <div className="w-[50%]">
        <img src={banner} alt="logo" className="w-[100vw]" height={300} />
      </div>
    </div>
  );
};

export default Membership;
