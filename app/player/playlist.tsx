import PlayListHeader from "./playlistheader";
import { Dispatch, SetStateAction } from "react";
import { Howl } from "howler";
import { TrackData } from "./player";
import Track from "./track";

export interface TrackListProps {
  tracks: TrackData[];
 }
export default function PlayList( {tracks} : TrackListProps) {
    return (
      <div className="w-full mx-auto px-4 py-2">
        <PlayListHeader />
  
        {tracks.map((track, idx) => {
          return (
            <Track
              key={track.id}
              trackData={track}             
            />
          );
        })}
      </div>
    )
}