
import MyReports from "@/components/dashboard/MyReports";
import StatCard from "@/components/dashboard/StatCard";
import {
    CalendarDays,
    ChevronDown,
    Edit3,
    Eye,
    MapPin,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
} from "lucide-react";
import Image from "next/image";

interface Report {
    _id: string;
    title: string;
    type: string;
    category: string;
    city: string;
    date: string;
    status: string;
    images: string[];
}


export default async function MyReportsPage() {
    // const [activeFilter, setActiveFilter] = useState<
    //     "all" | "lost" | "found"
    // >("all");

    // const [search, setSearch] = useState("");

    // const filteredReports = reports.filter((report) => {
    //     const matchesType =
    //         activeFilter === "all" || report.type === activeFilter;

    //     const matchesSearch = report.title
    //         .toLowerCase()
    //         .includes(search.toLowerCase());

    //     return matchesType && matchesSearch;
    // });

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    const result = await response.json();
    const data = result.data;

    console.log("my reports:", data)

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-7xl w-full ml-14 px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            My Reports
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage all the items you have reported.
                        </p>
                    </div>

                    <a
                        href="/report-item"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        <Plus size={18} />
                        Report Item
                    </a>
                </div>

                {/* Stats */}
                <StatCard/>

                {/* Reports Container */}
                <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    {/* Toolbar */}
                    <div className="border-b border-slate-200 p-4 sm:p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            {/* Filters */}
                            {/* <div className="flex w-full gap-1 rounded-xl bg-slate-100 p-1 sm:w-fit">
                                <FilterButton
                                    active={activeFilter === "all"}
                                    onClick={() => setActiveFilter("all")}
                                >
                                    All Reports
                                </FilterButton>

                                <FilterButton
                                    active={activeFilter === "lost"}
                                    onClick={() => setActiveFilter("lost")}
                                >
                                    Lost
                                </FilterButton>

                                <FilterButton
                                    active={activeFilter === "found"}
                                    onClick={() => setActiveFilter("found")}
                                >
                                    Found
                                </FilterButton>
                            </div>*/}

                            {/* Search + Status */}
                            <div className="flex flex-col gap-3 sm:flex-row">
                                {/* <div className="relative">
                                    <Search
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search reports..."
                                        className="h-10 w-full rounded-lg border border-slate-200 pl-9 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 sm:w-64"
                                    />
                                </div> */}

                                <button className="flex h-10 items-center justify-between gap-4 rounded-lg border border-slate-200 px-3 text-sm text-slate-600 hover:bg-slate-50">
                                    All Status
                                    <ChevronDown size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden overflow-x-auto md:block">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50/70">
                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Item
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Type
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Location
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Date
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Status
                                    </th>

                                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((report) => (
                                    <MyReports key={report._id} report={report} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="divide-y divide-slate-100 md:hidden">
                        {data.map((report) => (
                            <MobileReportCard
                                key={report._id}
                                report={report}
                            />
                        ))}
                    </div>

                    {/* Empty State */}
                    {data.length === 0 && (
                        <div className="px-6 py-16 text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                                <Search
                                    size={21}
                                    className="text-slate-400"
                                />
                            </div>

                            <h3 className="mt-4 text-sm font-semibold text-slate-900">
                                No reports found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Try changing your search or filter.
                            </p>
                        </div>
                    )}

                    {/* Footer */}
                    {data.length > 0 && (
                        <div className="flex flex-col gap-2 border-t border-slate-200 px-5 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                            <span>
                                Showing {data.length} of {data.length}{" "}
                                reports
                            </span>

                            <div className="flex items-center gap-2">
                                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-50">
                                    Previous
                                </button>

                                <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
                                    1
                                </button>

                                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}



/* -------------------------------- */
/* Components                       */
/* -------------------------------- */



function FilterButton({
    active,
    onClick,
    children,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${active
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
                }`}
        >
            {children}
        </button>
    );
}


function MobileReportCard({ report }: { report: Report }) {
    return (
        <div className="p-4">
            <div className="flex gap-3">
                <Image
                    src={report.images[0]}
                    alt={report.title}
                    width={20}
                    height={20}
                    className="shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <h3 className="truncate text-sm font-semibold text-slate-900">
                                {report.title}
                            </h3>

                            <p className="mt-1 text-xs text-slate-400">
                                {report.category}
                            </p>
                        </div>

                        <button className="text-slate-400">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>

                    {/* <div className="mt-3 flex flex-wrap items-center gap-2">
                        <TypeBadge type={report.type} />
                        <StatusBadge status={report.status} />
                    </div> */}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={14} />
                    {report.city}
                </div>

                {/* <div className="flex gap-2">
                    <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700">
                        View
                    </button>

                    <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
                        Edit
                    </button>
                </div> */}
            </div>
        </div>
    );
}





