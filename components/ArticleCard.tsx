import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { ArticleCardProps } from "../types/types";
import { getCover, getDate, getMultiSelect, getText } from "../utils/property";
const ArticleCard: FC<ArticleCardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
      <a className="flex justify-center">
        <div className="grid content-between w-full max-w-xs my-4 overflow-hidden transition-transform bg-white shadow-lg rounded-3xl md:my-0 hover:scale-105">
          {/* image */}
          <div>
            <Image
              className="static w-full h-auto "
              src={getCover(page.cover)}
              alt=""
              objectFit="cover"
              width={330}
              height={200}
              quality={30}
            />
          </div>
          {/* title & date*/}
          <div className="px-6 pt-4 ">
            <h2 className="mb-3 text-base font-medium hover:text-blue-400">
              {getText(page.properties.name.title)}
            </h2>
            <p className="text-xs text-gray-700">
              {getDate(page.properties.published.date)}
            </p>
          </div>

          {/* tag */}
          <div className="px-6 pb-4 ">
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 mb-2 mr-2 text-sm font-normal break-words bg-gray-200 rounded-lg hover:bg-blue-300"
                >
                  {`#${tag}`}
                </span>
              )
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
