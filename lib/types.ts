import { animate } from "framer-motion";
import { links, projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps = (typeof projectsData)[number];

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type AnimationSequence = Parameters<typeof animate>[0];

export type Props = {};

export interface RubberAnimationProps {
  className?: string;
  children: React.ReactNode;
}

export interface BackgroundCirclesProps {
  children?: React.ReactNode;
}
