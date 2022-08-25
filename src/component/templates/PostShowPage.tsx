import type { FC } from "react";
import { PostShow } from "src/component/organisms/PostShow";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";
import type { PostShowPageType } from "src/type/types";

export const PostShowPage: FC<PostShowPageType> = (post) => {
  const { content, photoUrl, publishedAt } = post;
  return (
    <div className="flex justify-center py-10 px-2 bg-sky-50">
      <PostShow
        id={1}
        postPhotoUrl={photoUrl || BasePhotoUrlForPostCard}
        content={content || BaseContentForPostCard}
        favoriteCount={25 || BaseFavoriteCountForPostCard}
        publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
        date={String(publishedAt) || BaseDateForPostCard}
      />
    </div>
  );
};
