import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import teamupImg from "@/public/teamup.png";
import popcornImg from "@/public/popcorn.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science in Nursing",
    location: "Coimbra, Portugal",
    description:
      "I graduated in nursing in Portugal, but I had to look for a job abroad.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
  {
    title: "Health Care and Nursing",
    location: "Germany",
    description: (
      <>
        I settled in Frankfurt in 2012, working as a nurse for three years.
        <br />
        Then, in 2015, I moved to Munich where I continued my career as an
        intensive care nurse.
      </>
    ),
    icon: React.createElement(CgWorkAlt),
    date: "2012 - present",
  },
  {
    title: "Frontend Bootcamp",
    location: "Munich, Germany",
    description:
      "I graduated after 6 months of intense studying. My stack includes React, Next.js, JavaScript, and MongoDB. I'm currently learning TypeScript and SQL, and I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PopCorn",
    description:
      "PopCorn is a movie app using OMDB API, allowing users to search, view, and curate watched movies with a IMDB-inspired UI.",
    tags: ["React", "JavaScript", "Next.js", "Styled-Components", "Vercel"],
    imageUrl: popcornImg,
    website: "https://pop-corn-ecru.vercel.app/",
  },
  {
    title: "Team'Up",
    description:
      "Team'Up is a Nurse Scheduling Application conceptualized as a capstone project for a Web Development Bootcamp.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Styled-Component",
      "NextAuth.js",
      "Vercel",
    ],
    imageUrl: teamupImg,
    website: "https://capstone-project-teamup.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "NextAuth.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "mongoose",
  "Redux",
  "Framer Motion",
] as const;
