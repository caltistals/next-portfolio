import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import ArticleSection from "../components/ArticleSection";
import Layout from "../components/Layout";
import ProfileSection from "../components/ProfileSection";
import { IndexProps } from "../types/types";
import { fetchPages } from "../utils/notion";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({ isToppage: true });
  return {
    props: {
      pages: results ? results : [],
    },
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <ProfileSection />
        <ArticleSection pages={pages} title={"New Posts"} isToppage={true} />
      </div>
    </Layout>
  );
};

export default Home;
