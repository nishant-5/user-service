import {
    FaClipboardList,
    FaTrash,
    FaCog,
  } from "react-icons/fa";
  const currentEnv = "PROD";
  export default function Sidebar({
    deletedTasks,
    completedTasks,
  }) {
    return (
      <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
  
  <h1 className="text-3xl font-bold">
  TaskPad
</h1>

<div className="mt-2 mb-8 flex gap-2">

<span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${
    currentEnv === "DEV"
      ? "bg-green-600"
      : "bg-gray-700"
  }`}
>
  DEV
</span>

<span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${
    currentEnv === "PROD"
      ? "bg-red-600"
      : "bg-gray-700"
  }`}
>
  PROD
</span>

</div>
  
        <div className="space-y-6">
  
          {/* Dashboard */}
  
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <FaClipboardList />
            <span>Dashboard</span>
          </div>
  
          {/* Completed Tasks */}
  
          <div className="rounded-lg p-3 hover:bg-slate-800">
  
            <div className="flex items-center gap-3 mb-3">
              <span>✅</span>
  
              <span>
                Completed Tasks ({completedTasks.length})
              </span>
            </div>
  
            <div className="space-y-2">
  
              {completedTasks.length === 0 ? (
  
                <p className="text-sm text-gray-400">
                  No completed tasks
                </p>
  
              ) : (
  
                completedTasks
                  .slice(-5)
                  .reverse()
                  .map((task) => (
  
                    <div
                      key={task.id}
                      className="rounded bg-slate-800 p-2 text-sm text-gray-300"
                    >
                      {task.taskName}
                    </div>
  
                  ))
  
              )}
  
            </div>
  
          </div>
  
          {/* Deleted Tasks */}
  
          <div className="rounded-lg p-3 hover:bg-slate-800">
  
            <div className="flex items-center gap-3 mb-3">
              <FaTrash />
  
              <span>
                Deleted Tasks ({deletedTasks.length})
              </span>
            </div>
  
            <div className="space-y-2">
  
              {deletedTasks.length === 0 ? (
  
                <p className="text-sm text-gray-400">
                  No deleted tasks
                </p>
  
              ) : (
  
                deletedTasks
                  .slice(-5)
                  .reverse()
                  .map((task) => (
  
                    <div
                      key={task.id}
                      className="rounded bg-slate-800 p-2 text-sm text-gray-300"
                    >
                      {task.taskName}
                    </div>
  
                  ))
  
              )}
  
            </div>
  
          </div>
  
          {/* Settings */}
  
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <FaCog />
            <span>Settings</span>
          </div>
  
        </div>
  
      </div>
    );
  }