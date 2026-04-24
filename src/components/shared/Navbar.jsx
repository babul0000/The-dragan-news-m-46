import Link from "next/link";
import userAvater from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./Navlink";



const Navbar = () => {
    return (
        <div className="flex justify-between items-center container mx-auto mt-7">
            <div></div>
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
                <li>
                    <NavLink href="/career">Career</NavLink>
                </li>
            </ul>
            <div className="flex items-center gap-2">
                <Image src={userAvater} width={50} height={50} alt="user"></Image>
                <Link href="/login"><button className="btn bg-black text-white">Log in</button></Link>
            </div>
        </div>
    );
};

export default Navbar;