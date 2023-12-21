import GoodRow from "@/components/Goods/GoodRow";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-bakoW gap-16 py-16 text-bakoB">
      <div className=" text-bakoB h-full w-3/4 justify-center">
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/896821266?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; picture-in-picture"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "50%",
              top: "0",
              transform: "translateX(-50%)",
            }}
            title="BAKO_Intro_2"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 max-w-[60%]">
        <a className="text-2xl leading-[120%] text-center">BAKO Means Box</a>
        <a className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          adipiscing tristique risus nec feugiat in. Hac habitasse platea
          dictumst vestibulum rhoncus est pellentesque. Diam donec adipiscing
          tristique risus nec feugiat in fermentum posuere. Nec tincidunt
          praesent semper feugiat nibh sed. Eget nunc lobortis mattis aliquam.
          Nec feugiat in fermentum posuere. Tempor id eu nisl nunc mi.
          Consectetur adipiscing elit duis tristique sollicitudin. Aliquet nec
          ullamcorper sit amet risus nullam eget.
        </a>
      </div>
      <div className="flex flex-col gap-6 max-w-[60%]">
        <a className="text-2xl leading-[120%] text-center">Our Journey</a>
        <a className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          adipiscing tristique risus nec feugiat in. Hac habitasse platea
          dictumst vestibulum rhoncus est pellentesque. Diam donec adipiscing
          tristique risus nec feugiat in fermentum posuere. Nec tincidunt
          praesent semper feugiat nibh sed. Eget nunc lobortis mattis aliquam.
          Nec feugiat in fermentum posuere. Tempor id eu nisl nunc mi.
          Consectetur adipiscing elit duis tristique sollicitudin. Aliquet nec
          ullamcorper sit amet risus nullam eget.
        </a>
      </div>
    </div>
  );
}
