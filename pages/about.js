import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

const pageId = process.env.ABOUT_PAGE_ID;

export const getStaticProps = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 100,
  };
};

export default function Page({ recordMap }) {
  return (
    <NotionRenderer
      darkMode={true}
      recordMap={recordMap}
      fullPage={true}
      rootPageId={pageId}
    />
  );
}
