import type { News } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";
import { NewsType } from "src/component/atoms/Text/NewsType";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = {
  news: News;
};

export const ShowNewsContainer: FC<Props> = (props) => {
  const { news } = props;
  return (
    <div className="container my-16 mx-auto w-11/12 max-w-lg">
      <Link href="/news">
        <a className="text-slate-500 hover:opacity-50">👈お知らせ一覧に戻る</a>
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{news.title}</h1>
      <div className="mt-4 text-slate-500">
        {rawDateToYearMonthDay(String(news.publishedAt))}
      </div>
      <div className="mt-2">
        <NewsType typeOfNews={news.typeOfNews} />
      </div>

      <div className="mt-6 leading-loose whitespace-pre-line">
        {news.content}
      </div>
    </div>
  );
};
