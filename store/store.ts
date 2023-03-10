import { Howl } from 'howler'
import { create } from 'zustand'
import { Track } from '@prisma/client'

export enum Repeat{
  None,
  One,
  All
}

const tracks : Track[] = [
{
  id: "1",
  src: "music/stuff.mp3",
  title: "Etude No.1",
  artist: "Misdirection",
  duration: "1234",
  albumId: "1",
  imgSrc: ""
},
{
  id: "2",
  src: "music/stuff2.mp3",
  title: "Etude No.2",
  artist: "Misdirection",
  duration: "2345",
  albumId: "3",
  imgSrc: ""
},
{
  id: "3",
  src: "music/stuff3.mp3",
  title: "Etude No.3",
  artist: "Misdirection",
  duration: "3456",
  albumId: "3",
  imgSrc: ""
}]


type State = {
  playNextList: Track[],
  currentTrackIndex: number,
  isPlaying: boolean,
  repeating: Repeat
}

type Actions = {
  setIsPlaying: (playing: boolean)=>void
  togglePlayPause: ()=>void
  toggleRepeating: ()=>void
  setCurrentTrackIndex: (index: number)=>void
}

export const usePlayerStore = create<State & Actions>()((set, get) => ({
    playNextList: tracks,
    currentTrackIndex: 0,
    isPlaying: false,
    repeating: Repeat.None,
    setIsPlaying: (isPlaying) => set((state) => ({ isPlaying: isPlaying })),
    togglePlayPause: () => set((state) => ({isPlaying: !state.isPlaying})),
    toggleRepeating: () => set((state) => ({repeating: toggleRepeating(state.repeating)})),
    setCurrentTrackIndex: (newIndex: number)=> set({currentTrackIndex: newIndex})
}))

const toggleRepeating = (repeating: Repeat ): Repeat => {
  switch(repeating) {
    case Repeat.None:
      return Repeat.One
    case Repeat.One:
      return Repeat.All
    default:
      return Repeat.None
  }
}

const createNewTrack = (currentTrack: Howl | null, src: string, setPlaying: (playing:boolean) => void) : Howl => {
  currentTrack?.unload()
  const newTrack = new Howl({
    src: src,
    html5: true,
    preload: 'metadata',
    loop: currentTrack?.loop(),
  })
  setPlaying(true);
  return newTrack
}