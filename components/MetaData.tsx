import Head from "next/head";
import { MetaDataProps } from "../types/types";
import React from "react";

const MetaData: React.FC<MetaDataProps> = ({ title }) => {
  const metaTitle: string = title
    ? `${title} | caltistals.dev`
    : "caltistals.dev";
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta
        property="description"
        content="caltistalsのブログです。技術やくだらないことについて書いています。"
      />
      <meta property="og:title" content={metaTitle} />
      <meta
        property="og:description"
        content="caltistalsのブログです。技術やくだらないことについて書いています。"
      />
      <meta property="og:site_name" content="caltistals.dev" />
      <meta
        property="og:image"
        content={`https://og-image-caltistals.vercel.app/${metaTitle}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`}
      />
    </Head>
  );
};

export default MetaData;
