import type { News } from "@prisma/client";
import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = {
  newsIndex: News[];
};

export const IndexNewsContainer: FC<Props> = (props) => {
  const { newsIndex } = props;
  return (
    <div className="container py-16 mx-auto w-11/12 max-w-lg">
      <div className="flex justify-center text-3xl font-bold">お知らせ</div>
      <div className="mt-8 divide-y divide-slate-300">
        {newsIndex.map((news) => {
          return (
            <div key={news.id} className="flex items-center px-3 h-20">
              <NewsElement
                id={Number(news.id)}
                date={rawDateToYearMonthDay(String(news.publishedAt))}
                typeOfNews={news.typeOfNews}
                title={news.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
