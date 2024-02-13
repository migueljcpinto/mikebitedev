import React from "react";
import { motion } from "framer-motion";

interface BackgroundCirclesProps {
  children?: React.ReactNode;
}

export default function BackgroundCircles(props: BackgroundCirclesProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="flex justify-center items-center pointer-events-none z-[-1]"
    >
      <div className="border border-[#70bbf4] dark:border-[#fff2cc] rounded-full h-[150px] w-[150px] animate-pulse relative pointer-events-none flex justify-center items-center"></div>
      <div className="absolute">{props.children}</div>
      <div className="rounded-full border border-[#29628d] dark:border-[#ffd966] opacity-20 h-[200px] w-[200px] absolute animate-pulse" />
      <div className="rounded-full border border-[#61b2f0] dark:border-[#e69500] opacity-20 h-[260px] w-[260px] absolute animate-pulse" />
      <div className="rounded-full border border-[#61b2f0] dark:border-[#b77700] opacity-20 h-[325px] w-[325px] absolute animate-pulse" />
    </motion.div>
  );
}
