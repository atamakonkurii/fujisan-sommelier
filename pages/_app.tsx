import "../src/style/index.css";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { AuthContextProvider } from "src/context/AuthContext";
import { ProtectedRoute } from "src/context/ProtectedRoute";

const authRequired = ["/posts/new"];

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  const router = useRouter();

  return (
    <AuthContextProvider>
      <MantineProvider>
        <ModalsProvider>
          <NotificationsProvider autoClose={4000}>
            <Head>
              <title>富士山ソムリエ</title>
            </Head>
            {authRequired.includes(router.pathname)
              ? getLayout(
                  <ProtectedRoute>
                    <Component {...pageProps} />
                  </ProtectedRoute>
                )
              : getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </AuthContextProvider>
  );
};

export default App;
