"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  ChevronDown,
  Calendar,
  Heart,
  Clock,
} from "lucide-react";
import Itemcard from "../../components/shared/Itemcard";

// Mock data array representing the items grid
const itemsData = [
  {
    id: 1,
    title: "Leather Wallet",
    status: "LOST",
    location: "Dhanmondi, Dhaka",
    timeAgo: "2 hours ago",
    image: "/images/wallet.jpg",
  },
  {
    id: 2,
    title: "iPhone 13",
    status: "FOUND",
    location: "Sylhet",
    timeAgo: "5 hours ago",
    image: "/images/iphone13.jpeg",
  },
  {
    id: 3,
    title: "Backpack",
    status: "LOST",
    location: "Uttara, Dhaka",
    timeAgo: "1 day ago",
    image: "/images/backpack.jpg",
  },
  {
    id: 4,
    title: "Car Keys",
    status: "FOUND",
    location: "Gulshan, Dhaka",
    timeAgo: "1 day ago",
    image: "/images/carkeys.jpg",
  },
  {
    id: 5,
    title: "National ID Card",
    status: "FOUND",
    location: "Mohakhali, Dhaka",
    timeAgo: "2 days ago",
    image: "/images/idcard.jpg",
  },
  {
    id: 6,
    title: "AirPods",
    status: "LOST",
    location: "Dhanmondi, Dhaka",
    timeAgo: "2 days ago",
    image: "/images/airpods.jpg",
  },
  {
    id: 7,
    title: "Sunglasses",
    status: "FOUND",
    location: "Banani, Dhaka",
    timeAgo: "3 days ago",
    image: "/images/sunglasses.jpg",
  },
  {
    id: 8,
    title: "Laptop",
    status: "LOST",
    location: "Farmgate, Dhaka",
    timeAgo: "3 days ago",
    image: "/images/laptop.jpg",
  },
  {
    id: 9,
    title: "Ring",
    status: "FOUND",
    location: "Mirpur, Dhaka",
    timeAgo: "4 days ago",
    image: "/images/ring.jpg",
  },
];


const categoriesList = [
  "Electronics",
  "Documents",
  "Wallet & Bags",
  "Keys",
  "Jewelry",
  "Pets",
  "Other",
];

export default function BrowseItemsPage() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setStatusFilter("All");
    setSelectedCategories([]);
    setSelectedCity("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {itemsData.map((Item) => (
            <Itemcard key={Item.id} Item={Item}/>

        ))}
    </div>
  )
};