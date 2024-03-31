import React from "react";
import Image from "next/image";
import BackgroundCircles from "./background-circles";

function ProfilePhoto() {
  return (
    <div className="flex items-center justify-center ">
      <BackgroundCircles>
        <div>
          <Image
            src="/Profileimage.png"
            alt="Miguel Portrait"
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] shadow-xl "
          />
        </div>
      </BackgroundCircles>
    </div>
  );
}

export default ProfilePhoto;
