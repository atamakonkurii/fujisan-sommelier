import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseContentForPostCard,
  BaseDateForPostCard,
  BaseFavoriteCountForPostCard,
  BasePhotoUrlForPostCard,
  BasePublisherPhotoUrlForPostCard,
} from "src/constants/baseText";

import { PostCard } from "./PostCard";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Molecules/PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = () => {
  return (
    <PostCard
      id={"aaa"}
      postPhotoUrl={BasePhotoUrlForPostCard}
      content={BaseContentForPostCard}
      favoriteCount={BaseFavoriteCountForPostCard}
      publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
      date={BaseDateForPostCard}
    />
  );
};

export const Normal = Template.bind({});
