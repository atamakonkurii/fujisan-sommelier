import type { CustomNextPage, GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = (posts) => {
  console.warn(posts);
  return <Index />;
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.WEBAPP_URL}/api/posts`);
  const posts = await res.json();

  if (res.status !== 200) {
    console.error(posts);
    throw new Error("Failed to fetch API");
  }

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
