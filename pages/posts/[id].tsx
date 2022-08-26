import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ShowPosts } from "src/pages/posts/[id]";
import type { PostShowPageType } from "src/type/types";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const ShowPostsPage: CustomNextPage<PostShowPageType> = (post) => {
  return <ShowPosts {...post} />;
};

ShowPostsPage.getLayout = StandardLayout;

export default ShowPostsPage;

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  const res = await fetch(`${process.env.WEBAPP_URL}/api/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
