import type { FC } from "react";
import { LpNews } from "src/component/organisms/LandingPage/LpNews";
import { TopView } from "src/component/organisms/LandingPage/TopView";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div>
      <div>
        <TopView />
      </div>
      <div className="pt-8">
        <LpNews {...landingPageNews} />
      </div>
    </div>
  );
};
