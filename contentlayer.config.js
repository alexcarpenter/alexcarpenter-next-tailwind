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

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Bookmark],
});
