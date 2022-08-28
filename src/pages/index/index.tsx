import type { Post } from "@prisma/client";
import type { FC } from "react";
import { LandingPage } from "src/component/templates/LandingPage";
import type { LandingPageNews } from "src/type/types";

type Props = {
  news: LandingPageNews;
  newPosts: Post[];
  trendPosts: Post[];
};

export const Index: FC<Props> = (props) => {
  const { newPosts, news, trendPosts } = props;
  return (
    <div>
      <LandingPage news={news} newPosts={newPosts} trendPosts={trendPosts} />
    </div>
  );
};
