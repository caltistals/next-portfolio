import Head from "next/head";
import { MetaDataProps } from "../types/types";
import React from "react";

const MetaData: React.FC<MetaDataProps> = ({ title }) => {
  return (
    <Head>
      <title>
        {title ? `${title} - caltistals portfolio` : `caltistals portfolio`}
      </title>
      <meta
        property="og:title"
        content={
          title ? `${title} - caltistals portfolio` : `caltistals portfolio`
        }
      />
    </Head>
  );
};

export default MetaData;
