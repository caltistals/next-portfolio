import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY as string });
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export const fetchPages = async ({
  slug,
  tag,
  isToppage,
}: {
  slug?: string;
  tag?: string;
  isToppage: boolean;
}) => {
  const and: any = [
    {
      property: "isPublic",
      checkbox: {
        equals: true,
      },
    },
    {
      property: "slug",
      rich_text: {
        is_not_empty: true,
      },
    },
  ];

  if (slug) {
    and.push({
      property: "slug",
      rich_text: {
        equals: slug,
      },
    });
  }

  if (tag) {
    and.push({
      property: "tags",
      multi_select: {
        contains: tag,
      },
    });
  }

  return await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: and,
    },
    sorts: [
      {
        property: "published",
        direction: "descending",
      },
    ],
    page_size: isToppage ? 3 : 100,
  });
};

export const fetchBlocksByPageId = async (pageId: string) => {
  const data: Record<string, any>[] = [];
  let cursor: string | null | undefined = undefined;
  while (true) {
    const {
      results,
      next_cursor,
    }: {
      results: Record<string, any>[];
      next_cursor: string | null | undefined;
    } = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    data.push(...results);
    if (!next_cursor) break;
    cursor = next_cursor;
  }
  return { results: data };
};
