import { useRouter } from "next/router";
import yt from "@/assets/ICONS/footer_yt.svg";
import ig from "@/assets/ICONS/footer_ig.svg";
import Image from "next/image";
import { useEffect } from "react";
import { imgur } from "../detail";
// export async function getStaticPaths() {
//   // 返回所有可能的動態路徑
//   return {
//     paths: [
//       { params: { id: "0" } },
//       { params: { id: "1" } },
//       // ...
//     ],
//     fallback: false, // or true if you want to enable incremental static regeneration
//   };
// }

// export async function getStaticProps({ params }: any) {
//   // 使用 params.id 從數據源獲取數據
//   //   const data = fetchData(params.id);

//   return {
//     props: {
//       data: params.id,
//     },
//   };
// }

const DynamicPage = ({ data }: any) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query.id);
  //   console.log("data:", data);
  const mock = {
    date: "2021-10-10",
    item: "Product Name",
    product_name: "Product Name",
    craftsman_name: "Craftsman Name",
    total: "$10,000",
    address: "19 W Lancaster Ave, Ardmore, PA 19003",
    action: "action",
    detail:
      "At the heart of every bike is a frame meticulously welded and finished by hand, ensuring not only an unparalleled aesthetic but also exceptional strength and durability. The choice of materials is a testament to our commitment to quality, featuring premium-grade steel or aluminum, complemented by elegant wooden accents that echo the bike's artisanal roots.",
  };
  const goodsDimensions = {
    Dimensions: "47.5 x 23.5 x 8.5 cm",
    Material: "carbon fiber",
    Shipping_info: "typically ships in 2-3 days",
    Care: "wash with water",
  };
  const getImages = async () => {
    try {
      const res = await imgur.get("https://api.imgur.com/3/image/ZRxpnLr");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="flex flex-col items-start bg-bakoW p-4 pb-16 lg:flex-row lg:justify-between lg:px-[10%] lg:py-20">
      {/* <p className="text-black">id: {router.query.id}</p> */}
      <div className="hidden w-[57.14%] gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          <Image
            src="https://i.imgur.com/ZRxpnLr.png"
            alt="pic1"
            width={320}
            height={320}
            className="h-[68px] w-[68px]"
          />
        </div>
        <div className="h-[572px]  w-full min-w-[320px] bg-[#C5C6C7]"></div>
      </div>
      <div className="flex w-full flex-col lg:hidden">
        <div className="h-[358px] w-full min-w-[174px] bg-[#C5C6C7] lg:h-[572px] lg:min-w-[320px]"></div>
        <div>arrow</div>
      </div>
      <div className="lg:w-[35.7%]">
        <div className="flex w-full flex-col gap-2 border-b border-bakoB/20 pb-8 leading-[140%]">
          <a className="text-2xl">{mock.product_name}</a>
          <a>{mock.craftsman_name}</a>
        </div>
        <div className="flex w-full flex-col gap-4 border-b border-bakoB/20 py-8 text-sm leading-[140%] lg:text-base">
          <a className="">{mock.detail}</a>
          <a>
            Please take a listen to [Craftsman Name] talk about [podcast
            highlight]:
          </a>
          <div className="flex items-start gap-4">
            <Image src={yt} alt="Instagram" className="h-6 w-6 lg:h-8 lg:w-8" />
            <Image src={ig} alt="Instagram" className="h-6 w-6 lg:h-8 lg:w-8" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 py-8 leading-[140%]">
          {Object.entries(goodsDimensions).map(([key, value]) => (
            <div key={key} className="flex gap-1 text-sm lg:text-base">
              <a className="font-bold">{key}:</a>
              <a>{value}</a>
            </div>
          ))}
        </div>
        <button className="h-[60px] w-full rounded-full bg-bakoB font-bold uppercase leading-[140%] tracking-[6.4px] text-bakoW">
          inquire
        </button>
      </div>
    </div>
  );
};

export default DynamicPage;
