import cover from '@/public/Kundalini.jpg'

export default function CurrentTrack() {
  return (
    <div className='flex'>
      <img  className="mr-4 rounded-md object-cover h-14 w-14" src={cover.src}></img>
      <div className='flex flex-col justify-center'>
        <h6 className="font-bold text-sm leading-tight">Annayat</h6>
        <p className="text-gray-500 text-xs leading-tight">Stan Kolev</p>
      </div>
    </div>
  );
}