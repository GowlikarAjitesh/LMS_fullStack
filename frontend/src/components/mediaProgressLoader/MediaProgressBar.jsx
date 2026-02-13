import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function MediaProgressBar({ isMediaUploading, progress }) {
  const [showProgress, setShowProgress] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    let timer;

    if (isMediaUploading) {
      setShowProgress(true);
      setAnimatedProgress(progress);
    } else {
      timer = setTimeout(() => setShowProgress(false), 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isMediaUploading, progress]);

  if (!showProgress) return null;

  return (
    <div className="w-full bg-gray-200 rounded-full h-1 mt-5 mb-4 relative overflow-hidden">
      <motion.div
        className="bg-indigo-700 h-3 rounded-full"
        initial={{ width: 0 }}
        animate={{
          width: `${animatedProgress}%`,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        {progress >= 100 && isMediaUploading && (
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-indigo-200 opacity-50 overflow-hidden"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        )}
      </motion.div>
    </div>
  );
}
