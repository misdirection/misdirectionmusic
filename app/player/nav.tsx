'use client'
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { TbRepeatOff, TbRepeatOnce, TbRepeat } from "react-icons/tb"
import { ChangeEventHandler } from "react";
import { Howler } from "howler";
import { usePlayerStore } from "../store/store"

export default function PlayerNav() {
  const currentTrack = usePlayerStore((state) => state.currentTrack)
  const {playing, togglePlay} = usePlayerStore()
  const {repeating, loopTrack} = usePlayerStore()
  
  const handleVolumeChange : ChangeEventHandler<HTMLInputElement> = (e) => {
    Howler.volume(parseInt(e.target.value, 10) / 100)}

    return (
          <div className="flex items-center">
            <input
              type="range"
              max="100"
              defaultValue="100"
              onChange={handleVolumeChange}
              className="cursor-pointer"
            />
            <button disabled={currentTrack === null}
              className="text-textLight bg-brand p-2 rounded-full ml-4 disabled:bg-slate-50 disabled:text-slate-500"
              onClick={() => {togglePlay()}}>
              {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
            </button>
            <button onClick={()=>loopTrack(!repeating)} className='p-2 rounded-full ml-4 bg-black text-textLight' >
              {repeating ? <TbRepeat size="24px" /> : <TbRepeatOff size="24px" />}
            </button>
          </div>
          )
}