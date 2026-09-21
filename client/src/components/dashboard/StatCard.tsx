import React from 'react';

function StatCard({
    data,
    label,
    value,
    description,
}: {
    label: string;
    value: string | number;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-500">
                {label}
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
                {value}
            </p>

            <p className="mt-1 text-xs text-slate-400">
                {description}
            </p>
        </div>
    );
}

export default async function StatCardSection() {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    const result = await response.json();
    const data = result.data;


    return (
        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard
                label="Total Reports"
                value={data.length ?? 0}
                description="All your reports"
            />

            <StatCard
                label="Active"
                value={data.active ?? 0}
                description="Currently active"
            />

            <StatCard
                label="Matches"
                value={data.matches ?? 0}
                description="Possible matches"
            />

            <StatCard
                label="Resolved"
                value={data.resolved ?? 0}
                description="Items returned"
            />
        </div>
    );
};
