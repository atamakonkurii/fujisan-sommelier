import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";

import { PostShowPage } from "./PostShowPage";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/PostShowPage",
  component: PostShowPage,
} as ComponentMeta<typeof PostShowPage>;

const PostShowPageNews: LandingPageNews = {
  id: "test",
  title: BaseNewsTitle,
  publishedAt: BaseNewsDate,
  categoryName: BaseNewsType,
};

const Template: ComponentStory<typeof PostShowPage> = () => {
  return <PostShowPage {...PostShowPageNews} />;
};

export const Normal = Template.bind({});
