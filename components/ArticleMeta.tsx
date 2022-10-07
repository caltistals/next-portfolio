import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleMetaProps } from "../types/types";
import { getCover, getDate, getMultiSelect, getText } from "../utils/property";

const ArticleMeta: React.FC<ArticleMetaProps> = ({ page }) => {
  return (
    <>
      {/* page cover */}
      <div className="flex items-center justify-center">
        <Image
          className="w-full max-w-screen-lg my-4 rounded-lg aspect-video"
          src={getCover(page.cover)}
          alt=""
          objectFit="cover"
          width={640}
          height={360}
          quality={100}
        />
      </div>

      {/* page name */}
      <h1 className="my-8 text-3xl font-bold">
        {getText(page.properties.name.title)}
      </h1>
      <div className="px-6 py-4 text-sm text-gray-500 bg-white rounded">
        <div className="grid grid-cols-3 gap-4">
          {/* published */}

          <div className="flex col-span-1 ">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Published
          </div>
          <div className="col-span-2">
            {getDate(page.properties.published.date)}
          </div>

          {/* author */}
          <div className="flex col-span-1">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            Author
          </div>
          <div className="col-span-2">
            {getText(page.properties.author.rich_text)}
          </div>

          {/* tags */}
          <div className="flex col-span-1">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Tags
          </div>
          <div className="col-span-2">
            {/* change later */}
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag: string, index: number) => (
                <Link key={index} href={`/tags/${tag}`}>
                  <a className="mr-3 text-gray-700 no-underline border-b border-gray-700 border-solid opacity-70">
                    <span>{`#${tag}`}</span>
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleMeta;
