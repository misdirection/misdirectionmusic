import PlayListHeader from "./playlistheader";
import { Dispatch, SetStateAction } from "react";
import { Howl } from "howler";
import Track from "./track";
import {Album, Track as TrackModel} from "@prisma/client"

export interface Props {
  album: Album & { Track: TrackModel[]}
 }

export default function PlayList( {album} : Props) {
  return (
      <div className="w-full mx-auto px-4 py-2">
        <PlayListHeader />
        {album.Track.map((track, idx) => {
          return (
            <Track
              key={track.id}
              trackData={track}
              albumTitle={album.title}          
            />
          );
        })}
      </div>
    )
}