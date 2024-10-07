<script setup lang="ts">
</script>

<template>
  <div>
    <div class="pl-28 pt-28">
      <p class="font-playfairDisplay text-6xl py-10 font-[500]">
        Custom <span class="italic text-new-gray">3D Design</span> Assets
      </p>
      <ul class="flex justify-between max-w-[280px] font-medium">
        <li>Front Yard</li>
        <li class="text-new-gray">Back Yard</li>
        <li class="text-new-gray">Full Yard</li>
      </ul>

      <div class="py-28">
        <AssetsSlider />
      </div>
    </div>

    <section class="text-center mb-32">
      <p class="max-w-screen-md leading-8 mx-auto text-[#665244] mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat. Lorem ipsum dolor sit amet, consectetur
        adipiscing. Suspendisse pharetra est nunc, eget varius libero pretium
      </p>

      <OutlinedButton
        border-color="#000"
        text-color="#000"
        background-color="white"
        text="SCHEDULE A CALL"
        class="mt-10"
      />
    </section>

    <OurPortfolio />
  </div>
</template>
