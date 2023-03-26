import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";
import './globals.css'
import Player from '@/app/components/player/player'
import Nav from '@/app/components/auth/nav'

export const metadata = {
  title: 'Misdirection Music',
  description: 'Music Streaming Service',
}


export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className="flex flex-col h-screen overflow-hidden">
        <div className="border-b border-gray-300 bg-gray-200" >
        <Nav />
        </div>
        <div className="flex-1 overflow-y-scroll overflow-hidden">
          {children}
        </div>
        <Player />
        {/* {session? <Player />  : ""} */}
      </body>
    </html>
  )
}
