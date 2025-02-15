<script setup>
import "animate.css";
</script>

<template>
  <div class="landing-container">
    <div class="relative h-screen w-full">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url(https://ucarecdn.com/a77858be-87a3-4f94-9748-4027395b2542/136webormlsDSC09413.jpg)`,
        }"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 class="text-5xl font-bold md:text-6xl">Our Build Process</h1>
        <p class="mt-4  mb-12 text-lg md:text-xl max-w-2xl">
          Professional landscape design simplified
        </p>
        <FilledButton
          background-color="black"
          text="GET STARTED TODAY"
          text-color="white"
          class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
        />
      </div>
    </div>
    <ViewBuildSteps />
    <ViewTestimonial />

    <!-- <ViewWhatWeDo /> -->
    <!-- <ViewWhyChooseUs /> -->
  </div>
</template>

<style scoped>
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
</style>
