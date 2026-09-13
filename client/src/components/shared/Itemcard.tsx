import React from 'react';
import Image from "next/image";
import {
  MapPin,
  ChevronDown,
  Calendar,
  Heart,
  Clock,
} from "lucide-react";

interface itemsData {
    id: number;
    image: string;
    name: string;
    status: string;
    location: string;
    timeAgo: string;
}

interface ItemProps {
    Item: itemsData;
}

const Itemcard = ({ Item }: ItemProps) => {
  return (
    <div className="bg-white rounded-2xl p-2 border border-slate-100 hover:shadow-xl">
      <div className="relative rounded-xl mb-2">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
          {Item.status}
        </span>
        <Image
          src={Item.image}
          alt={Item.name}
          width="400"
          height="400"
          className="object-contain"
        />
      </div>
      <h3 className="text-sm font-bold text-slate-900 px-1">{Item.name}</h3>
      <p className="text-[11px] text-slate-400 px-1 mt-0.5 flex items-center gap-1">
        <MapPin className="w-3 h-3 text-slate-400 inline" />{Item.location} • {Item.timeAgo}
      </p>
    </div>
  );
};

export default Itemcard;