import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ArticleCard from "../components/ArticleCard";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { IndexProps } from "../types/types";
import { fetchPages } from "../utils/notion";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className="max-w-4xl pt-12">
        <h1 className="mb-8 text-4xl font-bold pl-7">📰 New Posts</h1>
        <div className="grid w-full my-12 mt-10 sm:gap-6 sm:grid-cols-2 xl:gap-6 xl:grid-cols-3">
          {/* Card */}
          {pages.map((page, index) => (
            <ArticleCard key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
