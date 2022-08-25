import type { FC } from "react";
import { PostShowPage } from "src/component/templates/PostShowPage";
import type { PostShowPageType } from "src/type/types";

export const ShowPosts: FC<PostShowPageType> = (post) => {
  return (
    <div>
      <PostShowPage {...post} />
    </div>
  );
};
