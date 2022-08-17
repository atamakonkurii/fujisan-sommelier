import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PostCard } from "./PostCard";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Molecules/PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = () => {
  return (
    <PostCard
      id={"dummy"}
      postPhotoUrl={"/img/exp_fujisan.png"}
      content={"content"}
      favoriteCount={0}
      publisherPhotoUrl={"/img/face.jpg"}
      date={"2020/09/09"}
    />
  );
};

export const Normal = Template.bind({});
