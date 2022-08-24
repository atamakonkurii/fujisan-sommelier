import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { LpNews } from "src/component/organisms/LandingPage/LpNews";
import { NewPosts } from "src/component/organisms/LandingPage/NewPosts";
import { TopView } from "src/component/organisms/LandingPage/TopView";
import { TrendPosts } from "src/component/organisms/LandingPage/TrendPosts";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div>
      <div>
        <TopView />
      </div>
      <div className="pt-4 pb-2">
        <LpNews {...landingPageNews} />
      </div>
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <div className="flex justify-center p-4 bg-sky-50">
            <TrendPosts />
          </div>
          <div className="flex justify-center p-4 bg-slate-50">
            <NewPosts />
          </div>
        </div>
        <div className="bg-slate-100 lg:w-1/4">
          <div className="flex justify-center py-4">
            <Link href={"https://kazukiohta.com/"}>
              <a>
                <Image
                  src={"/img/ogotte_banner.webp"}
                  width={300}
                  height={250}
                  alt="ogotte"
                ></Image>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
