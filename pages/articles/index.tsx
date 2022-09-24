import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "../../components/ArticleCard";
import ArticleSection from "../../components/ArticleSection";
import Layout from "../../components/Layout";
import MetaData from "../../components/MetaData";
import ProfileSection from "../../components/ProfileSection";
import { IndexProps } from "../../types/types";
import { fetchPages } from "../../utils/notion";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({ isToppage: false });
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const AllPosts: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <MetaData title="全記事一覧" />
      <div className="flex flex-col items-center justify-center">
        <ArticleSection pages={pages} title={"All Posts"} isToppage={false} />
      </div>
    </Layout>
  );
};

export default AllPosts;
