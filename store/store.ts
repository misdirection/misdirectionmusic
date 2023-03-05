import { Howl } from 'howler'
import { create } from 'zustand'

type State = {
  currentTrack: Howl | null,
  playing: boolean,
  repeating: boolean,
}

type Actions = {
  setPlaying: (playing: boolean)=>void
  playNewTrack: (src: string)=>void
  loopTrack: (looping: boolean) => void
  togglePlay: ()=>void
}

export const usePlayerStore = create<State & Actions>()((set, get) => ({
    playing: false,
    repeating: false,
    currentTrack: null,
    setPlaying: (playing) => set((state) => ({ playing: playing })),
    playNewTrack: (src) => set((state) => ({currentTrack: playNewTrack(state.currentTrack,src,state.setPlaying)})),
    loopTrack: (looping) => set((state) => ({repeating: loopTrack(state.currentTrack,looping)})),
    togglePlay: () => set((state) => ({playing: togglePlay(state.currentTrack, state.playing)})),
}))

const togglePlay = (currentTrack: Howl | null, playing: boolean ): boolean => {
  if (!currentTrack) return false

  if (playing) {
    currentTrack.pause();
  } else {
    currentTrack.play();
  }

  return !playing
}

const playNewTrack = (currentTrack: Howl | null, src: string, setPlaying: (playing:boolean) => void) : Howl => {
  currentTrack?.unload()
  const newTrack = new Howl({
    src: src,
    html5: true,
    preload: 'metadata',
    loop: currentTrack?.loop(),
  })
  newTrack.play()
  setPlaying(true);
  return newTrack
}

const loopTrack = (currentTrack: Howl | null, looping:boolean) => {
  if (!currentTrack) return
  currentTrack.loop(looping)
  return looping
}