import Nav from '@/app/auth/nav'
import './globals.css'
import Player from './player/player'

export const metadata = {
  title: 'Misdirection Music',
  description: 'Music Streaming Service',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen overflow-hidden">
        <div className="border-b border-gray-300" >
        <Nav />
        </div>
        <div className="flex-1 overflow-y-scroll">
          {children}
        </div>
        <Player />
      </body>
    </html>
  )
}
