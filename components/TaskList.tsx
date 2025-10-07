"use client";

import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";
import { Task } from "@/types";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onViewDetails: (task: Task) => void;
}

export default function TaskList({
  tasks,
  onToggleComplete,
  onEdit,
  onDelete,
  onViewDetails,
}: TaskListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
            onDelete={onDelete}
            onViewDetails={onViewDetails}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
