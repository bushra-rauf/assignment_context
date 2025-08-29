import { useUser } from "@/contexts/userContext";
import Image from "next/image";

const Header = () => {
    const {user, updateName} = useUser();
    return (
        <div className="bg-[#ffedc2]  flex items-center relative border-1 justify-between">
            <Image src="/kitchenLogo.webp" width={100} height={100} alt='kitchenLogo' className="rounded-b-xl" />
            <h1 className="text-teal-800 text-7xl text-center p-5 font-(family-name:--font-style-script) absolute top:0 right-[50%] translate-x-[50%]">The Tasteless Kitchen</h1>
            <div>
                <span className="mr-5 underline">Logged in as: {user.name}</span>
                <button onClick={() => updateName('')} className="bg-teal-800 px-6 py-3 text-white mr-5 rounded-sm cursor-pointer hover:bg-teal-700 ">Logout</button>
            </div>
        </div>
    )
}

export default Header;