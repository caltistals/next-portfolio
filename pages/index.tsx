import type { GetStaticProps, NextPage } from "next";
import ArticleSection from "../components/ArticleSection";
import Layout from "../components/Layout";
import MetaData from "../components/MetaData";
import ProfileSection from "../components/ProfileSection";
import { IndexProps } from "../types/types";
import { fetchPages } from "../utils/notion";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({ isToppage: true });
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <MetaData />
      <div className="flex flex-col items-center justify-center">
        <ProfileSection />
        <ArticleSection pages={pages} title={"New Posts"} isToppage={true} />
      </div>
    </Layout>
  );
};

export default Home;
