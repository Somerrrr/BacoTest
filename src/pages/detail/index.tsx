import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const accessCode = process.env.NEXT_PUBLIC_IMGUR_ACCESS ?? "";
const clientId = process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID ?? "";

export const imgur = axios.create({
  headers: {
    Authorization: `Bearer ${accessCode}`,
    // Authorization: `Client-ID ${clientId}`,
  },
});
export default function Detail() {
  const imgInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>();
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const handleImageChange = async (e: any) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    if (imageFile) {
      setImage(imageFile);
      reader.onload = async () => {
        const base64Image = reader.result;
        setImageBase64(base64Image as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImage(null);
      setImageBase64(null);
    }
  };
  const getImages = async () => {
    try {
      const res = await imgur.get("https://api.imgur.com/3/image/ZRxpnLr");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  // https://i.imgur.com/ZRxpnLr.png

  const uploadImages = async () => {
    const data = new FormData();
    data.append("image", image);
    data.append("album", "0mn4os7");
    try {
      const res = await imgur.post("https://api.imgur.com/3/upload", data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="bg-dampWashi flex min-h-screen flex-col items-center justify-between p-12">
      <div
        className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm hover:cursor-pointer lg:flex"
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
            src={imageBase64 as string}
            alt="preview"
          />
        ) : (
          <a className="text-washi text-xl uppercase tracking-widest">
            add image
          </a>
        )}
      </form>
    </main>
  );
}
