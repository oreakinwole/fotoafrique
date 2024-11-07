import SeoTemplate from "./components/view/SeoTemplate.vue";
import FAQs from "./components/FAQs.vue";

export const registeredComponents = [
  {
    component: SeoTemplate,
    name: "Seo Template",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Input Title Here",
      },

      {
        name: "paragraph",
        type: "richText",
        defaultValue: "Type your paragraph",
      },

      {
        name: "content",
        type: "richText",
        defaultValue: "Type in your content",
      },
    ],
  },
  {
    component: FAQs,
    name: "FAQs",
    inputs: [
      {
        name: "faqData",
        type: "object",
        defaultValue: {
          dataArray: [],
        },
      },
    ],
  },
];
