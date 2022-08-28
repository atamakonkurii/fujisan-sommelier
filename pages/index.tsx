import type { Post } from "@prisma/client";
import type { CustomNextPage, GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import { Index } from "src/pages/index";
import type { LandingPageNews } from "src/type/types";

const landingPageNews: LandingPageNews = {
  id: 1,
  title: BaseNewsTitle,
  publishedAt: BaseNewsDate,
  categoryName: BaseNewsType,
};

type Props = {
  newPosts: Post[];
  trendPosts: Post[];
};

const IndexPage: CustomNextPage<Props> = (props) => {
  console.warn(props);
  const { newPosts, trendPosts } = props;
  return (
    <Index news={landingPageNews} newPosts={newPosts} trendPosts={trendPosts} />
  );
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
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
      newPosts,
      trendPosts,
    },
    revalidate: 100,
  };
};
