import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundCircles from "./background-circles";

function ProfilePhoto() {
  return (
    <div className="flex items-center justify-center py-10">
      <BackgroundCircles>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/Profileimage.png"
            alt="Miguel Portrait"
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] shadow-xl "
          />
        </motion.div>
      </BackgroundCircles>
    </div>
  );
}

export default ProfilePhoto;
