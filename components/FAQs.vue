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
  <div class=" px-4 lg:px-20">
    <div class="mt-12 flex justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          Got
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >Q
          </span>
          uestions ?
        </h4>
        <p class="text-sm tracking-widest mb-12 max-w-md mt-4">
          Frequently Asked Questions. Here are some common questions. Find the
          answers you're looking for below.
        </p>

        <!-- FAQ Section -->
        <div class="lg:px-5 space-y-8">
          <div
            v-for="(faq, index) in faqData.dataArray.slice(0, 6)"
            :key="faq.question"
            class="lg:max-w-[600px] border-t border-b border-[#F5F0EA] py-3 mx-3 lg:mx-auto relative"
            @mouseenter="faq.hover = true"
            @mouseleave="faq.hover = false"
            @click="isViewingFaq = index"
          >
            <h4 class="font-[600] text-sm tracking-widest flex-grow">
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
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6dgb2p7c933b%2F7gkM7nBCoazww2g684nXxq%2F7775a31f37a1d3d1af671a4c507435f4%2FimgCard-2.png&w=1200&q=75"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>
</template>
