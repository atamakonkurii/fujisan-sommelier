import type { News, Post } from "@prisma/client";
import type { FC } from "react";
import { LandingPage } from "src/component/templates/LandingPage";

type Props = {
  news: News;
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
