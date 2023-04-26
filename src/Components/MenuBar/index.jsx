
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const MenuBar = () => {
    return (
        <div className="p-2 content-end " >
            <ul className={"flex justify-end gap-5 p-2 text-[#F6F6F6]"}>
                <li>
                    <BsInstagram className="text-xl hover:text-[#f4e721]" />
                </li>
                <li>
                    <BsTwitter className="text-xl hover:text-[#f4e721]" />
                </li>
                <li>
                    <BsFacebook className="text-xl hover:text-[#f4e721]" />
                </li>


            </ul>
        </div>
    );
}

export default MenuBar;