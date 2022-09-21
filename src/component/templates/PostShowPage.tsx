import type { FC } from "react";
import { PostShow } from "src/component/organisms/PostShow";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";
import { useAuth } from "src/context/AuthContext";
import type { PostShowPageType } from "src/type/types";

export const PostShowPage: FC<PostShowPageType> = (post) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { authorId, content, photoUrl, publishedAt } = post.post;
  const { currentUser } = useAuth();

  return (
    <div className=" bg-sky-50">
      {authorId === currentUser?.id ? <div>ログインユーザーの投稿</div> : <></>}
      <div className="flex justify-center py-10 px-2">
        <PostShow
          postPhotoUrl={photoUrl || BasePhotoUrlForPostCard}
          content={content || BaseContentForPostCard}
          favoriteCount={25 || BaseFavoriteCountForPostCard}
          publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
          date={String(publishedAt) || BaseDateForPostCard}
        />
      </div>
    </div>
  );
};
