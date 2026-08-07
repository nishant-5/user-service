export default function DeletedTasks({ deletedTasks }) {

  const latestTask =
    deletedTasks.length > 0
      ? deletedTasks[deletedTasks.length - 1]
      : null;

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-2xl font-bold mb-5">

        Recently Deleted

      </h2>

      {!latestTask && (

        <p className="text-gray-500">

          No deleted tasks

        </p>

      )}

      {latestTask && (

        <div className="flex justify-between items-center">

          <div>

            <p className="font-semibold">
              {latestTask.taskName}
            </p>

            <p className="text-gray-500">
              Deleted just now
            </p>

          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Undo
          </button>

        </div>

      )}

    </div>
  );
}