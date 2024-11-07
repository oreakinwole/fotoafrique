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
          dataArray: []
        },
      },
    ],
  },
];



