import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { AuthContextProvider } from "src/context/AuthContext";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <AuthContextProvider>
      <Head>
        <title>富士山ソムリエ</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </AuthContextProvider>
  );
};

export default App;
