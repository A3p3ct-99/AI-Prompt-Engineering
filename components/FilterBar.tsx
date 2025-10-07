"use client";

import { motion } from "framer-motion";
import { FilterType } from "@/types";

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    total: number;
    active: number;
    completed: number;
  };
}

export default function FilterBar({
  currentFilter,
  onFilterChange,
  counts,
}: FilterBarProps) {
  const filters: { label: string; value: FilterType; count: number }[] = [
    { label: "All", value: "all", count: counts.total },
    { label: "Active", value: "active", count: counts.active },
    { label: "Completed", value: "completed", count: counts.completed },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-2 mb-6 shadow-sm">
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className="relative flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
          >
            {currentFilter === filter.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gray-900 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 flex items-center justify-center gap-2 ${
                currentFilter === filter.value
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {filter.label}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  currentFilter === filter.value
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {filter.count}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
