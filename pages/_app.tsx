import { AppProps } from "next/app";
import Layout from "@/src/components/commons/layout";
import ApolloSetting from "@/src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "@/src/commons/styles/globalStyles";
// import "@/styles/globals.css";
// import "antd/dist/antd.css";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles}></Global>
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
