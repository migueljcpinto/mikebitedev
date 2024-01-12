import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="absolute  flex justify-center items-center pointer-events-none"
    >
      <div className="border border-[#fff2cc] rounded-full h-[150px] w-[150px] animate-pulse" />
      <div className="rounded-full border border-[#ffd966] opacity-20 h-[200px] w-[200px] absolute animate-pulse" />
      <div className="rounded-full border border-[#e69500] opacity-20 h-[250px] w-[250px] absolute animate-pulse" />
      <div className="rounded-full border border-[#b77700] opacity-20 h-[325px] w-[325px] absolute animate-pulse" />
      <div className="rounded-full border border-[#ffdf80] opacity-20 h-[420px] w-[420px] absolute animate-pulse" />
      <div className="rounded-full border border-[#e08f00] opacity-20 h-[500px] w-[500px] absolute animate-pulse" />
      <div className="rounded-full border border-[#a06600] opacity-20 h-[550px] w-[550px] absolute animate-pulse" />
    </motion.div>
  );
}
