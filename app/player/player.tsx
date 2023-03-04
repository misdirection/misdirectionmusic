import Playlist from "./playlist";
import PlayerNav from "./nav";
import prisma from '@/prisma/client'
import Track from "./track";

export default async function Player() {
  const album = await prisma?.album.findUniqueOrThrow({
    where: {
      id: "1",
    },
    include: {
      Track: true
    },
  })

  return (
    <div>
    <Playlist album={album}  />
    <PlayerNav />
    </div>
  );
}