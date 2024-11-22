<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const animateCaption = ref(false);

onMounted(() => {
  animateCaption.value = true;
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".anihero", {
    // borderRadius: 0,
    // border: "none",
    width: "100%",

    scrollTrigger: {
      trigger: ".hero-trigger",
      start: "top top",
      end: "+=500",
      scrub: true,
    },
  });

  gsap.to(".anihero", {
    borderRadius: 0,
    border: "none",
    scrollTrigger: {
      trigger: "#hero-vid-sect",
      start: "top top",
      scrub: true,
    },
  });
});
</script>

<template>
  <div class="">
    <header
      class="hidden lg:block min-h-[470px] lg:min-h-screen pt-20 lg:bg-[url('@/assets/images/hero_bg1.png')] bg-white bg-no-repeat bg-left-top bg-cover"
    >
      <div class="text-center space-y-3">
        <p
          class="animate__animated animate__slideInUp text-xs lg:text-md font-semibold tracking-[.6em]"
        >
          TRANSFORM YOUR YARD INTO A
        </p>

        <!-- <p
          class="text-6xl lg:text-8xl font-bold flex items-center justify-center"
        >
          L
          <span
            class="transition-all delay-[2600ms] duration-1000 ease-in-out w-9 h-9 py-4 lg:py-6 px-4 lg:px-7 border-[9px] lg:border-[12px] border-black rounded-full hover:rounded-5xl"
            :class="animateCaption && 'xl:px-36'"
          >
            &nbsp;
          </span>

          VE IT<span
            class="animate__animated animate__bounceIn animate__delay-4s"
            >!</span
          >
        </p> -->

        <div class="flex items-center justify-center">
          <VueWriter
            class="text-6xl lg:text-8xl font-bold flex items-center justify-center tracking-widest"
            :array="[`MASTERPIECE!`]"
            :iterations="1"
            :type-speeed="300"
          />
          <!-- <span
            class="animate__animated animate__bounceIn animate__delay-3s ext-6xl lg:text-8xl font-bold"
            >!</span
          > -->
        </div>
        <p
          class="text-xs hidden lg:block max-w-lg lg:max-w-xl mx-auto tracking-[.3em] leading-relaxed"
        >
          We’re a cut above the rest, designing custom outdoor spaces
          <br />
          that are as beautiful as they are functional.
        </p>
      </div>

      <div
        id="hero-vid-sect"
        class="w-4/5 lg:h-[780px] bg-blue-100 mt-8 shadow-2xl rounded-2xl border-black border-8 mx-auto anihero"
      >
        <video
          class="w-full h-full bg-blue-100 object-cover"
          autoplay
          muted
          loop
        >
          <source src="/video/hero-video2.mp4" type="video/mp4" />
          Something went wrong while playing video
        </video>
      </div>
    </header>

    <header class="h-[600px] bg-gray-200 lg:hidden relative">
      <div
        class="bg-black text-white absolute top-0 left-0 h-full w-full opacity-50"
      ></div>

      <div class="text-white text-center absolute w-full bottom-[20%]">
        <div class="md:px-8">
          <p class="text-3xl px-3 font-black tracking-widest animate__animated animate__fadeInUp">
            TRANSFORM YOUR YARD INTO A
          </p>

          <VueWriter
            class="text-4xl pl-4 mt-2 font-black tracking-widest"
            :array="['MASTERPIECE!']"
            :iterations="1"
          />


          <p class="text-lg mx-2 mt-8  leading-normal tracking-widest">
            We’re a cut above the rest, designing custom outdoor spaces that are
            as beautiful as they are functional.
          </p>
        </div>

        <FilledButton
          background-color="white"
          text="Design Your Dream Yard Today"
          text-color="black"
          class="uppercase w-[80%] mt-12"
        />
      </div>

      <video class="w-full h-full object-cover" playsinline autoplay muted loop>
        <source src="/video/hero-video2.mp4" type="video/mp4" />
        Something went wrong while playing video
      </video>
    </header>
  </div>

  <div class="hidden lg:block text-center mt-16">
    <FilledButton
      background-color="black"
      text="Design Your Dream Yard Today"
      text-color="white"
      class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
    />
  </div>

  <div data-aos="fade-up">
    <!-- <p class="uppercase text-center font-inter   text-[12px]">
        Our Partners
      </p> -->

    <div class="lg:mt-8">
      <NuxtMarquee class="max-w-[55em] mx-auto" :speed="20">
        <img src="@/assets/svg/partners.svg" width="900" class="mx-auto" />
      </NuxtMarquee>
    </div>
  </div>
</template>
