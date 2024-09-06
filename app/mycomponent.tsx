import React from 'react'
import * as motion from "framer-motion/client"

export const MyComponent = () => (
  <motion.div
    className="w-24 h-24 bg-red-500"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: [1, 1.5, 1, 2, 1]}}
    whileHover={{
      scale: 1.2,
      transition: { duration: 0.1}
    }}
    transition={{ duration: 2 }}
  />
)