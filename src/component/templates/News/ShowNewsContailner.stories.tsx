import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { ShowNewsContainer } from "./ShowNewsContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/News/ShowNewsContainer ",
  component: ShowNewsContainer,
} as ComponentMeta<typeof ShowNewsContainer>;

const Template: ComponentStory<typeof ShowNewsContainer> = () => {
  return (
    <ShowNewsContainer
      news={{
        id: "aaa",
        title: "",
        content: "",
        typeOfNews: "NOTICE",
        publishedAt: null,
        createdAt: new Date(),
      }}
    />
  );
};

export const Normal = Template.bind({});
