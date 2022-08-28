import type { News } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = {
  news: News;
};

export const LpNews: FC<Props> = (props) => {
  const { news } = props;
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="hover:opacity-50">
        <NewsElement
          id={news.id}
          date={rawDateToYearMonthDay(String(news.publishedAt))}
          typeOfNews={news.typeOfNews}
          title={news.title}
        />
      </div>
      <div className="flex justify-center mt-4 hover:opacity-50">
        <Link href="/news">
          <a className="text-sm text-blue-600 underline underline-offset-1">
            過去のお知らせ
          </a>
        </Link>
      </div>
    </div>
  );
};
