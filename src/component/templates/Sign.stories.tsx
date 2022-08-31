import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { Signup } from "./Signup";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/Signup",
  component: Signup,
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = () => {
  return <Signup />;
};

export const Normal = Template.bind({});
