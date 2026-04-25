"use client";
import Link from "next/link";
import userAvater from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./Navlink";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const value = session?.user;
    console.log(value);

   

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
           { isPending? ("loading...") : value ? (
            <div className="flex items-center gap-2">
                <p>{session?.user?.name}</p>
                <Image src={userAvater} width={50} height={50} alt="user"></Image>
                
                    <button
                    onClick={async() => await authClient.signOut()}
                    className="btn bg-black text-white">Log out</button>
                
                

                
            </div>
             ) :(
                <div className="flex items-center gap-2">
                <p>{session?.user?.name}</p>
                <Image src={userAvater} width={50} height={50} alt="user"></Image>
                <Link href="/login">
                    <button className="btn bg-black text-white">Log in</button>
                </Link>
                

                
            </div> ) 
            
}
           
        </div>
    );
};

export default Navbar;
