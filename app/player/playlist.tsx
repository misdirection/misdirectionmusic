import PlayListHeader from "./playlistheader";
import { Dispatch, SetStateAction } from "react";
import { Howl } from "howler";




export default function PlayList({
    playing,
    setPlaying,
    repeating,
    selectedHowl,
    setSelectedHowl,
  } : TrackListProps) {
    //const data = getTracks();
    // console.log(data);
    return (
      <div className="w-full mx-auto px-4 py-2">
        <PlayListHeader />
  
        {tracks.map((track, idx) => {
          return (
            <Track
              key={track.id}
              track={track}
              playing={playing}
              setPlaying={setPlaying}
              repeating={repeating}
              isFirstTrack={idx === 0}
            />
          );
        })}
      </div>
    )
}