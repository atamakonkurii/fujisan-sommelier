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

import { PostShow } from "./PostShow";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/PostShow",
  component: PostShow,
} as ComponentMeta<typeof PostShow>;

const Template: ComponentStory<typeof PostShow> = () => {
  return (
    <PostShow
      id={"dummy"}
      postPhotoUrl={BasePhotoUrlForPostCard}
      content={BaseContentForPostCard}
      favoriteCount={BaseFavoriteCountForPostCard}
      publisherPhotoUrl={BasePublisherPhotoUrlForPostCard}
      date={BaseDateForPostCard}
    />
  );
};

export const Normal = Template.bind({});
