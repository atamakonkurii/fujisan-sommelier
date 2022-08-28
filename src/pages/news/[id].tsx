import type { News } from "@prisma/client";
import type { FC } from "react";
import { ShowNewsContainer } from "src/component/templates/News/ShowNewsContainer";

type Props = {
  news: News;
};

export const ShowNews: FC<Props> = (props) => {
  const { news } = props;
  return (
    <div>
      <ShowNewsContainer news={news} />
    </div>
  );
};
