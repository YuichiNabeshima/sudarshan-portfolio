"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
  color: string
  delay?: number
  inView: boolean
}

const SkillBar = ({ name, percentage, color, delay = 0, inView }: SkillBarProps) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    let timeout: number;
    if (inView) {
      timeout = setTimeout(() => {
        setWidth(percentage)
      }, delay * 1000)
    } else {
      setWidth(0)
    }

    return () => clearTimeout(timeout)
  }, [inView, percentage, delay])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-300">{name}</span>
        <span className="text-purple-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${width}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  )
}

export default SkillBar

