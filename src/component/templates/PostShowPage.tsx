import type { Post } from "@prisma/client";
import type { FC } from "react";
import { PostShow } from "src/component/organisms/PostShow";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";

export const PostShowPage: FC<Post> = (post) => {
  const { content, photoUrl, publishedAt } = post;
  return (
    <div className="flex justify-center py-10 px-2 bg-sky-50">
      <PostShow
        id={"dummy"}
        postPhotoUrl={photoUrl || BasePhotoUrlForPostCard}
        content={content || BaseContentForPostCard}
        favoriteCount={25 || BaseFavoriteCountForPostCard}
        publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
        date={String(publishedAt) || BaseDateForPostCard}
      />
    </div>
  );
};
