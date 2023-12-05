import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const imgInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const accessCode = "e11a422b6eca5500f01f94ce0ba11f3fcf2dbe18";
  const clientId = "a062881f67af8b9";
  const imgur = axios.create({
    headers: {
      Authorization: `Bearer ${accessCode}`,
      // Authorization: `Client-ID ${clientId}`,
    },
  });
  const handleImageChange = async (e: any) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result;
      setImage(base64Image as string);
    };
    reader.readAsDataURL(imageFile);
  };
  // const getImages = async () => {
  //   try {
  //     const res = await imgur.get("https://api.imgur.com/3/image/thTPO1t");
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const uploadImages = async () => {
    const data = new FormData();
    data.append("image", image?.slice(23) as string);
    // data.append("album", "0mn4os7");
    // console.log("uploading", imgur);
    try {
      const res = await imgur.post("https://api.imgur.com/3/upload", data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-dampWashi">
      <div
        className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex hover:cursor-pointer"
        onClick={() => uploadImages()}
      >
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Test
        </p>
      </div>
      <form
        className="flex h-[500px] w-full cursor-pointer items-center justify-center bg-off"
        onClick={() => imgInputRef.current?.click()}
      >
        <input
          className=".input-img"
          ref={imgInputRef}
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          placeholder="ADD IMAGE"
          hidden
        />
        {image ? (
          <img
            className="max-h-full max-w-full object-cover"
            src={image}
            alt="preview"
          />
        ) : (
          <a className="text-xl uppercase tracking-widest text-washi">
            add image
          </a>
        )}
      </form>
    </main>
  );
}
