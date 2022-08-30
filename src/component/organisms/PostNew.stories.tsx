import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PostNew } from "./PostNew";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/PostNew",
  component: PostNew,
} as ComponentMeta<typeof PostNew>;

const Template: ComponentStory<typeof PostNew> = () => {
  return <PostNew />;
};

export const Normal = Template.bind({});
