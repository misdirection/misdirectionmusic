import Link from "next/link";
import Login from "./login";
import Logout from "./logout"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

export default async function Nav() {
    const session = await getServerSession(authOptions)
    return(
        <nav className="flex justify-between items-center py-8">
            <Link href={"/"}>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Misdirection Music
                </h1>
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