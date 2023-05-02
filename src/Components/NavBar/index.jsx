import {BsFacebook, BsInstagram, BsTiktok, BsTwitter, BsYoutube} from "react-icons/bs";
import SportpesaLogo from "../../assets/SP_logo-01.png";
import FinixCasinoLogo from "../../assets/finix-casino.png";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";
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
                        <ul className="flex justify-end gap-5 text-[#f6f6f6] mt-2 p-2">
                            <NavLink exact="true" to="/news">
                                <li className="hover:underline decoration-[#f4e721] underline-offset-8 hover:text-[#f4e721]">NEWS</li>
                            </NavLink>
                            <NavLink exact="true" to="/team">
                                <li className="hover:underline decoration-[#f4e721] underline-offset-8 hover:text-[#f4e721]">TEAM</li>
                            </NavLink>
                            <NavLink exact="true" to="/ticket">
                                <li className="hover:underline decoration-[#f4e721] underline-offset-8 hover:text-[#f4e721]">TICKETS</li>
                            </NavLink>
                            <NavLink exact="true" to="/membership">
                                <li className="hover:underline decoration-[#f4e721] underline-offset-8 hover:text-[#f4e721]">MEMBERSHIP</li>
                            </NavLink>
                            <NavLink exact="true" to="/ourclub">
                                <li className="hover:underline decoration-[#f4e721] underline-offset-8 hover:text-[#f4e721]">OUR CLUB</li>
                            </NavLink>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abolger/">
                                    <BsInstagram className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <BsTwitter className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <BsFacebook className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <BsYoutube className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <BsTiktok className="text-xl text-[#f6f6f6] hover:text-[#f4e721]" />
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
            <div>
            {/* Header three with logo */}

                <div className="absolute top-0 bottom-0 left-2 xl:w-[180px] lg:w-[180px] md:w-[160px] sm:w-[120px] w-[120px]">
                    <NavLink exact="true" to="/">
                        <img src={logo} alt="Muranga seals logo"/>
                    </NavLink>
                </div>
            </div>
        </>

    );
}

export default Navigation;