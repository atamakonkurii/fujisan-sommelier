import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { TrendPosts } from "./TrendPosts";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/TrendPosts",
  component: TrendPosts,
} as ComponentMeta<typeof TrendPosts>;

const Template: ComponentStory<typeof TrendPosts> = () => {
  return <TrendPosts />;
};

export const Normal = Template.bind({});
