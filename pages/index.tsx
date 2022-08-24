import type { CustomNextPage } from "next";
import { useEffect } from "react";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => {
  useEffect(() => {
    fetch("/api/posts").then((res) => {
      return res.json();
    });
    // .then(console.log);
  }, []);
  return <Index />;
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;
