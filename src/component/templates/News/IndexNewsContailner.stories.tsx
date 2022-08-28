import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { IndexNewsContainer } from "./IndexNewsContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/News/IndexNewsContainer ",
  component: IndexNewsContainer,
} as ComponentMeta<typeof IndexNewsContainer>;

const Template: ComponentStory<typeof IndexNewsContainer> = () => {
  return <IndexNewsContainer newsIndex={[]} />;
};

export const Normal = Template.bind({});
