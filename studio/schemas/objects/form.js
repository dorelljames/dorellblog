export default {
  name: "form",
  type: "object",
  title: "Form",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "form",
      type: "string",
      title: "Form",
      description: "Select form type",
      options: {
        list: ["newsletter", "register", "contact"],
      },
    },
  ],
}
