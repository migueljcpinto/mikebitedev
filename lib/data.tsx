import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import teamupImg from "@/public/teamup.png";
import popcornImg from "@/public/popcorn.png";
import mikemapsImg from "@/public/mikemaps.png";
import lensaiImg from "@/public/lensai.png";
import aicandidatoImg from "@/public/aicandidato.png";
import bookmarkifyImg from "@/public/bookmarkify.png";

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
        I settled in Frankfurt in 2012, working as a nurse for three years,
        gaining experience across various departments. <br />
        Then, in 2015, I moved to Munich where I continued my career as an
        intensive care nurse, further accumulating diverse experiences in the
        field.{" "}
      </>
    ),
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2024",
  },
  {
    title: "Self-Learning",
    location: "Online",
    description: (
      <>
        I embarked on a journey of self-learning through online courses and
        workshops, initiating myself into web development and technology.
      </>
    ),
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Ongoing",
  },
  {
    title: "Web Development Bootcamp",
    location: "Munich, Germany",
    description:
      "I graduated after 6 months of intense studying. My stack includes React, Next.js, JavaScript and MongoDB. I'm currently learning TypeScript and SQL, and I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "CS50x - Introduction to Computer Science",
    location: "Remote, Harvard University",
    description:
      "I completed the Introduction to Computer Science course, where I was able to learn and understand basic computer science concepts, such as C, Algorithms, SQL, Python, Flask, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Internship Full Stack Developer",
    location: "Remote, Vennie",
    description: (
      <>
        I have the opportunity to learn and work on the development of a B2B
        SaaS project with AI using ReactJS/Typescript, Python and FastAPI.
      </>
    ),
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
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
    title: "MikeMaps",
    description:
      "A GoogleMaps-like application in which you can save locations. Following Jonas Schmedtmann's React course on Udemy. ",
    tags: ["React", "React Router", "context API", "Local Storage"],
    imageUrl: mikemapsImg,
    website: "https://mike-maps.vercel.app/",
  },
  {
    title: "Team'Up",
    description:
      "Team'Up is a Nurse Scheduling Application conceptualized as a capstone project for my Web Development Bootcamp.",
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
  {
    title: "AI Candidato",
    description:
      "AI Candidato is a platform where you can chat to various Chatbots representing candidates for Portugal's legislative elections.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "OpenAI API",
      "PlanetScale",
      "Pinecone",
    ],
    imageUrl: aicandidatoImg,
    website: "https://ai-candidato.vercel.app/",
  },
  {
    title: "Lens AI",
    description:
      "With LensAI we can modify and alter images using Cloudinary's artificial intelligence.",
    tags: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Clerk",
      "Cloudinary AI",
      "Vercel",
    ],
    imageUrl: lensaiImg,
    website: "https://lensai.vercel.app/",
  },
  {
    title: "Bookmarkify",
    description:
      "A Chrome Extension that empowers users to bookmark and revisit important moments within YouTube videos, as part of the final project for Harvard's CS50 course.",
    tags: ["Chrome Extension APIs", "YouTube Player API", "JavaScript"],
    imageUrl: bookmarkifyImg,
    website: "https://github.com/migueljcpinto/Bookmarkify",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "React Native",
  "Next.js",
  "NextAuth.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "SQL",
  "MongoDB",
  "Prisma",
  "mongoose",
  "Redux",
  "Framer Motion",
] as const;
