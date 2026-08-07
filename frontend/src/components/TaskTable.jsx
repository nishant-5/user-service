import StatusBadge from "./StatusBadge";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TaskTable({ tasks, onDelete, onStatusChange, onEdit, })  {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Date</th>

            <th className="p-4 text-left">Task</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {tasks.map((task) => (

            <tr
              key={task.id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="p-4">
                {task.date}
              </td>

              <td className="p-4 font-medium">
                {task.taskName}
              </td>

              <td className="p-4">
  <select
    value={task.status}
    onChange={(e) =>
      onStatusChange(task.id, e.target.value)
    }
    className={`
      rounded-full px-3 py-2 text-sm font-medium border-0 outline-none
      ${
        task.status === "NEW"
          ? "bg-gray-200 text-gray-700"
          : task.status === "IN_PROGRESS"
          ? "bg-yellow-200 text-yellow-800"
          : "bg-green-200 text-green-800"
      }
    `}
  >
    <option value="NEW">NEW</option>
    <option value="IN_PROGRESS">IN_PROGRESS</option>
    <option value="DONE">DONE</option>
  </select>
</td>

              <td className="p-4">

                <div className="flex gap-2">

                  <button onClick={() => onEdit(task)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg">
                    <FaEdit />
                  </button>

                  <button  onClick={() => onDelete(task.id)}
  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg">
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}
