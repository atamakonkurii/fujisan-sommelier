import { Button } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
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

const deletePost = () => {
  console.warn("Confirmed");
};

const openDeletePostModal = () => {
  openConfirmModal({
    title: "投稿を削除しますか？",
    centered: true,
    children: (
      <div className="text-sm">
        投稿が削除されると、元に戻すことはできません。
      </div>
    ),
    labels: { confirm: "削除する", cancel: "キャンセル" },
    confirmProps: { color: "red" },
    onConfirm: () => {
      deletePost();
    },
  });
};

export const PostShowPage: FC<PostShowPageType> = (post) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { authorId, content, photoUrl, publishedAt } = post.post;
  const { currentUser } = useAuth();

  return (
    <div className=" bg-sky-50">
      <div className="flex justify-center py-10 px-2">
        <PostShow
          postPhotoUrl={photoUrl || BasePhotoUrlForPostCard}
          content={content || BaseContentForPostCard}
          favoriteCount={25 || BaseFavoriteCountForPostCard}
          publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
          date={String(publishedAt) || BaseDateForPostCard}
        />
      </div>

      {authorId === currentUser?.id ? (
        <div className="flex justify-center pb-10">
          <Button color="red" onClick={openDeletePostModal}>
            削除
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
