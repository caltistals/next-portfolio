import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import ArticleSection from "../../components/ArticleSection";
import Layout from "../../components/Layout";
import MetaData from "../../components/MetaData";
import { IndexProps, Params } from "../../types/types";
import { fetchPages } from "../../utils/notion";
import { getMultiSelect } from "../../utils/property";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tag } = ctx.params as Params;
  const { results } = await fetchPages({ tag: tag, isToppage: false });
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { results }: { results: Record<string, any>[] } = await fetchPages({
    isToppage: false,
  });
  const pathSet: Set<string> = new Set();
  for (const page of results) {
    for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
      pathSet.add(tag);
    }
  }

  const paths = Array.from(pathSet).map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking", // プリレンダリングをブロッキング
  };
};

const Tag: NextPage<IndexProps & { tag: string }> = ({ pages, tag }) => {
  return (
    <Layout>
      <MetaData title={`#${tag}の記事一覧`} />
      <div className="flex flex-col items-center justify-center">
        <ArticleSection pages={pages} title={`#${tag}`} isToppage={false} />
      </div>
    </Layout>
  );
};

export default Tag;
