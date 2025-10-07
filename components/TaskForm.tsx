"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Task } from "@/types";

interface TaskFormProps {
  onSubmit: (title: string, description: string, id?: string) => void;
  onCancel?: () => void;
  editingTask?: Task | null;
}

export default function TaskForm({
  onSubmit,
  onCancel,
  editingTask,
}: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setIsExpanded(true);
    } else {
      setTitle("");
      setDescription("");
      setIsExpanded(false);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        onSubmit(title, description, editingTask.id);
      } else {
        onSubmit(title, description);
      }
      setTitle("");
      setDescription("");
      setIsExpanded(false);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setIsExpanded(false);
    onCancel?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden"
    >
      <form onSubmit={handleSubmit} className="p-6">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              placeholder="Add a new task..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900"
            />
          </div>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add description (optional)..."
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900 resize-none"
              />
            </motion.div>
          )}
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3 mt-4"
          >
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex-1 px-6 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {editingTask ? "Update Task" : "Add Task"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium active:scale-[0.98]"
            >
              Cancel
            </button>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
