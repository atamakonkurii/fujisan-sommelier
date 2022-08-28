import Link from "next/link";
import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = {
  news: LandingPageNews;
};

export const LpNews: FC<Props> = (props) => {
  const { news } = props;
  const date = rawDateToYearMonthDay(news.publishedAt);
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="hover:opacity-50">
        <NewsElement
          id={news.id}
          date={date || BaseNewsDate}
          typeOfNews={news.categoryName || BaseNewsType}
          title={news.title || BaseNewsTitle}
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
