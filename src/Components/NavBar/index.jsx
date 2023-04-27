import MenuBar from "../MenuBar";

const Navigation = () => {
    return (
        <div className="bg-[#050505] p-4">
            <MenuBar />
            <div className="border-t border-[#f4e721]">
                <ul className="flex justify-end gap-5 text-[#f4e721] mt-2 p-2">
                    <li className="hover:underline  decoration-[#F6F6F6] underline-offset-8 ">News</li>
                    <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">Team</li>
                    <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">Tickets</li>
                    <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">Membership</li>
                    <li className="hover:underline decoration-[#F6F6F6] underline-offset-8">Our Club</li>
                    <li>
                        <img className="w-20" src="https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Turner_Profile_1100x693_0.jpg?itok=ObjBEDpt"/>
                    </li>
                </ul>

            </div>

        </div>
    );
}

export default Navigation;