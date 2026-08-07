import { useState } from "react";

export default function AddTaskModal({ onClose, onSave,  task, }) {
  const [date, setDate] = useState(task?.date || "");

  const [taskName, setTaskName] = useState(
    task?.taskName || ""
  );
  
  const [status, setStatus] = useState(
    task?.status || "NEW"
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

      <h2 className="text-2xl font-bold mb-6">
  {task ? "Edit Task" : "Create Task"}
</h2>

        <div className="space-y-4">

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          <input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option value="NEW">NEW</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
  onClick={() =>
    onSave({
      id: task?.id || Date.now(),
      date,
      taskName,
      status,
    })
  }
  className="rounded-lg bg-blue-600 px-4 py-2 text-white"
>
  {task ? "Update" : "Save"}
</button>

        </div>

      </div>

    </div>
  );
}