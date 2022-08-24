import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ShowPosts } from "src/pages/posts/[id]";

export const getStaticPaths = async () => {
  // eslint-disable-next-line arrow-body-style
  const paths = [`/posts/dummy`];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const ShowPostsPage: CustomNextPage = () => {
  return <ShowPosts />;
};

ShowPostsPage.getLayout = StandardLayout;

export default ShowPostsPage;
