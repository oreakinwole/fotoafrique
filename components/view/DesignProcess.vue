<script setup>
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.to("#desing-p-mobile", {
//     x: -950,

//     scrollTrigger: {
//       trigger: "#desing-p-mobile",
//       pin: true,
//       scrub: true,
//       start: "bottom 50%",
//     },
//   });
// });
</script>

<template>
  <div id="design-process" class="mt-20 lg:mt-28 w-screen">
    <div
      class="px-2 md:px-8 lg:px-20 text-center mb-20"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <h4 class="font-playfairDisplay text-4xl lg:text-5xl font-semibold mb-2">
        Our Design Pro<span
          class="text-[#A89C93] font-imperial font-normal text-5xl lg:text-6xl"
          >C</span
        >ess
      </h4>

      <p class="text-xl">
        Simple Steps to Your Dream Yard, Here’s how it works:
      </p>
      <p
        class="text-lg text-[#454545] mt-4 lg:max-w-screen-sm leading-relaxed lg:mx-auto"
      >
        Creating the outdoor space you’ve always wanted is easier than you
        think. Our collaborative design process ensures that every step is clear
        and tailored to your needs, from the first meeting to the final
        installation.
      </p>
    </div>

    <MobileDesignProcess />

   <!-- Write Your Code here -->


   <!-- End here -->

    <footer class="lg:px-20 mt-14 text-center">
      <p class="text-[#454545] font-semibold mb-4">Ready to Get Started?</p>
      <FilledButton
        background-color="black"
        text="book free design consult"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px]"
      />
    </footer>
  </div>
</template>
