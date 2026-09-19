import {
  Search,
  MapPin,
  ChevronDown,
  Calendar,
  Heart,
  Clock,
} from "lucide-react";
import Itemcard from "../../components/shared/Itemcard";


// const categoriesList = [
//   "Electronics",
//   "Documents",
//   "Wallet & Bags",
//   "Keys",
//   "Jewelry",
//   "Pets",
//   "Other",
// ];

interface ItemResponse {
  success: boolean;
  message: string;
  data: Posts[];
}

export default async function BrowseItemsPage() {
  // const [statusFilter, setStatusFilter] = useState("All");
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedCity, setSelectedCity] = useState("");
  // const [fromDate, setFromDate] = useState("");
  // const [toDate, setToDate] = useState("");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
      );

      if(!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data: ItemResponse = await response.json();
      console.log(data.data)
    

  // const handleCategoryToggle = (category: string) => {
  //   setSelectedCategories((prev) =>
  //     prev.includes(category)
  //       ? prev.filter((item) => item !== category)
  //       : [...prev, category]
  //   );
  // };

  // const clearAllFilters = () => {
  //   setStatusFilter("All");
  //   setSelectedCategories([]);
  //   setSelectedCity("");
  //   setFromDate("");
  //   setToDate("");
  // };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.data.map((Item) => (
        <Itemcard key={Item._id} Item={Item} />

      ))}
    </div>
  )
};