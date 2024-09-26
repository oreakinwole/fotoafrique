<script setup lang="ts">
import VueWriter from "vue-writer";
import garden from "public/images/hero/imgs/garden.png";
import chat from "public/images/hero/icons/chat.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// const hero = ref();
const handleBookConsult = () => {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".heroo", {
    borderRadius: "0 0 50% 50%",
    backgroundColor: "#f0d6c5",
    scrollTrigger: {
      trigger: ".heroo",
      start: "center center",

      scrub: true,
    },
  });
});
</script>

<template>
  <div
    class="heroo bg-navbar-color bg-no-repeat bg-center bg-cover bg-fixed w-full flex flex-col lg:flex-row items-center py-20 justify-between min-h-[500px]"
  >
    <!-- first container -->
    <div class="flex-1 absolute lg:ml-[5rem] px-20 lg:px-0 leading-loose">
      <VueWriter
        class="uppercase font-semibold text-5xl font-playfairDisplay leading-normal text-left lg:max-w-xl"
        :array="['with the finest backyard designs', 'tailored to your needs']"
        :typeSpeed="200"
      >
      
      <p class="">Creating your dream outdoor space, </p>
     
      </VueWriter>
       <!-- <p
        class="uppercase font-semibold text-3xl lg:text-5xl font-playfairDisplay  text-left lg:max-w-3xl"
      >
        Creating your dream outdoor space, with the finest backyard designs.
      </p> -->

      <div class="mt-14" data-aos="fade-up" data-aos-duration="2000">
        <FilledButton
          background-color="black"
          text="BOOK FREE CONSULTATION"
          text-color="white"
          @click="handleBookConsult"
        />
      </div>
    </div>

    <!--second container -->

    <div
      class="hidden relative lg:flex flex-1 justify-center items-center lg:mt-0 lg:ml-[49rem]"
    >
      <img :src="garden" alt="garden image" width="800" />
      <!-- <img :src="chat" alt="chat icon" class="w-[65px] h-[65px]  right-4 bottom-4 lg:right-[10rem] lg:bottom-10 cursor-pointer fixed z-50" /> -->
    </div>
  </div>

  <div class="pt-32 pb-20">
    <p class="uppercase text-center font-inter font-[400] text-[12px]">
      Our Partners
    </p>

    <div class="mt-8">
      <img src="@/assets/svg/partners.svg" width="900" class="mx-auto" />
    </div>
  </div>
</template>
