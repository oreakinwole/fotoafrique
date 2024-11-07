<!-- pages/[...app].vue -->

<script setup>
import { Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-vue";
import { ref } from "vue";
import { registeredComponents } from "../init-builder.ts";

const route = useRoute();

// TO DO: Add your Public API Key here
const apiKey = "7ae0abad7c284f1caab7d3c34c596171";
const canShowContent = ref(true);
const model = "page";

const { data: content } = await useAsyncData("builderData", () =>
  fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: route.path,
    },
  })
);

canShowContent.value = content.value ? true : isPreviewing(route.path);

const getRegisteredComponents = () => {
  return registeredComponents;
};


</script>

<template>
  <div v-if="canShowContent">
    <Content
      :api-key="apiKey"
      :model="model"
      :content="content"
      :custom-components="getRegisteredComponents()"
    />
  </div>
  <div v-else>Content not Found</div>
</template>
