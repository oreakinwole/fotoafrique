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
  <div>
    <div
      class="min-h-[470px] lg:min-h-screen pt-28 bg-[url('@/assets/images/hero_bg1.png')] bg-no-repeat bg-top bg-cover"
    >
      <div class="text-center space-y-3">
        <VueWriter
          class="text-xs lg:text-md font-semibold tracking-[.6em]"
          :array="[`DON'T JUST LIKE YOUR YARD`]"
          :iterations="1"
          :typeSpeed="100"
        />
        <p class="text-6xl lg:text-8xl font-bold flex items-center justify-center">
          L
          <span
            class="transition-all delay-[2600ms] duration-1000 ease-in-out w-9 h-9 py-4 lg:py-6 px-4 lg:px-7 border-[9px] lg:border-[12px] border-black rounded-full hover:rounded-5xl"
            :class="animateCaption && 'px-20 lg:px-36'"
          >
            &nbsp;
          </span>

          VE IT<span
            class="animate__animated animate__bounceIn animate__delay-4s"
            >!</span
          >
        </p>
        <p
          class="text-xs hidden lg:block max-w-lg  lg:max-w-xl mx-auto tracking-[.3em] leading-relaxed"
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
    </div>

    <!-- <div class="pt-48 mb-36 h-96" data-aos="fade-up" data-aos-duration="2000">
      <p class="uppercase text-center font-inter font-[400] text-[12px]">
        Our Partners
      </p>

      <div class="mt-8">
        <NuxtMarquee class="max-w-[55em] mx-auto" :speed="20">
          <img src="@/assets/svg/partners.svg" width="900" class="mx-auto" />
        </NuxtMarquee>
      </div>
    </div> -->
  </div>
</template>
