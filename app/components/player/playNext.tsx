"use client"
import { usePlayerStore } from "@/store/store";
import PlayNextHeader from "./playNextHeader";
import Track from "./track";

export default function PlayNext() {
  const { playNextList } = usePlayerStore()
  return (
      <div className="w-full mx-auto px-4 py-2">
        <PlayNextHeader />
        {playNextList.map((track, idx) => {
          return (
            <Track
              index={idx}
              key={track.id}
              trackData={track}
              albumTitle={"MyAlbum"}          
            />
          );
        })}
      </div>
    )
}