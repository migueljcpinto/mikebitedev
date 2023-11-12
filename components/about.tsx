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
      <p className="mb-3 text-left">
        After obtaining my degree in
        <span className="font-medium"> Nursing</span>, I chose to delve into my
        enthusiasm for programming. I joined a coding bootcamp at{" "}
        <a
          href="https://www.neuefische.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-medium text-orange-400	">
            Neuefische School{" "}
          </span>
        </a>{" "}
        , where I acquired skills in
        <span className="font-medium"> front-end web development</span>.{" "}
        <span className="italic">What I relish most about programming</span> is
        the challenge of problem-solving and the thrill of crafting innovative
        solutions. I <span className="font-semibold text-red-600">love</span>{" "}
        the feeling of finally figuring out a solution to a problem. My primary
        skills lies in{" "}
        <span className="font-medium">React, Next.js, Node.js, </span> and{" "}
        <span className="font-medium">MongoDB</span>.
      </p>
      <p className="mb-3 text-left">
        {" "}
        Additionally, I've been brushing up on{" "}
        <span className="bg-blue-400 text-white px-2 py-1 rounded">
          {" "}
          Typescript
        </span>{" "}
        and web design principles and familiarizing myself with design tools
        such as <span className="text-figma-red font-extrabold">F</span>
        <span className="text-figma-orange font-extrabold">i</span>
        <span className="text-figma-violet font-extrabold">g</span>
        <span className="text-figma-blue font-extrabold">m</span>
        <span className="text-figma-green font-extrabold">a</span>. The synergy
        between design and development intrigues me, making projects not only
        functional but also visually appealing.
      </p>
      <p className="mb-3 text-left">
        Always open to integrating into training programs, I'm consistently
        seeking to explore new technologies. Presently, I'm actively seeking a{" "}
        <span className="font-medium">full-time role</span> as a software
        developer.
      </p>{" "}
      <p className="mb-3 text-left">
        Beyond the world of coding,{" "}
        <span className="italic"> my background in Nursing</span> offers a
        unique lens, especially in health-tech projects, bridging the gap
        between medical professionals and tech developers. In my leisure time, I
        embrace a love for physical activity, be it through running, swimming,
        or pushing my limits in crossfit. I'm also an ardent movie buff and
        treasure the time spent with my family. A fervent believer in{" "}
        <span className="font-medium">lifelong learning</span>, my weekends
        often involve attending workshops or online courses. My readings are
        currently steered towards{" "}
        <span className="font-medium">
          {" "}
          politics, finance, and the nuances of global tech shifts
        </span>
        .
      </p>{" "}
    </motion.section>
  );
}
