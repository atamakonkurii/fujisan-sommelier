import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ShowPosts } from "src/pages/posts/[id]";
import type { PostShowPageType } from "src/type/types";

const ShowPostsPage: CustomNextPage<PostShowPageType> = (post) => {
  return <ShowPosts {...post} />;
};

ShowPostsPage.getLayout = StandardLayout;

export default ShowPostsPage;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`${process.env.WEBAPP_URL}/api/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
    revalidate: 100,
  };
};
