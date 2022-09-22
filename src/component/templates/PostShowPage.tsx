import { Button } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
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

const deletePost = async (
  postId: string,
  photoUrl: string,
  router: NextRouter
) => {
  const regex = new RegExp(
    "https://storage.googleapis.com/fujisan-sommelier-bucket/",
    "i"
  );
  const fileName = photoUrl.toString().split(regex)[1];
  await fetch(`/api/image/delete`, {
    method: "DELETE",
    body: fileName,
  });

  const res = await fetch(`/api/posts/${postId}/delete`, {
    method: "DELETE",
  });
  const status = await res.status;

  if (status === 200) {
    showNotification({
      title: "Delete Success",
      message: "投稿の削除に成功しました👍",
    });
    router.push("/");
  } else {
    showNotification({
      title: "Delete Failed",
      message: "投稿の削除に失敗しました😢",
      color: "red",
    });
  }
};

const openDeletePostModal = (
  postId: string,
  photoUrl: string,
  router: NextRouter
) => {
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
      deletePost(postId, photoUrl, router);
    },
  });
};

export const PostShowPage: FC<PostShowPageType> = (post) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { authorId, content, id, photoUrl, publishedAt } = post.post;
  const { currentUser } = useAuth();
  const router = useRouter();

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

      {authorId === currentUser?.id && photoUrl ? (
        <div className="flex justify-center pb-10">
          <Button
            color="red"
            onClick={() => {
              openDeletePostModal(id, photoUrl, router);
            }}
          >
            削除
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
