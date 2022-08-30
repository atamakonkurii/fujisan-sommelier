import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PostNewPage } from "./PostNewPage";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/PostNewPage",
  component: PostNewPage,
} as ComponentMeta<typeof PostNewPage>;

const Template: ComponentStory<typeof PostNewPage> = () => {
  return <PostNewPage />;
};

export const Normal = Template.bind({});
