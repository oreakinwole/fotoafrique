<script setup>
const faqs = ref([
  {
    id: 1,
    question: "What makes Modern Yardz a top landscaper in San Diego?",
    fullQuestion: "What makes Modern Yardz a top landscaper in San Diego?",
    description:
      "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",

    audioPlaying: false,
    duration: 0,
    currentTime: 0,
  },
  {
    id: 2,
    question: "Can Modern Yardz help with small landscaping projects?",
    fullQuestion: "Can Modern Yardz help with small landscaping projects?",
    description:
      "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",

    audioPlaying: false,
    duration: 0,
    currentTime: 0,
  },
  {
    id: 3,
    question: "Does Modern Yardz offer eco-friendly landscaping solutions?",
    fullQuestion: "Does Modern Yardz offer eco-friendly landscaping solutions?",
    description:
      "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",

    audioPlaying: false,
    duration: 0,
    currentTime: 0,
  },
  {
    id: 4,
    question: "How long does a typical landscaping project take to complete?",
    fullQuestion:
      "How long does a typical landscaping project take to complete?",
    description:
      "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",

    audioPlaying: false,
    duration: 0,
    currentTime: 0,
  },
]);
const isViewingFaq = ref(null);
</script>

<template>
  <!--our portfolio -->
  <div class="w-full bg-black text-white pt-20 lg:pt-20 lg:mb-28 cursor-help">
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
        v-for="(faq, index) in faqs"
        :key="faq.id"
        class="lg:max-w-[600px] border-t border-b border-[#F5F0EA] py-3 mx-3 lg:mx-auto relative"
        @mouseenter="faq.hover = true"
        @mouseleave="faq.hover = false"
        @click="isViewingFaq = index"
      >
        <h4 class="font-[600] font-inter text-lg tracking-wider flex-grow">
          {{ faq.question }}
        </h4>

        <p
          v-if="isViewingFaq === index"
          class="lg:text-md text-black font-light bg-white p-3 mt-12 animate__animated animate__slideInLeft"
        >
          {{ faq.description }}
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

<style lang="scss" scoped>
.scape-explore-cursor:hover {
  cursor: url("@/assets/images/bestill.png"), auto;
}
</style>
