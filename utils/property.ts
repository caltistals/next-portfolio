import { PageType, RichTextType } from "../types/types";

export const getText = (richTextArr: RichTextType[]): string => {
  try {
    const textArr = richTextArr.map((richText) => richText.plain_text);
    return textArr.join("");
  } catch (err) {}
  return "";
};

export const getCover = (cover: PageType["cover"]) => {
  if (cover && cover.file) return cover.file.url;
  if (cover && cover.external) return cover.external.url;
  return "/no_image_square.jpg";
};

export const getDate = (date: { start: string }) => {
  try {
    return date.start;
  } catch (err) {}
  return "-";
};

export const getMultiSelect = (multiSelect: [{ name: string }]) => {
  try {
    return multiSelect.map((tag) => tag.name);
  } catch (err) {}
  return [];
};
