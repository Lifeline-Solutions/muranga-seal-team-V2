import SportpesaLogo from "../images/SP_logo-01.png";
import FinixCasinoLogo from "../images/finix-casino.png";
const MenuBar = () => {
    return (
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
    );
}

export default MenuBar;