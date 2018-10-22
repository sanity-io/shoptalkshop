export default {
  name: "config",
  type: "document",
  title: "config",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "storeName",
      type: "string",
      title: "Name of store"
    },
    {
      name: "contactInfo",
      type: "object",
      title: "Contact info",
      fields: [
        {
          name: "streetName",
          type: "string",
          title: "Street name"
        },
        {
          name: "streetNumber",
          type: "string",
          title: "Street number"
        },
        {
          name: "city",
          type: "string",
          title: "City"
        },
        {
          name: "country",
          type: "string",
          title: "Country"
        },
        {
          name: "telephone",
          type: "string",
          title: "Telephone"
        },
        {
          name: "email",
          type: "string",
          title: "Email"
        }
      ]
    }
  ]
};
