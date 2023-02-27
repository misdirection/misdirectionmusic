"use client"
import { useState } from "react";
import { Howl } from "howler";
import Playlist from "./playlist";
import PlayerNav from "./nav";

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


export default function Player() {
  const [selectedTrack, setSelectedTrack] = useState<Howl | null>(new Howl({src:"music/stuff.mp3"}));
  const [playing, setPlaying] = useState(false);

  return (
    <div>
    <PlayerNav 
    selectedTrack={selectedTrack} 
    playing={playing} 
    setPlaying={setPlaying} />
    </div>
  );
}