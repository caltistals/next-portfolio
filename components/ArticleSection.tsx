import React from "react";
import { ArticleSectionProps } from "../types/types";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

const ArticleSection: React.FC<ArticleSectionProps & { title: string }> = ({
  pages,
  title,
}) => {
  return (
    <section className="max-w-4xl pt-12">
      <h2 className="mb-8 text-3xl font-bold pl-7">{title}</h2>
      <div className="grid w-full my-12 mt-10 sm:gap-6 sm:grid-cols-2 xl:gap-6 xl:grid-cols-3">
        {/* Card */}
        {pages.map((page, index) => (
          <ArticleCard key={index} page={page} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="#">
          <a className="px-3 py-2 border border-gray-200 rounded-md hover:text-blue-500">
            More →
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ArticleSection;
