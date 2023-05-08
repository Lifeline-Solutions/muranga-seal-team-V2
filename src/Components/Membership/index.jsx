const index = () => {
  return (
    <div>
      <div className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">
        Membership
      </div>
      <div className="w-[1280px] flex flex-col gap-4 my-24 mx-auto">
        <h1 className="text-4xl font-bold">
          JOIN OUR MEMBERSHIP TODAY AND ENJOY OUR PREMIUM SERVICES
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi
        </p>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Title"
            className="h-[50px] w-[45%] p-2 border-b-2 border-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Names"
            className="h-[50px] flex items-center p-2 w-[45%] border-b-2 border-black focus:outline-none"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="County/Region *"
            className="h-[50px] w-[45%] p-2 border-b-2 border-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Date of Birth *"
            className="h-[50px] flex items-center p-2 w-[45%] border-b-2 border-black focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Email *"
          className="h-[50px] w-[100%] p-2 border-b-2 border-black focus:outline-none"
        />
        <div className="flex justify-between">
          <div>
            <p className="w-[60%]">Murang&lsquo;a seals may contact me by:</p>
            <input
              type="text"
              placeholder="Phone No"
              className="h-[50px] w-[100%] p-2 border-b-2 border-black focus:outline-none"
            />
          </div>
          <div className="w-[855px] text-xl">
            Please let us know using the dropdown if you would like to be
            contacted by Murang&lsquo;a seals and its group companies with news and
            promotional information about Murang&lsquo;a seals its official sponsors
            and partners and their products and services, where we have the
            relevant contact details. Please read our Privacy Policy to learn
            more about us and its group companies, how we use your information
            and how to change your mind about receiving marketing from us.
          </div>
        </div>
        <button className="w-[300px] mt-16  mx-auto p-4 bg-[#F4E721] text-3xl text-black">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default index;
