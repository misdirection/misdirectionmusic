'use client'
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { TbRepeatOff, TbRepeatOnce, TbRepeat, TbArrowsShuffle } from "react-icons/tb"
import { ChangeEventHandler, useEffect, useRef } from "react";
import { Howler, Howl } from "howler";
import { Repeat, usePlayerStore } from "@/store/store"
import ForwardButton from "./forwardButton";
import BackButton from "./backButton";
import CurrentTrack from "./currentTrack";

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
          <div className="grid py-2 px-10 bg-gray-200 grid-cols-3 gap-0">
            <div className="self-center">
              <CurrentTrack />
            </div>
            
            <div className="justify-self-center self-center flex items-center">
              <div className="flex items-center">
                <button onClick={toggleRepeating} className='p-2 rounded-full mr-4 text-indigo-500 drop-shadow-playButtons hover:text-indigo-600 transition duration-300 ease-in-out' >
                  {repeating === Repeat.None ? <TbRepeatOff size="20px" /> :repeating=== Repeat.One ? <TbRepeatOnce size="20px" /> : <TbRepeat size="20px" /> }
                </button>
                <BackButton />
                <button disabled={soundRef.current === null }
                  className="text-textLight bg-indigo-500 p-2 rounded-full mx-4 disabled:bg-slate-50 disabled:text-slate-500 drop-shadow-playButtons hover:bg-indigo-600 transition duration-300 ease-in-out"
                  onClick={togglePlayPause}>
                  {isPlaying ? <BsPauseFill size="26px" /> : <BsPlayFill size="26px" />}
                </button>
                <ForwardButton />
              </div>
              <button className='p-2 ml-4 text-indigo-500 drop-shadow-playButtons flex items-center hover:text-indigo-600 transition duration-300 ease-in-out'>
                <TbArrowsShuffle size="20px" />
              </button>
            </div>

            <div className="justify-self-end self-center">
              <input
              type="range"
              max="100"
              defaultValue="100"
              onChange={handleVolumeChange}
              className="cursor-pointer accent-indigo-500 drop-shadow-playButtons"
            />
            </div>
            
            
          </div>
          )
}