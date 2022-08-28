import type { News, Post } from "@prisma/client";
import type { CustomNextPage, GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Index } from "src/pages/index";

type Props = {
  news: News;
  newPosts: Post[];
  trendPosts: Post[];
};

const IndexPage: CustomNextPage<Props> = (props) => {
  const { newPosts, news, trendPosts } = props;
  return <Index news={news} newPosts={newPosts} trendPosts={trendPosts} />;
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const resNews = await fetch(`${process.env.WEBAPP_URL}/api/posts/new`);
  const news = await resNews.json();

  if (resNews.status !== 200) {
    console.error(news);
    throw new Error("Failed to fetch API");
  }

  const resNewPosts = await fetch(`${process.env.WEBAPP_URL}/api/posts/new`);
  const newPosts = await resNewPosts.json();

  if (resNewPosts.status !== 200) {
    console.error(newPosts);
    throw new Error("Failed to fetch API");
  }

  const resTrendPosts = await fetch(
    `${process.env.WEBAPP_URL}/api/posts/trend`
  );
  const trendPosts = await resTrendPosts.json();

  if (resTrendPosts.status !== 200) {
    console.error(trendPosts);
    throw new Error("Failed to fetch API");
  }

  return {
    props: {
      news,
      newPosts,
      trendPosts,
    },
    revalidate: 100,
  };
};
