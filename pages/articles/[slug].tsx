import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import ArticleMeta from "../../components/ArticleMeta";
import Layout from "../../components/Layout";
import { ArticleProps, Params } from "../../types/types";
import { fetchBlocksByPageId, fetchPages } from "../../utils/notion";
import { getText } from "../../utils/property";
import NotionBlocks from "notion-block-renderer";
import MetaData from "../../components/MetaData";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({ isToppage: false });
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text),
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking", // プリレンダリングをブロッキング
  };
};

// 各リクエストごとにページをレンダリングする
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;

  const { results } = await fetchPages({ slug: slug, isToppage: false });
  const page = results[0];
  const pageId = page.id;
  const { results: blocks } = await fetchBlocksByPageId(pageId);

  return {
    props: {
      page: page, // 記事のプロパティ
      blocks: blocks, // 記事の本体
    },
    revalidate: 10, // ISR
  };
};

// PageなのでNextPage型にする
const Article: NextPage<ArticleProps> = ({ page, blocks }) => {
  return (
    <Layout>
      <article className="relative w-full mb-0">
        <MetaData title={`${getText(page.properties.name.title)}`} />
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>

        {/* article */}
        <div className="flex flex-col my-12">
          <NotionBlocks blocks={blocks} isCodeHighlighter={true} />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
