"use client"
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-gray-800 text-white text-2xl font-semibold rounded-2xl shadow-lg"
      >
        Only the backend code is available
      </motion.div>
    </div>
  );
}
