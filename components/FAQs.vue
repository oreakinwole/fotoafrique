<script setup>
defineProps(["faqData"]);

const isViewingFaq = ref(null);
</script>

<template>
  <!--our portfolio -->
  <div
    class="w-full bg-black text-white pt-20 lg:pt-20  cursor-help"
    v-if="faqData.dataArray.length > 0"
  >
    <div class="space-y-4 lg:space-y-8 text-center pb-14 lg:pb-20">
      <h4 class="font-semibold text-5xl lg:text-6xl">Got Questions?</h4>
      <p class="lg:text-xs max-w-[380px] lg:max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat.
      </p>
    </div>

    <!-- FAQ Section -->
    <div class="lg:px-5">
      <div
        v-for="(faq, index) in faqData.dataArray"
        :key="faq.question"
        class="lg:max-w-[600px] border-t border-b border-[#F5F0EA] py-3 mx-3 lg:mx-auto relative"
        @mouseenter="faq.hover = true"
        @mouseleave="faq.hover = false"
        @click="isViewingFaq = index"
      >
        <h4 class="font-[600] font-inter text-lg tracking-wider flex-grow">
          {{ faq.name }}
        </h4>

        <p
          v-if="isViewingFaq === index"
          class="lg:text-md text-black font-light bg-white p-3 mt-12 animate__animated animate__slideInLeft"
        >
          {{ faq.acceptedAnswer.text }}
        </p>
      </div>
    </div>

    <div class="flex justify-center mx-auto py-20 pb-32">
      <NuxtLink to="services">
        <OutlinedButton(BLACK)
          border-color="#fff"
          text-color="#fff"
          background-color="transparent"
          text="WHAT WE OFFER"
          class="lg:mt-10 lg:w-[200px]"
        />
      </NuxtLink>
    </div>
  </div>
</template>
