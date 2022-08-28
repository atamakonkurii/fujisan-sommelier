import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";

import { LandingPage } from "./LandingPage";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/LandingPage",
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const landingPageNews: LandingPageNews = {
  id: 1,
  title: BaseNewsTitle,
  publishedAt: BaseNewsDate,
  categoryName: BaseNewsType,
};

const Template: ComponentStory<typeof LandingPage> = () => {
  return <LandingPage news={landingPageNews} newPosts={[]} trendPosts={[]} />;
};

export const Normal = Template.bind({});
