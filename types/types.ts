import { BlockType } from "notion-block-renderer";
import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";

/* Props用 */
export type MetaDataProps = {
  title?: string;
};

export type LayoutProps = {
  children: ReactNode;
};

export type ArticleSectionProps = {
  pages: PageType[];
};

export type ProfileSectionProps = {
  bio?: string;
};

export type IndexProps = { pages: PageType[] };

export type ArticleCardProps = {
  page: PageType;
};

export type ArticleMetaProps = ArticleCardProps;

export type ArticleProps = {
  page: PageType;
  blocks: BlockType[];
};

export type Params = ParsedUrlQuery & {
  slug?: string;
  tag?: string;
};

export type FileType = {
  file?: { url: string };
  external?: { url: string };
};

export type AnnotationTypes = {
  bold: boolean;
  code: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  color: string;
};

export type RichTextType = {
  plain_text: string;
  href: string | null;
  annotations: AnnotationTypes;
};

export type PropertyType = {
  name: { title: RichTextType[] };
  author: { rich_text: RichTextType[] };
  slug: { rich_text: RichTextType[] };
  published: { date: { start: string } };
  isPublic: { checkbox: boolean };
  tags: { multi_select: [{ name: string }] };
};

export type PageType = {
  id: string;
  cover: FileType | null;
  properties: PropertyType;
};
