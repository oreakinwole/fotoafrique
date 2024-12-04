<script setup></script>

<template>
  <div>
    <div
      class="hidden lg:block bg-black h-[700px] relative"
    >
      <div
        class="bg-gray-900 absolute top-0 left-0 h-full w-full opacity-50"
      ></div>

      <video class="w-full h-full object-cover" autoplay muted loop>
        <source src="/video/new_hero-vid.mp4" type="video/mp4" />
        Something went wrong while playing video
      </video>
    </div>

    <MobileHero />
  </div>

  <div class="hidden lg:block text-center mt-16">
    <FilledButton
      background-color="black"
      text="Design Your Dream Yard Today"
      text-color="white"
      class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
    />
  </div>
</template>
