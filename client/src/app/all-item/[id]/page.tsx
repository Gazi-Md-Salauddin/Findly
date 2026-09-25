
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { authClient } from "@/lib/auth-client";

interface Report {
  _id: string;
  title: string;
  type: "lost" | "found";
  category: string;
  location: string;
  date: string;
  time: string;
  status: "pending" | "claimed";
  reportedBy: string;
  description: string;
  images: string[];
}

interface SimilarItem {
  title: string;
  type: "Lost" | "Found";
  location: string;
  time: string;
  image: string;
}

// const report: Report = {
//   _id: "1",
//   title: "Leather Wallet",
//   type: "lost",
//   category: "Wallet & Accessories",
//   location: "Dhanmondi, Dhaka",
//   date: "September 5, 2026",
//   time: "Around 5:00 PM",
//   status: "pending",
//   reportedBy: "Anonymous",
//   description:
//     "Black leather wallet with multiple cards inside. Contains ID card, bank cards and some cash. Brand: Fossil.",
//   images: [
//     "/wallet.jpg",
//     "/wallet-2.jpg",
//     "/wallet-3.jpg",
//   ],
// };

const similarItems: SimilarItem[] = [
  {
    title: "Black Wallet",
    type: "Lost",
    location: "Dhanmondi",
    time: "2h ago",
    image: "/wallet.jpg",
  },
  {
    title: "Wallet",
    type: "Found",
    location: "Gulshan",
    time: "1d ago",
    image: "/wallet-2.jpg",
  },
  {
    title: "Leather Wallet",
    type: "Lost",
    location: "Mirpur",
    time: "3d ago",
    image: "/wallet-3.jpg",
  },
];

export default async function ReportDetailsPage({
  params,
}: {
  params: Promise<{id: string }>;
} ) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/${id}`
  )
  console.log("Response:", response);

const result = await response.json();
const data = result.data;

console.log("API Result:", data);

  if(!response.ok) {
    throw new Error("Failed to fetch server")
  }

  // const data: Report = await response.json()
  // console.log("API DATA:", data);
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/all-item"
          className="mb-5 inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to browse
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">

          {/* LEFT */}
          <div className="space-y-5">

            {/* Report */}
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={data?.images?.[0] || "/images/placeholder.jpg"}
                  alt={data.title}
                  width={800}
                  height={800}
                  
                  className="object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-3 flex gap-2">
                {data.images?.map((images, index) => (
                  <div
                    key={images}
                    className="relative h-16 w-16 overflow-hidden rounded-md border border-slate-200"
                  >
                    <Image
                      src={data.images[0]}
                      alt={`${data.title}-${index + 1}`}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Report Details */}
            <section className="rounded-xl border border-slate-200 bg-white p-5">

              <h2 className="mb-4 text-md font-bold text-slate-900">
                Report Details
              </h2>

              <div className="space-y-3 text-sm">

                <DetailRow
                  label="Category"
                  value={data.category}
                />

                <DetailRow
                  label="Location"
                  value={data.city}
                />

                <DetailRow
                  label="Date Lost"
                  value={data.date}
                />

                <DetailRow
                  label="Time"
                  value={data.time}
                />

                <DetailRow
                  label="Type"
                  value={
                    <span className="font-semibold text-red-500">
                      ● {data.type}
                    </span>
                  }
                />

                <DetailRow
                  label="Reported by"
                  value={data._id}
                />

              </div>

            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {/* Claim */}
            <section className="rounded-xl border border-slate-200 bg-white p-4">

              <div className="mb-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-md bg-red-500 px-2 py-1 text-xs font-bold uppercase text-white">
                    Lost
                  </span>

                  <span className="text-xs text-slate-400">
                    • 2 hours ago
                  </span>
                </div>

                <h1 className="text-2xl font-bold text-slate-900">
                  {data.title}
                </h1>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <FileText className="h-4 w-4" />
                  {data.category}
                </div>
              </div>

              {/* Location */}
              <div className="mb-4 space-y-2 text-sm text-slate-600">

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  {data.city}
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  Lost on {data.date}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {data.description}
                </p>
              </div>

              <h2 className="text-sm font-bold text-slate-900">
                Think this is yours?
              </h2>

              <button className="mt-3 w-full rounded-md bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700">
                Claim this item
              </button>

              <button className="mt-2 w-full rounded-md border border-blue-300 px-4 py-2.5 text-xs font-semibold text-blue-600 hover:bg-blue-50">
                Report incorrect information
              </button>

            </section>

            {/* Safety */}
            <section className="rounded-xl border border-blue-100 bg-blue-50 p-4">

              <div className="flex gap-3">

                <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" />

                <div>
                  <h2 className="text-xs font-bold text-slate-800">
                    Safety Notice
                  </h2>

                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    For your safety, never share personal phone numbers,
                    addresses or bank details in public messages.
                  </p>
                </div>

              </div>

            </section>

            {/* Similar Items */}
            <section className="rounded-xl border border-slate-200 bg-white p-4">

              <h2 className="mb-4 text-sm font-bold text-slate-900">
                Similar Items
              </h2>

              <div className="space-y-3">

                {similarItems.map((item) => (
                  <div
                    key={`${item.title}-${item.location}`}
                    className="flex gap-3 rounded-lg p-1 hover:bg-slate-50"
                  >

                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src="/images/wallet.jpg"
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px]">
                        <span
                          className={
                            item.type === "Lost"
                              ? "font-semibold text-red-500"
                              : "font-semibold text-green-600"
                          }
                        >
                          {item.type}
                        </span>

                        <span className="mx-1 text-slate-300">
                          •
                        </span>

                        <span className="text-slate-500">
                          {item.location}
                        </span>
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        {item.time}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] border-b border-slate-100 pb-3 last:border-0">
      <span className="text-slate-400">
        {label}
      </span>

      <span className="font-medium text-slate-700">
        {value}
      </span>
    </div>
  );
}