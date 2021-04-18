import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageLayout } from "./PageLayout";

hydrate();

async function hydrate() {
  const { Page, contextProps } = await getPage();

  ReactDOM.hydrate(
    <PageLayout>
      <Page {...contextProps.pageProps} />
    </PageLayout>,
    document.getElementById("page-view")
  );
}
