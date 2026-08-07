export default function StatusBadge({ status }) {
  const statusColors = {
    NEW: "bg-gray-200 text-gray-700",
    IN_PROGRESS: "bg-yellow-200 text-yellow-800",
    DONE: "bg-green-200 text-green-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
    >
      {status}
    </span>
  );
}
