import React from "react";
import useProducts from "@/hooks/useProducts";

export default function AdminCRUD() {
  const { createProduct, getProducts, loading } = useProducts();
  const imgsData = {
    imgs: [
      "https://i.imgur.com/STBuVOd.jpg",
      "https://i.imgur.com/Fl61KHk.jpg",
      "https://i.imgur.com/SBbHkhJ.jpg",
      "https://i.imgur.com/3qaa8zh.jpg",
      "https://i.imgur.com/DDYBTPr.jpg",
      "https://i.imgur.com/YV9uxyy.jpg",
      "https://i.imgur.com/FaLtuOA.jpg",
      "https://i.imgur.com/mEdxiQH.jpg",
    ],
    detail: `At "濱登久" (Hamatoku), the Ozashiki experience unfolds as a living testament to Kyoto's cultural opulence. This refined tradition stands as one of Japan's most elevated forms of entertainment and hospitality, where the essence of Kyoto is personified through the grace and artistry of Maiko-san and Geiko-san.  Within the intimate setting of the Ozashiki, guests are transported into a world where every detail reflects the city's rich heritage. The air is filled with the gentle melodies of traditional instruments, setting the stage for an enchanting evening. The Maiko-san and Geiko-san, adorned in exquisite kimonos, captivate the audience with their intricate dance, evoking the elegance of Kyoto's traditional arts.  As the evening progresses, the Ozashiki becomes a canvas for the delicate interplay of conversation and performance. Guests are treated not only to a feast for the senses but also to the warmth of Kyoto's renowned hospitality. Each gesture, each note, and every carefully prepared dish contribute to an immersive experience that transcends time, encapsulating the essence of Kyoto's cultural richness within the sacred space of the Ozashiki.`,
    specifications: {
      dimensions: "2-3 hrs",
      materials: "Kaiseki meal",
      shipping_info: "NA",
      care: "Formal attire",
    },
    title: ["Kyoto Ozashiki", "Hamatoku"],
  };
  return (
    <div className="relative flex min-h-[50vh] flex-col bg-bakoW text-bakoB">
      <div className="m-10 flex w-full flex-col justify-start gap-4">
        <button
          className="w-32 rounded-lg bg-off p-4 text-base text-bakoW"
          onClick={() => getProducts()}
        >
          check
        </button>
        <button
          disabled={true}
          className="w-32 rounded-lg bg-off p-4 text-base text-bakoW opacity-10"
          onClick={() =>
            createProduct(
              JSON.stringify(imgsData.title),
              imgsData.detail,
              JSON.stringify(imgsData.specifications),
              JSON.stringify(imgsData.imgs),
              100,
            )
          }
        >
          {loading ? "loading" : "create"}
        </button>
      </div>
      {/* <div className="grid grid-cols-2 gap-x-[10px] gap-y-4 p-4 transition-all sm:grid-cols-3 md:grid-cols-3 lg:gap-x-4 lg:gap-y-10 lg:px-14 lg:py-16 2xl:grid-cols-4">
        {goods.map((good: Good, i) => (
          <GoodRow key={i} data={good} />
        ))}
      </div> */}
    </div>
  );
}
