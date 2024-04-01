import { motion, useAnimation } from "framer-motion";
import { getRandomColor } from "@/lib/utils";

import React, { useEffect, useState } from "react";

interface RubberAnimationProps {
  className?: string;
  children: React.ReactNode;
}

const rubberBandScale = [
  "scale(1,1)",
  "scale(1.4, .55)",
  "scale(.75,1.25)",
  "scale(1.25, .85)",
  "scale(.9,1.05)",
  "scale(1,1)",
];

export const RubberAnimation: React.FC<RubberAnimationProps> = ({
  className,
  children,
}) => {
  const controls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const playRubberBandAnimation = () => {
    controls.start({
      transform: rubberBandScale,
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  const handleHoverStart = () => {
    if (!isPlaying) {
      playRubberBandAnimation();
      setIsHovered(true);
    }
  };

  const handleAnimationComplete = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      playRubberBandAnimation();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [playRubberBandAnimation]);

  return (
    <motion.span
      animate={controls}
      onTap={() => {
        if (!isPlaying) {
          playRubberBandAnimation();
        }
      }}
      onHoverStart={handleHoverStart}
      onAnimationComplete={handleAnimationComplete}
      className={`font-bold text-3xl inline-block ${
        isHovered ? getRandomColor() : ""
      } ${className || ""}`}
    >
      {children}{" "}
    </motion.span>
  );
};
