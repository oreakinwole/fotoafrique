<script>
import maskGroup from "public/images/ourportfolio/imgs/Mask group.png";

export default {
  name: "OurPortfolio",
  data() {
    return {
      maskGroup,
      hoverPosition: { x: 0, y: 0 },
      faqs: [
        {
          id: 1,
          question: "What makes Modern Yardz a top landscaper in San Diego?",
          fullQuestion:
            "What makes Modern Yardz a top landscaper in San Diego?",
          description:
            "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",
          image: maskGroup,
          audioPlaying: false,
          duration: 0,
          currentTime: 0,
        },
        {
          id: 2,
          question: "Can Modern Yardz help with small landscaping projects?",
          fullQuestion:
            "Can Modern Yardz help with small landscaping projects?",
          description:
            "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",
          image: maskGroup,
          audioPlaying: false,
          duration: 0,
          currentTime: 0,
        },
        {
          id: 3,
          question: "Does Modern Yardz offer eco-friendly landscaping solutions?",
          fullQuestion:
            "Does Modern Yardz offer eco-friendly landscaping solutions?",
          description:
            "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",
          image: maskGroup,
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
          image: maskGroup,
          audioPlaying: false,
          duration: 0,
          currentTime: 0,
        },
      ],
    };
  },

  methods: {
    updateHoverPosition(event) {
      this.hoverPosition = { x: event.clientX, y: event.clientY };
    },
  },
};
</script>

<template>
  <!--our portfolio -->
  <div class="w-full bg-black text-white mb-28 cursor-help">
    <h2
      class="text-7xl cursor-default py-20 font-playfairDisplay font-[600] text-center"
    >
      Our Portfolio
    </h2>
    <NuxtLink to="portfolio">
      <div
        class="scape-explore-cursor px-[40px] w-[1070px] h-[600px] xl:w-[1600px] xl:h-[600px] bg-[url('/images/ourportfolio/imgs/portbackyard.jpg')] bg-no-repeat bg-center bg-contain bg-fixed"
      ></div>
    </NuxtLink>

    <h4
      class="cursor-default flex flex-col text-center text-white font-playfairDisplay font-[600] text-[50px] leading-[6rem] mt-[-6rem]"
    >
      Eco-Friendly <span>Backyard</span>
    </h4>
    <!-- <p class="font-inter text-sm text-white w-[55rem] mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
      dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
      vestibulum tortor feugiat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui
      molestie, sit amet vestibulum tortor feugiat. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim
      turpis nec dui molestie, sit amet vestibulum tortor feugiat. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam.
      Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor
      feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
      vestibulum tortor feugiat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui
      molestie, sit amet vestibulum tortor feugiat. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim
      turpis nec dui molestie, sit amet vestibulum tortor feugiat. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam.
      Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor
      feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
      vestibulum tortor feugiat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui
      molestie, sit amet vestibulum tortor feugiat. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim
      turpis nec dui molestie, sit amet vestibulum tortor feugiat. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam.
      Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor
      feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
      vestibulum tortor feugiat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui
      molestie, sit amet vestibulum tortor feugiat. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim
      turpis nec dui molestie, sit amet vestibulum tortor feugiat.
    </p> -->

    <div class="mt-32 space-y-8 text-center pb-32">
      <h4 class="font-playfairDisplay font-[600] text-7xl text-white">
        Got Questions?
      </h4>
      <p class="font-inter text-xs font-light text-white max-w-md mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat.
      </p>
    </div>

    <!-- FAQ Section -->
    <div class="px-5">
      <div
        v-for="faq in faqs"
        :key="faq.id"
        class="flex flex-row max-w-[85%] pl-5 justify-between items-center px-2 border-t border-b border-[#F5F0EA] py-6 mr-8 ml-8 relative"
        @mouseenter="faq.hover = true"
        @mouseleave="faq.hover = false"
        @mousemove="updateHoverPosition($event)"
      >
        <h4 class="font-[600] font-inter text-4xl tracking-wider flex-grow">
          {{ faq.question }}
        </h4>

        <!-- <div class="flex items-center ml-4">
          <div @click="togglePlayPause(faq)" class="cursor-pointer mr-40">
            <p class="text-[#AB9F91] font-[400] text-[17px] font-inter">Listen</p>
          </div>

          <p v-if="faq.duration" class="text-white">{{ formatTime(faq.audioPlaying ? faq.currentTime : faq.duration) }}</p>
        </div> -->

        <!-- Hover Box for full question and image -->
        <div
          v-if="faq.hover"
          :style="{ top: '-100px', left: hoverPosition.x + 'px' }"
          class="absolute w-[240px] h-[370px] p-4 bg-white text-black shadow-lg z-10 rounded-t-[38%] cursor-pointer animate__animated animate__fadeIn animate__slow"
        >
          <div class="flex w-[240px]">
            <img
              :src="faq.image"
              alt="FAQ Image"
              class="w-full h-[150px] ml-[-1rem] mt-[-2rem]"
            />
          </div>

          <p
            class="font-inter text-[15px] font-[600] w-[13rem] mb-4 ml-[-4px] mt-5"
          >
            {{ faq.fullQuestion }}
          </p>

          <p class="font-inter text-[12px] mb-4">{{ faq.description }}</p>
        </div>

        <!-- <audio
          :ref="'audioPlayer' + faq.id"
          :src="faq.audioSrc"
          @loadedmetadata="setDuration(faq)"
          @timeupdate="updateCurrentTime(faq)"
          @ended="resetToDuration(faq)"
        ></audio> -->
      </div>
    </div>

    <div class="flex justify-center mx-auto py-20 pb-32">
      <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="transparent"
        text="SEE MORE"

        class="mt-10"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scape-explore-cursor:hover {
  cursor: url("@/assets/images/bestill.png"), auto;
}
</style>
