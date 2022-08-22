import type { FC } from "react";
import { LandingPage } from "src/component/templates/LandingPage";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";

const landingPageNews: LandingPageNews = {
  id: "test",
  title: BaseNewsTitle,
  publishedAt: BaseNewsDate,
  categoryName: BaseNewsType,
};

export const Index: FC = () => {
  return (
    <div>
      <LandingPage {...landingPageNews} />
    </div>
  );
};
