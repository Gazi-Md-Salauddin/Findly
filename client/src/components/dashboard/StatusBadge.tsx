"use client";

type ReportStatus =
  | "active"
  | "pending"
  | "claimed"
  | "resolved"
  | "rejected";

const StatusBadge = ({ status }: { status: ReportStatus }) => {
  const styles = {
    active: "bg-blue-50 text-blue-700",
    pending: "bg-amber-50 text-amber-700",
    claimed: "bg-purple-50 text-purple-700",
    resolved: "bg-green-50 text-green-700",
    rejected: "bg-red-50 text-red-700",
  };

  const labels = {
    active: "Active",
    pending: "Pending",
    claimed: "Claimed",
    resolved: "Resolved",
    rejected: "Rejected",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      <span className="mr-1.5">●</span>
      {labels[status]}
    </span>
  );
};

export default StatusBadge;