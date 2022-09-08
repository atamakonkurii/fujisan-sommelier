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
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = {
  newPosts: Post[];
};

export const NewPosts: FC<Props> = (props) => {
  const { newPosts } = props;
  return (
    <div>
      <div className="mb-3 text-3xl font-bold">New</div>
      {newPosts.map((post) => {
        return (
          <div key={post.id}>
            <PostCard
              id={post.id}
              postPhotoUrl={post.photoUrl || BasePhotoUrlForPostCard}
              content={post.content || BaseContentForPostCard}
              favoriteCount={BaseFavoriteCountForPostCard}
              publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
              date={
                rawDateToYearMonthDay(String(post.publishedAt)) ||
                BaseDateForPostCard
              }
            />
            <div className="mt-4"></div>
          </div>
        );
      })}
    </div>
  );
};
