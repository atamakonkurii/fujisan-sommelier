import type { FC } from "react";
import { PostShowPage } from "src/component/templates/PostShowPage";

export const ShowPosts: FC = (post) => {
  return (
    <div>
      <PostShowPage {...post} />
    </div>
  );
};
