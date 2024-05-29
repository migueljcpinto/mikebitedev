import { Props } from "@/lib/types";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typewriter({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Web Developer Rookie",
      "Frontend Artisan in Training",
      "<NurseTurnedDev />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <span className="text-3xl font-bold">{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
}
