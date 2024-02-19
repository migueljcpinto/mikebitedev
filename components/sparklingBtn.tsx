import { stagger, useAnimate, animate } from "framer-motion";
import React from "react";

type AnimationSequence = Parameters<typeof animate>[0];

function SparklingBtn() {
  const [scope, animate] = useAnimate();
  const textBtn = ["D", "o", "w", "n", "l", "o", "a", "d", "C", "V"];

  function randomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function onButtonClick() {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -24 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  }

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="relative rounded-full border-2 bg-white px-7 py-4 text-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 "
      >
        <a href="/CV.pdf" download>
          <span className="sr-only">Download CV</span>
          <span
            className="flex justify-center items-center h-6 overflow-hidden"
            aria-hidden
          >
            {textBtn.map((letter, index) => (
              <span
                data-letter={letter}
                className="letter relative inline-block h-6 leading-6 after:absolute after:left-0 after:top-full after:h-6 after:content-[attr(data-letter)]"
                key={`${letter}-${index}`}
              >
                {letter}
                {index === 7 && <span>&nbsp;</span>}
              </span>
            ))}
          </span>
          <span className="aria-hidden absolute inset-0 block pointer-events-none z-10">
            {Array.from({ length: 20 }).map((_, index) => (
              <svg
                className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index} text-yellow-500`}
                key={index}
                viewBox="0 0 122 117"
                width="10"
                height="10"
              >
                <path
                  fill="currentColor"
                  d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                />
              </svg>
            ))}
          </span>
        </a>
      </button>
    </div>
  );
}

export default SparklingBtn;
