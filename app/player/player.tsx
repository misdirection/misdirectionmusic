import Playlist from "./playlist";
import PlayerNav from "./nav";

export interface UsersListProps {
  tracks: TrackData[];
 }

export type TrackData = {
    id: number,
    src: string,
    title: string,
    artist: string,
    album: string,
    imgSrc: string,
    duration: string,
  }

  const tracks : TrackData[] = [
    {
      id: 1,
      src: "music/stuff.mp3",
      title: "Etude No.1",
      artist: "Misdirection",
      album: "Misdirection's Album",
      imgSrc: "https://unsplash.it/40/40",
      duration: "3:03",
    },
    {
      id: 2,
      src: "music/stuff2.mp3",
      title: "Etude No.2",
      artist: "Misdirection",
      album: "Misdirection's Album",
      imgSrc: "https://unsplash.it/40/40",
      duration: "3:52",
    },
    {
      id: 3,
      src: "music/stuff3.mp3",
      title: "Etude No.3",
      artist: "Misdirection",
      album: "Misdirection's Album",
      imgSrc: "https://unsplash.it/40/40",
      duration: "2:31",
    },
  ];

  async function getData() {
    const res = await fetch('http://localhost:3000/api/tracks');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
export default async function Player() {
  const tracktest: TrackData[] = await getData();
  console.log(tracktest)
  return (
    <div>
    <Playlist tracks={tracktest} />
    <PlayerNav />
    </div>
  );
}