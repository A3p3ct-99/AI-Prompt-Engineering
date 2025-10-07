"use client";

import { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import FilterBar from "@/components/FilterBar";
import TaskDetailModal from "@/components/TaskDetailModal";
import { Task, FilterType } from "@/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (id: string, title: string, description: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title, description } : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEdit = (task: Task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  const viewTaskDetails = (task: Task) => {
    setSelectedTask(task);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Tasks
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Organize your work and life, beautifully.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              {stats.total}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Total</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">
              {stats.active}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Active</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-bold text-green-600">
              {stats.completed}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Done</div>
          </div>
        </div>

        {/* Task Form */}
        <div className="mb-6 sm:mb-8">
          <TaskForm
            onSubmit={editingTask ? updateTask : addTask}
            onCancel={editingTask ? cancelEdit : undefined}
            editingTask={editingTask}
          />
        </div>

        {/* Filter Bar */}
        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={stats}
        />

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onEdit={startEdit}
          onDelete={deleteTask}
          onViewDetails={viewTaskDetails}
        />

        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <div className="text-6xl sm:text-7xl mb-4">📝</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              No tasks {filter !== "all" && filter}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {filter === "all"
                ? "Add a new task to get started"
                : `You don't have any ${filter} tasks`}
            </p>
          </div>
        )}

        {/* Task Detail Modal */}
        {selectedTask && (
          <TaskDetailModal task={selectedTask} onClose={closeTaskDetails} />
        )}
      </div>
    </main>
  );
}
