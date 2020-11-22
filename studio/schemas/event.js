export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
  ],
};
