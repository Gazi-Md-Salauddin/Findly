import { CalendarDays, Eye, MapPin } from 'lucide-react';
import React from 'react';
import StatusBadge from '../StatusBadge';
import DeleteModal from './DeleteModal';
import EditItem from './EditItem';
import Image from 'next/image';
import Link from 'next/link';

type ReportType = "lost" | "found";

type ReportStatus = "active" | "pending" | "claimed" | "resolved" | "rejected";

interface Report {
    _id: string;
    images: string[];
    title: string;
    category: string;
    type: ReportType;
    city: string;
    area: string;
    date: string;
    status?: ReportStatus;
}

interface ReportProps {
    report: Report;
}


function TypeBadge({ type }: { type: ReportType }) {
    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${type === "lost"
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
                }`}
        >
            {type === "lost" ? "Lost" : "Found"}
        </span>
    );
}


function ActionButton({
    icon,
    label,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    href: string;
}) {
    return (
        <Link href={href}
            title={label}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
            {icon}

        </Link>
    );
}


const MyReports = ({ report }: ReportProps) => {

    return (
        <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
            {/* Item */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                    <Image
                        src={report.images[0]}
                        alt={report.title}
                        width={40}
                        height={40}
                        className="rounded-md object-cover"
                    />

                    <div>
                        <p className="text-sm font-semibold text-slate-900">
                            {report.title}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                            {report.category}
                        </p>
                    </div>
                </div>
            </td>

            {/* Type */}
            <td className="px-5 py-4">
                <TypeBadge type={report.type} />
            </td>

            {/* Location */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <MapPin size={15} className="text-slate-400" />
                    {report.city}
                </div>
            </td>

            {/* Date */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <CalendarDays
                        size={15}
                        className="text-slate-400"
                    />
                    {report.date}
                </div>
            </td>

            {/* Status */}
            <td className="px-5 py-4">
                <StatusBadge status={report.status || "pending"} />
            </td>

            {/* Actions */}
            <td className="px-5 py-4">
                <div className="flex justify-end gap-1">
                    <ActionButton
                        icon={<Eye size={16} />}
                        label="View"
                        href={`/all-item/${report._id}`}
                    />
                    <EditItem report={report} />
                    <DeleteModal id={report._id} />
                    
                </div>
            </td>
        </tr>
    );
};

export default MyReports;