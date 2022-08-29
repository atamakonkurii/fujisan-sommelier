// import type { News } from "@prisma/client";
import type { CustomNextPage } from "next";
// import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
// import { NewsIndex } from "src/pages/news";

// type Props = {
//   news: News[];
// };

// const NewsPage: CustomNextPage<Props> = (props) => {
//   const { news } = props;
//   return <NewsIndex newsIndex={news} />;
// };

const NewsPage: CustomNextPage = () => {
  return <div>aaa</div>;
};

NewsPage.getLayout = StandardLayout;

export default NewsPage;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`${process.env.WEBAPP_URL}/api/news`);
//   const news = await res.json();

//   if (res.status !== 200) {
//     console.error(news);
//     throw new Error("Failed to fetch API");
//   }

//   return {
//     props: {
//       news,
//     },
//     revalidate: 100,
//   };
// };
