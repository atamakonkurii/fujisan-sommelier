import type { FC } from "react";
import { PostShow } from "src/component/organisms/PostShow";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";

export const PostShowPage: FC = () => {
  return (
    <div>
      <PostShow
        id={"dummy"}
        postPhotoUrl={BasePhotoUrlForPostCard}
        content={BaseContentForPostCard}
        favoriteCount={BaseFavoriteCountForPostCard}
        publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
        date={BaseDateForPostCard}
      />
    </div>
  );
};
