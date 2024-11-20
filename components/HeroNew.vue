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
        <VueWriter
          class="text-xs lg:text-md font-semibold tracking-[.6em]"
          :array="[`DON'T JUST LIKE YOUR YARD`]"
          :iterations="1"
          :typeSpeed="100"
        />
        <p
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
        </p>
        <p
          class="text-xs hidden lg:block max-w-lg lg:max-w-xl mx-auto tracking-[.3em] leading-relaxed"
        >
          Let us turn your outdoor space into a beautiful, <br />
          custom-designed haven that you’ll enjoy for years to come.
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

    <header class="h-[700px] bg-gray-200 lg:hidden relative">
      <div
        class="bg-black text-white absolute top-0 left-0 h-full w-full opacity-50"
      ></div>

      <div class="text-white text-center absolute w-full bottom-[35%]">
        <div class="px-5 md:px-8 space-y-4">
          <p
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="900"
            class="font-semibold text-md leading-normal tracking-[.2rem]"
          >
            DON’T JUST LIKE YOUR YARD
          </p>
          <p
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="900"
            class="text-7xl font-bold leading-tight tracking-wide"
          >
            LOVE IT!
          </p>

          <VueWriter
            class="text-lg leading-normal tracking-widest"
            :array="[`  DESIGN YOUR DREAM YARD`]"
            :iterations="1"
            :typeSpeed="100"
          />
        </div>

        <FilledButton
          background-color="white"
          text="Book Free Consultation"
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
      text="Design Your Dream Yard"
      text-color="white"
      class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
    />
  </div>

  <div class="pt-16" data-aos="fade-up">
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
