import type { News } from "@prisma/client";
import type { FC } from "react";
import { IndexNewsContainer } from "src/component/templates/News/IndexNewsContainer";

type Props = {
  newsIndex: News[];
};

export const NewsIndex: FC<Props> = (props) => {
  const { newsIndex } = props;
  return (
    <div>
      <IndexNewsContainer newsIndex={newsIndex} />
    </div>
  );
};
