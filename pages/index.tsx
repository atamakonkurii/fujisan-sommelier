import type { CustomNextPage, GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => {
  return <Index />;
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.WEBAPP_URL}/api/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
