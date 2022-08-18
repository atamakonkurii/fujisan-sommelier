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
      postPhotoUrl={"/img/exp_fujisan.webp"}
      content={
        "海、空、工場とのコントラストは彼の雄大さを際立たせている。\n赤く染まったその顔は、 寒い中でも新年の希望へ満ちた若者を彷彿させ、 すべての人々へ希望を与えてくれているようだ。"
      }
      favoriteCount={100}
      publisherPhotoUrl={"/img/face.webp"}
      date={"2020/09/09"}
    />
  );
};

export const Normal = Template.bind({});
