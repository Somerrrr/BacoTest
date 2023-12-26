export interface Good {
  id: number;
  imgs: string[];
  product_name: string;
  craftsman_name: string;
  detail: string;
  specifications: Object;
}
export const goods: Good[] = [
  {
    id: 0,
    imgs: [
      "https://i.imgur.com/3zQpSV6.png",
      "https://i.imgur.com/0MmDkq2.png",
      "https://i.imgur.com/mh7BJvH.png",
      "https://i.imgur.com/PHQGUQ8.png",
      "https://i.imgur.com/2Dq66Oh.png",
      "https://i.imgur.com/CmgHGtV.png",
    ],
    product_name: "Yume Korozome Louvre Collection",
    craftsman_name: "Yusai Okuda",
    detail: `Yusai's masterpiece, titled "夢こうろ染" (Yume Korozome), unveils a mesmerizing dance of dreams and colors. This ethereal artwork, born from the age-old Kyoto tradition of color-dyeing, harnesses the transformative power of Kyoto's pristine waters. Each stroke and hue within the piece captures the essence of seasons, reflecting the delicate harmony between nature and craftsmanship. Exhibited at the Louvre, "Yume Korozome" breathes life into a textile artwork, offering a dynamic spectacle as the colors subtly shift in response to the viewer's gaze and the ambient lighting. The intricate layers of dyeing techniques employed by Yusai evoke a dreamlike quality, where the boundaries between reality and imagination blur. The artwork becomes a living testament to the interplay of tradition and innovation, inviting observers into a realm where the past converges with the future in a seamless fusion of cultural heritage and artistic expression. Yusai's creation, a symphony of Kyoto's water and the artist's mastery, stands as an ode to the boundless possibilities that arise when craftsmanship and dreams intertwine.`,
    specifications: {
      dimensions: `50 x 400m`,
      materials: "Silk and natural dye",
      shipping_info: "Within 6 months",
      care: "Do not place under direct sunlight",
    },
  },
  {
    id: 1,
    imgs: [
      "https://i.imgur.com/LneGYxH.jpg",
      "https://i.imgur.com/BkvZmCe.jpg",
      "https://i.imgur.com/sqJ9NVT.jpg",
      "https://i.imgur.com/nYjULrz.png",
      "https://i.imgur.com/Y6kdu4P.png",
      "https://i.imgur.com/rg4YJV2.png",
    ],
    product_name: "Mugen",
    craftsman_name: "Tenshin Juba",
    detail: `Tenshi Juba's profound artistry unfolds in the form of "無限" (Mugen), a matcha bowl that transcends simplicity to embody the infinite. Composed of three elemental shapes – square, triangle, and circle – Tenshin's creation captures the essence of mugen, seamlessly weaving together the boundless possibilities inherent in the way of tea. These matcha bowls become vessels of contemplation, inviting tea enthusiasts to explore the depth of the ritual beyond the confines of time and space. Renowned not only in Japan but globally, Tenshin's matcha bowls have left an indelible mark from the serene landscapes of Kyoto to the artistic enclave of Venice, California. Crafted with meticulous precision in his studio nestled in the lush mountainous terrain of Kobe, Japan, each piece bears the imprint of the natural beauty that surrounds Tenshin's creative haven. Noteworthy is the fact that these matcha bowls are born from the flames of his personal kiln, a testament to Tenshin's dedication to his craft. These artworks transcend mere utility; they embody the spirit of everyday life and the inherent beauty of the landscapes that inspire Tenshin. In every sip from these matcha bowls, one can taste not only the richness of the tea but also the harmony between art, nature, and the timeless traditions of the way of tea. Tenshin's creations are an immersive journey into the infinite, an artful reminder that beauty is found in simplicity, and the boundless spirit of Mugen awaits discovery within the delicate ritual of tea.`,
    specifications: {
      dimensions: `400ml, 7.5cm x 10.5cm`,
      materials: "Clay",
      shipping_info: "Within 6 months",
      care: "Wash by hand",
    },
  },
  {
    id: 2,
    imgs: [
      "https://i.imgur.com/g4TeJy2.png",
      "https://i.imgur.com/XxiWnrn.png",
      "https://i.imgur.com/tFFvUSZ.png",
      "https://i.imgur.com/UzVl0bV.png",
      "https://i.imgur.com/XJc4Z5x.png",
      "https://i.imgur.com/RnbQFf5.png",
    ],
    product_name: "70s Next Chisoku",
    craftsman_name: "Masato Kataoka",
    detail: `The name "Chisoku" comes from the Zen phrase "I am content with what I know," which means to be aware of one's own contentment and to cherish what one truly likes and finds beautiful, so that one's life will be richer and more fulfilling. The 70next frame that forms the base of "Chisoku" is a redesign by Kataoka of a lug-welded frame bicycle designed in the 70s by his predecessor. This was not simply a nostalgia for the past, but an answer to the question of what kind of frame would be appropriate to express the philosophy and aesthetic sense that we have cultivated here in Japan for generations. The 70next is a beautifully crafted frame with a modern sensibility without any unnecessary part and it is a perfect fit for the Chisoku concept, including the process of handcrafting by craftsmen. The 70next frame, born from a design that maximizes the pleasure of riding while feeling the racer's senses, expresses beauty and the pleasure of looking at it through the design of straight lines and the curves that connect them, and curves in details that do not become noise. We wanted it to be expressed with this in mind. The result is a one-of-a-kind bicycle that truly symbolizes the VIGORE of today.`,
    specifications: {
      dimensions: `S(505mm), M(520mm), L(550mm)`,
      materials: "Metal, lacquer, gold leaf",
      shipping_info: "Within 6 months",
      care: "Handle with care",
    },
  },
  {
    id: 3,
    imgs: [
      "https://i.imgur.com/Rwvv8fa.png",
      "https://i.imgur.com/sdK2SJ1.png",
      "https://i.imgur.com/JJ0fcNL.png",
      "https://i.imgur.com/rKDGakT.png",
      "https://i.imgur.com/49BgPGV.png",
      "https://i.imgur.com/Cp7V9L6.png",
    ],
    product_name: "Yugen Original Blend",
    craftsman_name: "Kyoto Japan",
    detail: `It has a pleasant combination of matcha's natural richness and a subtle hint of bitterness, making it a popular choice for everyday matcha drinks.
    Additionally, it is a usucya(light tea) with a mellow umami and gentle astringency as its distinctive features. Its flavor, enjoyable in any season, has received high praise.
    Furthermore, this blend is ideal as an ingredient for matcha sweets. Its color and fragrance are excellent, earning strong trust from numerous patissiers as a premium matcha sweet ingredient.`,
    specifications: {
      dimensions: `Gokou, Komakage, Yabukita, Saemidori, Okumidori`,
      materials: "first flush tea (high grade)",
      shipping_info: "Within 6 months",
      care: "We recommend storing Japanese green tea in a cool, dark place. Avoid places with high humidity, strong light, and strong odors",
    },
  },
  {
    id: 4,
    imgs: [
      "https://i.imgur.com/RRdHlhc.png",
      "https://i.imgur.com/kqnpGjz.png",
      "https://i.imgur.com/NBlYGz9.png",
      "https://i.imgur.com/g2UeirS.png",
      "https://i.imgur.com/SKsPi3R.png",
      "https://i.imgur.com/rLLaG4B.png",
    ],
    product_name: "Yokoburi Embroidery",
    craftsman_name: "Kiyomi Osawa",
    detail: `After the Second World War, the art of 'Yokofuri Shishu' was born in the embroidery production area of Kiryu. This craftsmanship is still passed down in 'The City of Textiles, Kiryu' to this day. Moving the frame by hand, driving the sewing machine with the foot, determining the swing width with the knee, the embroidery sewn with thread and sensitivity is often referred to as a thread painting. One actively engaged in this field is Kiyomi Osawa, who is still active on the front lines. Her embroidery, known for its dynamic movement, is said to come to life like a moving embroidery painting, earning her recognition from numerous designers for her artistic sensibility and skill.`,
    specifications: {
      dimensions: `30cm x 30cm`,
      materials: "Bat dye, thread",
      shipping_info: "Within 6 months",
      care: "Handle with care",
    },
  },
  {
    id: 5,
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
    product_name: "Kyoto Ozashiki",
    craftsman_name: "Hamatoku",
    detail: `At "濱登久" (Hamatoku), the Ozashiki experience unfolds as a living testament to Kyoto's cultural opulence. This refined tradition stands as one of Japan's most elevated forms of entertainment and hospitality, where the essence of Kyoto is personified through the grace and artistry of Maiko-san and Geiko-san.  Within the intimate setting of the Ozashiki, guests are transported into a world where every detail reflects the city's rich heritage. The air is filled with the gentle melodies of traditional instruments, setting the stage for an enchanting evening. The Maiko-san and Geiko-san, adorned in exquisite kimonos, captivate the audience with their intricate dance, evoking the elegance of Kyoto's traditional arts.  As the evening progresses, the Ozashiki becomes a canvas for the delicate interplay of conversation and performance. Guests are treated not only to a feast for the senses but also to the warmth of Kyoto's renowned hospitality. Each gesture, each note, and every carefully prepared dish contribute to an immersive experience that transcends time, encapsulating the essence of Kyoto's cultural richness within the sacred space of the Ozashiki.`,
    specifications: {
      dimensions: "2-3 hrs",
      materials: "Kaiseki meal",
      shipping_info: "NA",
      care: "Formal attire",
    },
  },
];
export const orders = [
  {
    date: "2021-10-10",
    total: "$10,000",
    address: "19 W Lancaster Ave, Ardmore, PA 19003",
    good_vid: "123r234123",
  },
  {
    date: "2021-10-10",
    total: "$10,000",
    address: "19 W Lancaster Ave, Ardmore, PA 19003",
    good_vid: "123r234123",
  },
];
