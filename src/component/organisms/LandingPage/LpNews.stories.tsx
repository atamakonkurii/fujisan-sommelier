import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { LpNews } from "./LpNews";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/LpNews",
  component: LpNews,
} as ComponentMeta<typeof LpNews>;

const Template: ComponentStory<typeof LpNews> = () => {
  return (
    <LpNews
      news={{
        id: 0,
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
