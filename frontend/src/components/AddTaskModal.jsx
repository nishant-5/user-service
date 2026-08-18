import { useState } from "react";

export default function AddTaskModal({
  task,
  onClose,
  onSave,
}) {
  const [date, setDate] = useState(task?.date || "");
  const [taskName, setTaskName] = useState(task?.taskName || "");
  const [status, setStatus] = useState(task?.status || "NEW");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...(task || {}),
      date,
      taskName,
      status,
      deleted: task?.deleted || false,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6">
          {task ? "Edit Task" : "Create Task"}
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div className="mb-6">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="NEW UPDATE">NEW</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="DONE">DONE</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}