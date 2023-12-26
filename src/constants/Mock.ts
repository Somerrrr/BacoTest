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
      "https://i.imgur.com/fnYkJPr.jpg",
      "https://i.imgur.com/ZiYo0NZ.jpg",
      "https://i.imgur.com/xCmPb4v.jpg",
      "https://i.imgur.com/pAYTWUO.jpg",
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
      "https://i.imgur.com/fnYkJPr.jpg",
      "https://i.imgur.com/ZiYo0NZ.jpg",
      "https://i.imgur.com/xCmPb4v.jpg",
      "https://i.imgur.com/pAYTWUO.jpg",
    ],
    product_name: "",
    craftsman_name: "",
    detail: "",
    specifications: {},
  },
  {
    id: 2,
    imgs: [
      "https://i.imgur.com/fnYkJPr.jpg",
      "https://i.imgur.com/ZiYo0NZ.jpg",
      "https://i.imgur.com/xCmPb4v.jpg",
      "https://i.imgur.com/pAYTWUO.jpg",
    ],
    product_name: "",
    craftsman_name: "",
    detail: "",
    specifications: {},
  },
  {
    id: 3,
    imgs: [
      "https://i.imgur.com/fnYkJPr.jpg",
      "https://i.imgur.com/ZiYo0NZ.jpg",
      "https://i.imgur.com/xCmPb4v.jpg",
      "https://i.imgur.com/pAYTWUO.jpg",
    ],
    product_name: "",
    craftsman_name: "",
    detail: "",
    specifications: {},
  },
  {
    id: 4,
    imgs: [
      "https://i.imgur.com/fnYkJPr.jpg",
      "https://i.imgur.com/ZiYo0NZ.jpg",
      "https://i.imgur.com/xCmPb4v.jpg",
      "https://i.imgur.com/pAYTWUO.jpg",
    ],
    product_name: "",
    craftsman_name: "",
    detail: "",
    specifications: {},
  },
  {
    id: 5,
    imgs: [
      "https://i.imgur.com/fnYkJPr.jpg",
      "https://i.imgur.com/ZiYo0NZ.jpg",
      "https://i.imgur.com/xCmPb4v.jpg",
      "https://i.imgur.com/pAYTWUO.jpg",
    ],
    product_name: "",
    craftsman_name: "",
    detail: "",
    specifications: {},
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
