
import logo from "@/assets/logo.png"
import Image from "next/image";
import { format } from "date-fns";
const Header = () => {
    return (
        <div className="text-center space-y-2 mt-4">
            <Image src={logo} width={300} height={300} alt="logo" className="mx-auto"></Image>
            <h2>Journalism Without Fear or Favour</h2>
            <p>{format(new Date(), "EEEE, MMM, dd, yyyy")}</p>
        </div>
    );
};

export default Header;