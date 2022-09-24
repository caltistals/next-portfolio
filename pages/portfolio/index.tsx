import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "../../components/ArticleCard";
import ArticleSection from "../../components/ArticleSection";
import Layout from "../../components/Layout";
import MetaData from "../../components/MetaData";
import PortfolioCard from "../../components/PortfolioCard";
import ProfileSection from "../../components/ProfileSection";
import { IndexProps } from "../../types/types";
import { fetchPages } from "../../utils/notion";

const AllPosts: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <section className="max-w-4xl pt-12">
          <h1 className="mb-8 text-4xl font-bold text-center">My Portfolio</h1>
          <div className="grid w-full my-12 mt-10 sm:gap-6 sm:grid-cols-2 xl:gap-6 xl:grid-cols-3">
            {/* Card */}
            <PortfolioCard
              title="ワークアウトメモ"
              img="/workoutmemo.png"
              slug="#"
              github="https://github.com/caltistals/workout-memo-react-firebase"
            />
            <PortfolioCard
              title="傘知らせるくん"
              img="/rain-remainder.png"
              slug="#"
              github="https://github.com/Kissa0330/rain_reminder"
            />
            <PortfolioCard
              title="ポートフォリオ+ブログサイト"
              img="/caltistals-portfolio.png"
              slug="next-portfolio"
              github="https://github.com/caltistals/next-portfolio"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AllPosts;
