import type { FC } from "react";
import { PostCard } from "src/component/molecules/PostCard";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";

export const TrendPosts: FC = () => {
  return (
    <div>
      <div className="mb-3 text-3xl font-bold">Trend</div>
      <PostCard
        id={1}
        postPhotoUrl={BasePhotoUrlForPostCard}
        content={BaseContentForPostCard}
        favoriteCount={BaseFavoriteCountForPostCard}
        publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
        date={BaseDateForPostCard}
      />
      <div className="mt-4"></div>
      <PostCard
        id={1}
        postPhotoUrl={BasePhotoUrlForPostCard}
        content={BaseContentForPostCard}
        favoriteCount={BaseFavoriteCountForPostCard}
        publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
        date={BaseDateForPostCard}
      />
    </div>
  );
};
