<script setup>
// import autoAnimate from "@formkit/auto-animate";
// const autoAniSection = ref();
const animateCaption = ref(false);

onMounted(() => {
  // autoAnimate(autoAniSection.value);

  animateCaption.value = true;
});
</script>

<template>
  <div>
    <div
      class="cursor-wait min-h-screen pt-28 bg-[url('@/assets/images/hero_bg2.png')] bg-no-repeat bg-top bg-cover"
    >
      <div class="text-center space-y-3">
        <VueWriter
          class="text-md font-semibold tracking-[.6em]"
          :array="[`DON'T JUST LIKE YOUR YARD`]"
          :iterations="1"
          :typeSpeed="100"
        />
        <p class="text-8xl font-bold flex items-center justify-center">
          L
          <span
            class="transition-all delay-[2600ms] duration-1000 ease-in-out w-9 h-9 py-6 px-7 border-[12px] border-black rounded-full hover:rounded-5xl"
            :class="animateCaption && 'lg:px-36'"
          >
            &nbsp;
          </span>

          VE IT<span
            class="animate__animated animate__bounceIn animate__delay-4s"
            >!</span
          >
        </p>
        <p
          class="text-xs font-light max-w-xl mx-auto tracking-[.3em] leading-relaxed"
        >
          Let us turn your outdoor space into a beautiful, <br />
          custom-designed haven that you’ll enjoy for years to come.
        </p>
      </div>

      <img src="@/assets/images/screen.jpg" width="80%" class="mx-auto mt-12" />
    </div>

    <!-- <div class="pt-48 mb-36 h-96" data-aos="fade-up" data-aos-duration="2000">
      <p class="uppercase text-center font-inter font-[400] text-[12px]">
        Our Partners
      </p>

      <div class="mt-8">
        <img src="@/assets/svg/partners.svg" width="900" class="mx-auto" />
      </div>
    </div> -->
  </div>
</template>

<style></style>
