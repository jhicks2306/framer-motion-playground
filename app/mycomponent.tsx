import React from 'react'
import * as motion from "framer-motion/client"

export const MyComponent = () => (
  <motion.div
    className="w-24 h-24 bg-red-500"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
)