import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

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
// Jobs

const Event = defineNestedType(() => ({
  name: "Event",
  fields: {
    heading: {
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
    link: {
      type: "string",
      required: false,
    },
  },
}));

export const Job = defineDocumentType(() => ({
  name: "Job",
  filePathPattern: `jobs/*.mdx`,
  contentType: "mdx",
  fields: {
    company: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "date",
      required: true,
    },
    endDate: {
      type: "date",
      required: false,
    },
    title: {
      type: "string",
      required: true,
    },
    location: {
      type: "string",
      required: false,
    },
    link: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    logo: {
      type: "string",
      required: false,
    },
    timeline: {
      type: "list",
      of: Event,
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    currently: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (job) => job._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Posts

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
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
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
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
  documentTypes: [Bookmark, Job, Post, Recommendation],
});
