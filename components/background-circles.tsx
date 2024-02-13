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
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="flex justify-center items-center pointer-events-none z-[-1]"
    >
      <div className="border border-[#4286bb] dark:border-[#fff2cc] rounded-full h-[150px] w-[150px] animate-pulse relative pointer-events-none flex justify-center items-center">
        {props.children}
      </div>

      <div className="rounded-full border border-[#29628d] dark:border-[#ffd966] opacity-20 h-[200px] w-[200px] absolute animate-pulse" />
      <div className="rounded-full border border-[#61b2f0] dark:border-[#e69500] opacity-20 h-[260px] w-[260px] absolute animate-pulse" />
      <div className="rounded-full border border-[#61b2f0] dark:border-[#b77700] opacity-20 h-[325px] w-[325px] absolute animate-pulse" />
      <div className="rounded-full border border-[#5a8aaf] dark:border-[#ffdf80] opacity-20 h-[430px] w-[430px] absolute animate-pulse" />
      <div className="rounded-full border border-[#37a7fd] dark:border-[#e08f00] opacity-20 h-[500px] w-[500px] absolute animate-pulse" />
      <div className="rounded-full border border-[#72baf2] dark:border-[#a06600] opacity-20 h-[650px] w-[650px] absolute animate-pulse" />
      <div className="rounded-full border border-[#0657b5] dark:border-[#a06600] opacity-20 h-[700px] w-[700px] absolute animate-pulse" />
      <div className="rounded-full border border-[#61b2f0] dark:border-[#a06600] opacity-20 h-[850px] w-[850px] absolute animate-pulse" />
    </motion.div>
  );
}
