import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { NewPosts } from "./NewPosts";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/NewPosts",
  component: NewPosts,
} as ComponentMeta<typeof NewPosts>;

const Template: ComponentStory<typeof NewPosts> = () => {
  return <NewPosts />;
};

export const Normal = Template.bind({});
