import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { SigninPage } from "./SigninPage";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/SigninPage",
  component: SigninPage,
} as ComponentMeta<typeof SigninPage>;

const Template: ComponentStory<typeof SigninPage> = () => {
  return <SigninPage />;
};

export const Normal = Template.bind({});
