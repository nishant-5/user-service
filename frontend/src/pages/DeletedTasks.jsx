export default function DeletedTasks() {

  return (

    <div className="p-8">

      <h1 className="text-2xl font-bold mb-4">

        Recently Deleted

      </h1>

      <div className="bg-white p-4 rounded shadow">

        <p>Install ArgoCD</p>

        <p>Deleted 3 minutes ago</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3">

          Undo

        </button>

      </div>

    </div>

  );
}
