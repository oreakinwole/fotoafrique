<script>
import { defineComponent } from "vue";
import corridorImg from "public/images/ourportfolio/imgs/img(2).png";
import portfolioAudio1 from "public/audio/portfolio/Beyonce_-_XO_talkglitz.tv.mp3";
import portfolioAudio2 from "public/audio/portfolio/YAH - Dunsin Oyekan.mp4";
import portfolioAudio3 from "public/audio/portfolio/Beyonce_-_XO_talkglitz.tv.mp3";
import portfolioAudio4 from "public/audio/portfolio/YAH - Dunsin Oyekan.mp4";

export default defineComponent({
  name: "OurPortfolio",
  data() {
    return {
      corridorImg,

      faqs: [
        {
          id: 1,
          question: "What makes Modern Yardz a top landscaper in...?",
          audioSrc: portfolioAudio1,
          audioPlaying: false,
          duration: 0,
          currentTime: 0,
        },
        {
          id: 2,
          question: "Can Modern Yardz help with small landscaping...?",
          audioSrc: portfolioAudio2,
          audioPlaying: false,
          duration: 0,
          currentTime: 0,
        },
        {
          id: 3,
          question: "Does Modern Yardz offer eco-friendly landscapi...?",
          audioSrc: portfolioAudio3,
          audioPlaying: false,
          duration: null,
          currentTime: 0,
        },
        {
          id: 4,
          question: "How long does a typical landscaping project take...?",
          audioSrc: portfolioAudio4,
          audioPlaying: false,
          duration: 0,
          currentTime: 0,
        },
      ],
    };
  },
  methods: {
    togglePlayPause(faq) {
      const audio = this.$refs[`audioPlayer${faq.id}`][0];

      if (audio.paused) {
        this.faqs.forEach((f) => {
          if (f.id !== faq.id) {
            const otherAudio = this.$refs[`audioPlayer${f.id}`][0];
            otherAudio.pause();
            f.audioPlaying = false;
          }
        });
        audio.play();
        faq.audioPlaying = true;
      } else {
        audio.pause();
        faq.audioPlaying = false;
      }
    },
    setDuration(faq) {
      const audio = this.$refs[`audioPlayer${faq.id}`][0];
      faq.duration = audio.duration;
    },
    updateCurrentTime(faq) {
      const audio = this.$refs[`audioPlayer${faq.id}`][0];
      faq.currentTime = audio.currentTime;
    },
    resetToDuration(faq) {
      faq.audioPlaying = false;
      faq.currentTime = 0;
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60) || 0;
      const seconds = Math.floor(time % 60) || 0;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    },
  },
});
</script>

<template>
  <!--our portfolio -->
  <div class="w-full bg-black text-white pt-20 pb-8">
    <h3 class="text-7xl font-playfairDisplay font-[600] text-center">
      Our Portfolio
    </h3>
    <div class="px-20 mt-20">
      <img :src="corridorImg" alt="image 2" class="" />
    </div>

    <h4
      class="flex flex-col text-center text-white font-playfairDisplay font-[600] text-[80px] leading-[6rem] mt-[-6rem]"
    >
      Eco-Friendly <span>Backyard</span>
    </h4>

    <div class="mt-40 text-center pb-32">
      <h4 class="font-playfairDisplay font-[600] text-8xl text-white">
        Got Questions?
      </h4>

      <p class="font-inter text-xs text-white max-w-[550px] mt-6  mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat.
      </p>
    </div>

    <!-- FAQ Section -->
    <div>
      <div
        v-for="faq in faqs"
        :key="faq.id"
        class="flex justify-between items-center px-2 border-t border-b border-[#F5F0EA] py-6 mx-8"
      >
        <h4 class="font-[600] font-inter text-4xl flex-grow">
          {{ faq.question }}
        </h4>

        <div class="flex items-center ml-4">
          <div @click="togglePlayPause(faq)" class="cursor-pointer mr-52">
            <p class="text-[#AB9F91] font-[400] text-[20px] font-inter">
              Listen
            </p>
          </div>

          <p v-if="faq.duration" class="text-white">
            {{ formatTime(faq.audioPlaying ? faq.currentTime : faq.duration) }}
          </p>
        </div>

        <audio
          :ref="'audioPlayer' + faq.id"
          :src="faq.audioSrc"
          @loadedmetadata="setDuration(faq)"
          @timeupdate="updateCurrentTime(faq)"
          @ended="resetToDuration(faq)"
        ></audio>
      </div>
    </div>

    <div class="flex justify-center mx-auto py-20 pb-32">
      <OutlinedButtonBlack
        border-color="#fff"
        text-color="#fff"
        background-color="black"
        text="SEE MORE"
        class="mt-10"
      />
    </div>
  </div>
</template>
