import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseContentForPostCard,
  BasePhotoUrlForPostCard,
} from "src/constants/baseText";

import { PostShowPage } from "./PostShowPage";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/PostShowPage",
  component: PostShowPage,
} as ComponentMeta<typeof PostShowPage>;

const Template: ComponentStory<typeof PostShowPage> = () => {
  return (
    <PostShowPage
      photoUrl={BasePhotoUrlForPostCard}
      content={BaseContentForPostCard}
      publishedAt={null}
    />
  );
};

export const Normal = Template.bind({});
