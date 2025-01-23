<script setup>
const props = defineProps(["faqData"]);

const isViewingFaq = ref(null);

// In mainEntity property dataArray is a Proxy array because of vue reactivity, so we are normalizing to clean array
props.faqData?.dataArray &&
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        
        "mainEntity": ${JSON.stringify(
          JSON.parse(JSON.stringify(props.faqData.dataArray))
        )}
      }`,
        tagPosition: "bodyClose",
      },
    ],
  });
</script>

<template>
  <!--our portfolio -->
  <div
    id="FAQS"
    class=" bg-white text-black pt-10 cursor-help"
    v-if="faqData.dataArray.length > 0"
  >
    <div class="space-y-4 lg:space-y-8 text-center pb-14 lg:pb-20">
      <h4 class="font-semibold text-5xl lg:text-6xl"></h4>

      <h4 class="font-playfairDisplay tracking-wide text-5xl font-medium mb-4">
        Got Qu<span class="text-[#A89C93] font-imperial text-6xl">E </span>
        stions ?
      </h4>
      <p class="max-w-[380px] tracking-widest lg:max-w-lg mx-auto">
        Frequently Asked Questions<br />
        Here are some common questions. Find the answers you're looking for
        below.
      </p>
    </div>

    <!-- FAQ Section -->
    <div class="lg:px-5 space-y-8">
      <div
        v-for="(faq, index) in faqData.dataArray"
        :key="faq.question"
        class="lg:max-w-[600px] text-center border-t border-b border-[#F5F0EA] py-3 mx-3 lg:mx-auto relative"
        @mouseenter="faq.hover = true"
        @mouseleave="faq.hover = false"
        @click="isViewingFaq = index"
      >
        <h4 class="font-[600]   text-sm tracking-widest flex-grow">
          {{ faq.name }}
        </h4>

        <p
          v-if="isViewingFaq === index"
          class="lg:text-sm text-black font-light tracking-widest bg-white p-3 mt-12 animate__animated animate__slideInLeft"
        >
          {{ faq.acceptedAnswer.text }}
        </p>
      </div>
    </div>

    <div class="flex justify-center mx-auto py-20">
      <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="black"
        text="GET STARTED TODAY!"
        class="lg:mt-10 lg:w-[200px]"
      />
    </div>
  </div>
</template>
