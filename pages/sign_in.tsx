import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Signin } from "src/pages/index/sign_in";

const SigninPage: CustomNextPage = () => {
  return <Signin />;
};

SigninPage.getLayout = StandardLayout;

export default SigninPage;
