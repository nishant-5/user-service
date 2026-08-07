import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import TaskTable from "../components/TaskTable";
import DeletedTasks from "../components/DeletedTasks";
import AddTaskModal from "../components/AddTaskModal";
import Sidebar from "../components/Sidebar";

import {
  getTasks,
  createTask,
  updateTask,
} from "../api/taskApi";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  const activeTasks = tasks.filter(
    (task) => !task.deleted && task.status !== "DONE"
  );

  const completedTasks = tasks.filter(
    (task) => !task.deleted && task.status === "DONE"
  );

  const deletedTasks = tasks.filter(
    (task) => task.deleted
  );

  const updateStatus = async (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status: newStatus }
        : task
    );

    setTasks(updatedTasks);

    const updatedTask = updatedTasks.find(
      (task) => task.id === id
    );

    await updateTask(id, updatedTask);
  };

  const addTask = async (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      deleted: false,
    };

    try {
      await createTask(newTask);

      await loadTasks();

      setShowModal(false);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const editTask = async (updatedTask) => {
    try {
      await updateTask(updatedTask.id, updatedTask);

      await loadTasks();

      setEditingTask(null);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to edit task:", error);
    }
  };

  const deleteTask = async (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, deleted: true }
        : task
    );

    setTasks(updatedTasks);

    const updatedTask = updatedTasks.find(
      (task) => task.id === id
    );

    await updateTask(id, updatedTask);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar
          deletedTasks={deletedTasks}
          completedTasks={completedTasks}
        />

        <div className="flex-1 p-8">

          <Navbar openModal={() => setShowModal(true)} />

          <div className="mt-8">

            <Stats tasks={tasks} />

            <h2 className="text-4xl font-bold my-8">
              My Tasks
            </h2>

            <TaskTable
              tasks={activeTasks}
              onDelete={deleteTask}
              onStatusChange={updateStatus}
              onEdit={(task) => {
                setEditingTask(task);
                setShowModal(true);
              }}
            />

            <div className="mt-8">

              <DeletedTasks
                deletedTasks={deletedTasks}
              />

            </div>

          </div>

        </div>

      </div>

      {showModal && (
        <AddTaskModal
          task={editingTask}
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
          onSave={
            editingTask
              ? editTask
              : addTask
          }
        />
      )}
    </>
  );
}