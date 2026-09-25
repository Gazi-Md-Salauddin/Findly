"use client"
import Image from "next/image";
import {
  MapPin,
  ChevronDown,
  Calendar,
  Heart,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface itemsData {
    _id: number;
    images: string[];
    title: string;
    type: string;
    city: string;
    area: string;
    time: string;
}

interface ItemProps {
    Item: itemsData;
}

const Itemcard = ({ Item }: ItemProps) => {
  return (
    <div className="bg-white rounded-2xl p-2 border border-slate-100 hover:shadow-xl">
      <div className="relative rounded-xl mb-2">
        <span className={`absolute top-2 left-2 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider
          ${Item.type === "lost"
            ? "bg-red-500"
            : "bg-green-500"
          }`}>
          {Item.type}
        </span>
        <Image
          src={Item.images?.[0]}
          alt={Item.title}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-slate-900 px-1">{Item.title}</h3>
      <p className="text-md text-slate-400 py-2 mt-2 flex items-center gap-1">
        <MapPin className="w-3 h-3 text-slate-400 inline" />{Item.area}, {Item.city} • {Item.time}
      </p>
      <Link href={`/all-item/${Item._id}`}>
      <Button>View Details <ArrowRight className="transition-transform group-hover:translate-x-1"/></Button>
      </Link>
    </div>
  );
};

export default Itemcard;