import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import SportpesaLogo from "../images/SP_logo-01.png";
import FinixCasinoLogo from "../images/finix-casino.png";
import logo from "../images/logo.png";
const Navigation = () => {
    return (
        <>
            <div>
                {/* Header one with sponsors */}
                <div className="p-2 content-end bg-[#F6F6F6] border-b-4 border-[#f4e721]" >
                    <ul className={"flex justify-end gap-5 p-2 text-[#F6F6F6]"}>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.ke.sportpesa.com/en/sports-betting/football-1/">
                                <img src={SportpesaLogo} alt="Sportpesa Logo" className="w-[100px] text-[#F6F6F6]" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.ke.sportpesa.com/en/sports-betting/football-1/">
                                <img src={FinixCasinoLogo} alt="Sportpesa Logo" className="w-[100px] text-[#F6F6F6]" />
                            </a>
                        </li>


                    </ul>
                </div>
                {/* Header two with navigation */}
                <div className="bg-[#050505] p-4">
                    <div>
                        <ul className="flex justify-end gap-5 text-[#f4e721] mt-2 p-2">
                            <li className="hover:underline  decoration-[#F6F6F6] underline-offset-8 ">NEWS</li>
                            <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">TEAM</li>
                            <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">TICKETS</li>
                            <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">MEMBERSHIP</li>
                            <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">OUR CLUB</li>
                            <li>
                                <BsInstagram className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                            </li>
                            <li>
                                <BsTwitter className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                            </li>
                            <li>
                                <BsFacebook className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
            <div>
            {/* Header three with logo */}
                <div className="absolute top-0 bottom-0 left-2 xl:w-[180px] lg:w-[180px] md:w-[160px] sm:w-[120px] w-[120px]">
                    <img src={logo}/>
                </div>


            </div>
        </>

    );
}

export default Navigation;