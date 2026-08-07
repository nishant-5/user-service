export default function Stats({ tasks }) {
  const total = tasks.length;

  const newTasks = tasks.filter(
      t => t.status === "NEW"
  ).length;

  const inProgress = tasks.filter(
      t => t.status === "IN_PROGRESS"
  ).length;

  const done = tasks.filter(
      t => t.status === "DONE"
  ).length;

  const stats = [
      { title:"Total Tasks", value:total },
      { title:"New", value:newTasks },
      { title:"In Progress", value:inProgress },
      { title:"Done", value:done }
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <p className="text-gray-500">{stat.title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
