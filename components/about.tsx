"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>{" "}
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Nursing</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp at{" "}
        <span className="font-medium text-orange-400	">Neuefische School </span>{" "}
        and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and the possibility of creating new and creative
        things. I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also currently learning TypeScript and Prisma. I am always eager
        to acquire new technologies. I am currently searching for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        participating in sports, watching movies, and spending time with my
        family. I also have a keen interest in{" "}
        <span className="font-medium">learning new things</span> and I am
        currently learning about{" "}
        <span className="font-medium">politics and finances</span>.
      </p>{" "}
    </motion.section>
  );
}
