import Link from "next/link";
import Login from "./login";
import Logout from "./logout"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";
import Logo from "../icons/Logo";

export default async function Nav() {
    const session = await getServerSession(authOptions)
    return(
        <nav className="flex justify-between items-center py-2 px-10 ">
            <Link href={"/"}>
                <div className="flex">
                  <Logo />
                  <h1 className="text-3xl font-bold text-gray-900 md:text-5xl lg:text-2xl ml-2">
                      Misdirection Music
                  </h1>
                </div>
            </Link>
            {session ? 
            <ul className="flex items-center gap-6"> 
                <Logout /> 
            </ul> 
            : 
            <ul className="flex items-center gap-6"> 
                <Login /> 
            </ul> }
        </nav>
    )
}