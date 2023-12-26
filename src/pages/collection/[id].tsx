import { useContext, useEffect, useState } from "react";
import { BacoContext } from "@/components/BacoProvider";
import { useRouter } from "next/router";
import Image from "next/image";
import yt from "@/assets/ICONS/footer_yt.svg";
import ig from "@/assets/ICONS/footer_ig.svg";
import { imgur } from "../detail";
import { Good, goods } from "@/constants/Mock";
import { ytLink } from "@/constants/socialLink";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const data = goods[params.id];

  return {
    props: {
      StaticData: data,
    },
  };
}
interface Props {
  StaticData: Good;
}

const DynamicPage = ({ StaticData }: Props) => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const { id } = router.query;
  const { goPage } = useContext(BacoContext);
  const [imgIndex, setImgIndex] = useState(0);
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  const stringFormat = (str: string) => {
    return str
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
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
      <div className="hidden w-[57.14%] gap-6 lg:flex">
        <div className="flex flex-col gap-4">
          {StaticData?.imgs?.map((img: any, index: number) => (
            <Image
              onClick={() => setImgIndex(index)}
              key={index}
              src={img}
              alt="pic1"
              width={200}
              height={200}
              className={`${
                index === imgIndex ? "border-bakoB" : "border-bakoB/20"
              } h-[68px] w-[68px] border-2 object-cover`}
            />
          ))}
        </div>
        <div className="h-[572px] w-full min-w-[320px] bg-[#C5C6C7]">
          <Image
            src={StaticData?.imgs[imgIndex]}
            alt="pic1"
            width={1000}
            height={1000}
            className="h-full w-full object-contain transition-all hover:object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-col lg:hidden">
        <div className="h-[358px] w-full min-w-[174px] bg-[#C5C6C7] lg:h-[572px] lg:min-w-[320px]">
          <Image
            src={StaticData?.imgs[imgIndex]}
            alt="pic1"
            width={1000}
            height={1000}
            onClick={() => setClick(!click)}
            className={`h-full w-full ${
              click ? "object-cover" : "object-contain"
            } transition-all`}
          />
        </div>
        <div>arrow</div>
      </div>
      <div className="lg:w-[35.7%]">
        <div className="flex w-full flex-col gap-2 border-b border-bakoB/20 pb-8 leading-[140%]">
          <a className="text-2xl">{StaticData?.product_name}</a>
          <a>{StaticData?.craftsman_name}</a>
        </div>
        <div className="flex w-full flex-col gap-4 border-b border-bakoB/20 py-8 text-sm leading-[140%] lg:text-base">
          <a className="">{StaticData?.detail}</a>
          <div>
            Please take a listen to{" "}
            <a className="font-bold">{StaticData?.craftsman_name}</a> talk about
            :{/* [podcast highlight]: */}
          </div>
          <div className="flex items-start gap-4">
            <Image
              src={yt}
              alt="Instagram"
              className="h-6 w-6 lg:h-8 lg:w-8"
              onClick={ytLink ? () => openLink(ytLink) : () => {}}
            />
            {/* <Image src={ig} alt="Instagram" className="h-6 w-6 lg:h-8 lg:w-8" /> */}
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 py-8 leading-[140%]">
          {Object.entries(StaticData?.specifications || {}).map(
            ([key, value]) => (
              <div key={key} className="flex gap-1 text-sm lg:text-base">
                <a className="font-bold">{stringFormat(key)}:</a>
                <a>{value as any}</a>
              </div>
            ),
          )}
        </div>
        <button
          className="h-[60px] w-full rounded-full bg-bakoB font-bold uppercase leading-[140%] tracking-[6.4px] text-bakoW"
          onClick={() => goPage("/collection/inquire")}
        >
          inquire
        </button>
      </div>
    </div>
  );
};

export default DynamicPage;
