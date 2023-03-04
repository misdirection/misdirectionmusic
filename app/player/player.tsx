import Playlist from "./playlist";
import PlayerNav from "./nav";
import prisma from '@/prisma/client'
// import { useEffect ,useState, use} from "react";
// import {Album, Track as TrackModel} from "@prisma/client"

export default async function Player() {

  //server-side
  const album = await prisma?.album.findUnique({
    where: {
      id: "1",
    },
    include: {
      Track: true
    },
  })

//////////////////client-side useEffect()
// const [album, setAlbum] = useState<Album & { Track: TrackModel[]}>()
//   useEffect( () => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:3000/api/album?id=1")
//       .then(res => res.json())
//       .then(res => res as Album & { Track: TrackModel[]})
//       setAlbum(res);
//     }
//   fetchData()
//   },[]);
////////////////////////////////////////

///////////////client-side use()
// async function getAlbum() {
//   return await fetch("http://localhost:3000/api/album?id=1")
//  .then(res => res.json())
//  .then(res => res as Album & { Track: TrackModel[]})
//
// }
//   const album : Album & { Track: TrackModel[]}  = use( getAlbum());
//////////////////////////////


  return (
    <div>
      {album ?
      <div>
        <Playlist album={album}  />
        <PlayerNav /> 
        </div>
        : "" } 
    </div>
  );
}


