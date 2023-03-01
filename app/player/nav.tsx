'use client'
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { TbRepeatOff, TbRepeatOnce, TbRepeat } from "react-icons/tb"
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import { Howl, Howler } from "howler";

type HeaderProps = {
    selectedTrack : Howl | null, 
    playing : boolean,
    setPlaying : Dispatch<SetStateAction<boolean>>,
}


export default function PlayerNav({selectedTrack, playing, setPlaying } : HeaderProps) {
    const [repeating, setRepeating] = useState(false);
    const handleVolumeChange : ChangeEventHandler<HTMLInputElement> = (e) => {
        Howler.volume(parseInt(e.target.value, 10) / 100)
      };

      const togglePlay = () => {
        if (!selectedTrack) return
    
        if (playing) {
            selectedTrack.pause();
            setPlaying(false)
        } else {
            selectedTrack.play();
            setPlaying(true)
        }
      };
    
      const toggleRepeat = () => {
        if (!selectedTrack) return
        setRepeating(!repeating)
        selectedTrack.loop(!repeating)
      };


    return (
          <div className="flex items-center">
            <input
              type="range"
              max="100"
              defaultValue="100"
              onChange={handleVolumeChange}
              className="cursor-pointer"
            />
            {/* <button
              className="text-textLight bg-brand p-2 rounded-full ml-4"
              onClick={togglePlay} >
              {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
            </button>
            <button
              className="text-textLight bg-brand p-2 rounded-full ml-4"
              onClick={togglePlay} >
              {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
            </button> */}
            <button disabled={selectedTrack === null}
              className="text-textLight bg-brand p-2 rounded-full ml-4 disabled:bg-slate-50 disabled:text-slate-500"
              onClick={togglePlay} >
              {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
            </button>
            <button onClick={toggleRepeat} className='p-2 rounded-full ml-4 bg-black text-textLight' >
              {repeating ? <TbRepeat size="24px" /> : <TbRepeatOff size="24px" />}
            </button>
          </div>
          )
}