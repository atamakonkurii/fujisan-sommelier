import type { Post } from "@prisma/client";
import type { FC } from "react";
import { PostCard } from "src/component/molecules/PostCard";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";

type Props = {
  trendPosts: Post[];
};

export const TrendPosts: FC<Props> = (props) => {
  const { trendPosts } = props;
  return (
    <div>
      <div className="mb-3 text-3xl font-bold">Trend</div>
      {trendPosts.map((post) => {
        return (
          <div key={post.id}>
            <PostCard
              id={post.id}
              postPhotoUrl={post.photoUrl || BasePhotoUrlForPostCard}
              content={post.content || BaseContentForPostCard}
              favoriteCount={BaseFavoriteCountForPostCard}
              publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
              date={BaseDateForPostCard}
            />
            <div className="mt-4"></div>
          </div>
        );
      })}
    </div>
  );
};
