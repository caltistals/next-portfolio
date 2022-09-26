import Head from "next/head";
import { MetaDataProps } from "../types/types";
import React from "react";

const MetaData: React.FC<MetaDataProps> = ({ title }) => {
  return (
    <Head>
      <title>{title ? `${title} | caltistals.dev` : `caltistals.dev`}</title>
      <meta
        property="description"
        content="caltistalsのブログです。技術やくだらないことについて書いています。"
      />
      <meta
        property="og:title"
        content={title ? `${title} | caltistals.dev` : `caltistals.dev`}
      />
      <meta
        property="og:description"
        content="caltistalsのブログです。技術やくだらないことについて書いています。"
      />
      <meta property="og:site_name" content="caltistals.dev" />
    </Head>
  );
};

export default MetaData;
