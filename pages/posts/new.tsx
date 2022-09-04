import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { NewPosts } from "src/pages/posts/new";

const NewPostsPage: CustomNextPage = () => {
  return <NewPosts />;
};

NewPostsPage.getLayout = StandardLayout;

export default NewPostsPage;
