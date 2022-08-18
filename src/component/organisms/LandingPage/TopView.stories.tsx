import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { TopView } from "./TopView";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/TopView",
  component: TopView,
} as ComponentMeta<typeof TopView>;

const Template: ComponentStory<typeof TopView> = () => {
  return <TopView />;
};

export const Normal = Template.bind({});
