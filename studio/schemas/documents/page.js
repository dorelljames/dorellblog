export default {
  // Setup a 'document' type to house the page builder field

  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { type: "hero" }, // hero.js (same applies for the other types)
        { type: "textWithIllustration" },
        { type: "callToAction" },
        { type: "gallery" },
        { type: "form" },
        { type: "video" },
        { type: "author" },
        // etc...
      ],
    },
    {
      name: "sectionList",
      type: "array",
      title: "sections",
      of: [{ type: "reference", to: [{ type: "author" }] }],
    },
    {
      name: "heroList",
      type: "array",
      title: "heroes",
      of: [{ type: "hero" }],
    },
    {
      name: "orderTable",
      type: "array",
      title: "Order Table Info",
      of: [{ type: "customKeyNumberVal" }, { type: "customKeyStringVal" }],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
}
