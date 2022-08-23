import type { FC } from "react";
import { LpNews } from "src/component/organisms/LandingPage/LpNews";
import { NewPosts } from "src/component/organisms/LandingPage/NewPosts";
import { TopView } from "src/component/organisms/LandingPage/TopView";
import { TrendPosts } from "src/component/organisms/LandingPage/TrendPosts";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const PostShowPage: FC<Props> = (props) => {
  const PostShowPageNews = props;
  return (
    <div>
      <div>
        <TopView />
      </div>
      <div className="pt-4 pb-2">
        <LpNews {...PostShowPageNews} />
      </div>
      <div className="p-4 bg-sky-50">
        <TrendPosts />
      </div>
      <div className="p-4 bg-slate-50">
        <NewPosts />
      </div>
    </div>
  );
};
