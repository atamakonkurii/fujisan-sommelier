import type { FC } from "react";
import { PostNew } from "src/component/organisms/PostNew";

export const PostNewPage: FC = () => {
  return (
    <div className="flex justify-center py-10 px-2 bg-sky-50">
      <PostNew />
    </div>
  );
};
