'use client'
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { TbRepeatOff, TbRepeatOnce, TbRepeat } from "react-icons/tb"
import { ChangeEventHandler, useEffect, useRef } from "react";
import { Howler, Howl } from "howler";
import { Repeat, usePlayerStore } from "@/store/store"

export default function PlayerNav() {
  const { isPlaying,setIsPlaying, togglePlayPause, playNextList} = usePlayerStore();
  const { currentTrackIndex, setCurrentTrackIndex }  = usePlayerStore();
  const { repeating, toggleRepeating }  = usePlayerStore();
  const soundRef = useRef<Howl | null>(null);
  useEffect(() => {
    soundRef.current = new Howl({
      src: playNextList[currentTrackIndex].src,
      html5: true,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      // onload: () => {
      //   setDuration(sound?.duration() ?? 0);
      // },
      onend: () => {
        setIsPlaying(false);
        handleNextTrack();
      },
    });
    
    if (isPlaying) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [currentTrackIndex,isPlaying]);

  const handleNextTrack = () => {
    if(repeating === Repeat.One && soundRef.current){
      soundRef.current.play();
    } else if (currentTrackIndex === playNextList.length - 1) {
      if(repeating === Repeat.All)
        setCurrentTrackIndex(0);
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };
  
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
            <button disabled={soundRef.current === null }
              className="text-textLight bg-brand p-2 rounded-full ml-4 disabled:bg-slate-50 disabled:text-slate-500"
              onClick={togglePlayPause}>
              {isPlaying ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
            </button>
            <button onClick={toggleRepeating} className='p-2 rounded-full ml-4 bg-black text-textLight' >
              {repeating === Repeat.None ? <TbRepeatOff size="24px" /> :repeating=== Repeat.One ? <TbRepeatOnce size="24px" /> : <TbRepeat size="24px" /> }
            </button>
          </div>
          )
}