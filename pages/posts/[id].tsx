import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ShowPosts } from "src/pages/posts/[id]";

export const getStaticPaths = async () => {
  // eslint-disable-next-line arrow-body-style
  const paths = [`/posts/dummy`];
  return { paths, fallback: false };
};

const ShowPostsPage: CustomNextPage = (post) => {
  return <ShowPosts {...post} />;
};

ShowPostsPage.getLayout = StandardLayout;

export default ShowPostsPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.WEBAPP_URL}/api/posts/dummy`);
  const post = await res.json();
  return {
    props: post,
  };
};
