import cover from '@/public/Kundalini.jpg'

export default function Card() {
  return (
    <div>
      <img className="rounded-lg object-cover h-48 w-48" src={cover.src}></img>
      <h6 className="font-bold text-lg mt-1 leading-tight">Kundalini</h6>
      <p className="text-gray-500 text-sm leading-tight">Stan Kolev</p>
    </div>
  );
}