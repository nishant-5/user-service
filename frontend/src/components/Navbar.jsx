import { FaPlus, FaSearch } from "react-icons/fa";

export default function Navbar({ openModal })  {
  return (
    <nav className="flex justify-end items-center gap-4">

  <div className="relative">

    <FaSearch className="absolute left-3 top-3 text-gray-400" />

    <input
      type="text"
      placeholder="Search tasks..."
      className="pl-10 pr-4 py-3 rounded-lg border bg-white w-80"
    />

  </div>

  <button
    onClick={openModal}
    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
  >
    + New Task
  </button>

</nav>
  );
}
