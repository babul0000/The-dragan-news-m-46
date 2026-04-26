"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
        
    }
    const handleGithub = async () => {
        const data = await authClient.signIn.social({
        provider: "github"
    })

        console.log(data);
        
    }



    return (
        <div className="space-y-6">

            {/* Login */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-3">Login With</h3>

                <button onClick={handleGoogle} className="w-full text-blue-500 border rounded-md py-2 flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
                    <FaGoogle /> Login with Google
                </button>

                <button onClick={handleGithub} className="w-full  border rounded-md py-2 flex items-center justify-center gap-2 text-sm mt-2 hover:bg-gray-100 transition">
                    <FaGithub /> Login with Github
                </button>
            </div>

            {/* Social */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-3">Find Us On</h3>

                <div className="border rounded-md overflow-hidden">
                    <p className="p-3 border-b hover:bg-gray-50 cursor-pointer">👍 Facebook</p>
                    <p className="p-3 border-b hover:bg-gray-50 cursor-pointer">🐦 Twitter</p>
                    <p className="p-3 hover:bg-gray-50 cursor-pointer">📸 Instagram</p>
                </div>
            </div>



        </div>
    );
};

export default RightSidebar;