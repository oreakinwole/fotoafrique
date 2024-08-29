<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
</script>

<template>
  <div>
    <div class="pl-28">
      <p class="font-playfairDisplay text-6xl py-10 font-[500]">
        Custom <span class="italic text-new-gray">3D Design</span> Assets
      </p>
      <ul class="flex justify-between max-w-[280px] font-medium">
        <li>Front Yard</li>
        <li class="text-new-gray">Back Yard</li>
        <li class="text-new-gray">Full Yard</li>
      </ul>

      <div class="py-28">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <!-- <div class="carousel__item">{{ slide }}</div> -->

            <img src="@/assets/images/flowerr__.png" />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>

    <section class=" text-center">
      <p class="max-w-screen-md leading-8 mx-auto text-[#665244] mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat. Lorem ipsum dolor sit amet, consectetur
        adipiscing. Suspendisse pharetra est nunc, eget varius libero pretium
      </p>

      <button class="uppercase text-sm py-4 px-10 border border-black">Schedule a call</button>
    </section>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
