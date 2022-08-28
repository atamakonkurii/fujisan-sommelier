import type { News } from "@prisma/client";
import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ShowNews } from "src/pages/news/[id]";

type Props = {
  news: News;
};

const ShowNewsPage: CustomNextPage<Props> = (props) => {
  const { news } = props;
  return <ShowNews news={news} />;
};

ShowNewsPage.getLayout = StandardLayout;

export default ShowNewsPage;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`${process.env.WEBAPP_URL}/api/news/${id}`);
  const news = await res.json();
  return {
    props: {
      news,
    },
    revalidate: 100,
  };
};
