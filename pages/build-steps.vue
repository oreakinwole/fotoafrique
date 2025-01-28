<script setup>
import "animate.css";
</script>

<template>
  <div class="landing-container">
    <div class="relative h-screen w-full">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5812/fccf/3f5e0cd05ea26dc78e496ca26ddb232e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9wKg8aTAlN6gblnqNIrbA1qGOZiXpjeCN0N5vRbzwHRPNRup-3HGL7bDSf5ar-a3tMIi~5PXT0R4vUosiMV1qxTMw3DOax3bBnuj~o4QmISYHQ9v8qTbVjJgQnShnSbGcjWjk1RUA7Bsflk5MYXvrxsuF4v64nQ8rO~w7mj0zR703mCrzwoPbYUYyt-5AKuGD35Nog001qw2YXJkeaP2bg1oDYVihRIsbxTsOKkL3CvM-GFaUsarbrHt~MmAcfDjbveqi1DD5AYF~YQ2c0GVj2vA4XFmXE8gsU7uwP7~WiilKW9S2-vwJelxV9tKuJTACV2YnPkF4im5lEwlESSUw__')`,
        }"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 class="text-5xl font-bold md:text-6xl">Landscape Design</h1>
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
