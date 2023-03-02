import React, { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { TrackData } from "./player";

interface Props {
  trackData: TrackData
}
export default function Track( { trackData }: Props) {
  return (
    <div
      className="grid grid-cols-player mx-auto px-4 py-2 rounded-sm transition-colors hover:bg-hover cursor-pointer" >
      <div className="col-span-1 flex items-center">
        <img src={trackData.imgSrc} alt="Album Cover" className="w-[40px] h-[40px] ml-2" />
      </div>
      <div className="col-span-5 flex flex-col items-start justify-start">
        <span className="text-white font-semibold">{trackData.title}</span>
        <span>{trackData.artist}</span>
      </div>
      <div className="col-span-5 flex items-center justify-start">
        {trackData.album}
      </div>
      <div className="col-span-1 flex items-center justify-start">
        {trackData.duration}s
      </div>
    </div>
  );
}