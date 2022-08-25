import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ShowPosts } from "src/pages/posts/[id]";
import type { PostShowPageType } from "src/type/types";

export const getStaticPaths = async () => {
  const paths: string[] = [];
  return { paths, fallback: false };
};

const ShowPostsPage: CustomNextPage<PostShowPageType> = (post) => {
  return <ShowPosts {...post} />;
};

ShowPostsPage.getLayout = StandardLayout;

export default ShowPostsPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.WEBAPP_URL}/api/posts/1`);
  const post = await res.json();
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
