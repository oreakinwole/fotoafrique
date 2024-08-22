<script>
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import image1 from "public/images/homethirdsegment/imgs/img(1).png";
import image2 from "public/images/homethirdsegment/imgs/img(2).png";


import portfolioAudio1 from "public/audio/portfolio/Beyonce_-_XO_talkglitz.tv.mp3";
import portfolioAudio2 from "public/audio/portfolio/YAH - Dunsin Oyekan.mp4";
import portfolioAudio3 from "public/audio/portfolio/Beyonce_-_XO_talkglitz.tv.mp3";
import portfolioAudio4 from  "public/audio/portfolio/YAH - Dunsin Oyekan.mp4";

export default {
  name: "HomeThirdSegment",
  components: { OutlinedButton },
  data() {
    return {
      image1,
      image2,

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
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },
  },
};
</script>



<template>
  <div class="flex flex-col mb-32 mt-40">

    <div class="ml-28">
      <h4 class="font-playfairDisplay font-[500] text-[120px] text-black">
        Our <span class="text-[180px] font-[600] font-playfairDisplay text-[#A89C93] italic">PASSION</span>
      </h4>
      <h4 class="font-playfairDisplay font-[500] text-[120px] text-black mt-[-6rem]">
        Is the <span class="text-[180px] font-[600] font-playfairDisplay text-[#A89C93] italic">WOW</span>
      </h4>
    </div>


    <div class="flex flex-row justify-end gap-24 mr-28 mt-[-3.5rem]">
      <div class="mt-[17rem]">
        <p class="font-inter text-[#665244] font-[400] text-[16px] w-[25rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor feugiat.
        </p>
        <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"
            class="mt-10"
        />
      </div>


      <div class="flex flex-row">
        <div class="flex-none mr-28 ">
          <img :src="image1" alt="house image" class="w-[433px] h-[720px]" />
        </div>
        <div class="flex-none flex  absolute right-28 mt-[37.8rem]">
        <span class="text-[16px] font-[400] text-[#665244] font-inter rotate-90 whitespace-nowrap ">
          Lorem ipsum dolor sit amet
        </span>
        </div>
      </div>



    </div>
  </div>

  <!--our portfolio -->
  <div class="w-full  bg-black text-white pt-20 pb-8">
    <h3 class="text-[180px] font-playfairDisplay font-[600] text-center ">Our Portfolio</h3>
    <div class="px-[10rem] mt-20">
      <img :src="image2" alt="image 2" class="w-[1670px] h-[700px]">
    </div>

    <h4 class="flex flex-col text-center text-white font-playfairDisplay font-[600] text-[80px] leading-[6rem] mt-[-6rem]">Eco-Friendly <span>Backyard</span> </h4>


    <div class="mt-40 text-center pb-32">
      <h4 class="font-playfairDisplay font-[600] text-[180px] text-white">Got Questions?</h4>
      <p class="font-inter text-[24px] text-white w-[55rem] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor feugiat.
      </p>
    </div>


    <!-- FAQ Section -->
    <div>
      <div
          v-for="faq in faqs"
          :key="faq.id"
          class="flex flex-row justify-between items-center px-2 border-t border-b border-[#F5F0EA] py-6 mr-8 ml-8"
      >
        <h4 class="font-[600] font-inter text-[48px] flex-grow">
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

    <div class="flex justify-center mx-auto py-20">
      <OutlinedButton
          border-color="#fff"
          text-color="#fff"
          background-color="black"
          text="SCHEDULE A CALL"
          class="mt-10"
      />
    </div>


  </div>
</template>

