import { defineDocumentType, makeSource } from "contentlayer/source-files";

////////////////////////////////////////////////////////////////////////////////
// Bookmarks

const Bookmark = defineDocumentType(() => ({
  name: "Bookmark",
  filePathPattern: `bookmarks/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Recommendations

export const Recommendation = defineDocumentType(() => ({
  name: "Recommendation",
  filePathPattern: `recommendations/*.mdx`,
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
      required: true,
    },
    company: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    text: {
      type: "string",
      required: true,
    },
    link: {
      type: "string",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Bookmark, Recommendation],
});
