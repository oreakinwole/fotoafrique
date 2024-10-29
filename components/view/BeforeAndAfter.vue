<script setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
</script>

<template>
  <!-- Before and After Section -->
  <div class="bg-[#F8F5F3] w-full pt-20 pb-1 my-40">
    <div class="flex flex-col justify-center items-center">
      <h3
        class="font-playfairDisplay font-[500] text-5xl text-black"
        data-aos-duration="2000"
        data-aos="fade-down"
      >
        Before
        <span class="text-[#A89C93] font-imperial font-[400]">&</span> After
      </h3>
      <p
        class="font-inter font-[400] text-xs text-[#665244] max-w-sm text-center mt-3"
      >
       See a sample of before and after Design by Us !
      </p>

      <NuxtLink to="portfolio">
        <OutlinedButton
          :no-action="true"
          border-color="#000"
          text-color="#000"
          background-color="#F8F5F3"
          text="SEE MORE"
          class="mt-8"
        />
      </NuxtLink>
      <!--       Image Comparison Slider-->
      <div
        class="px-32 my-20 h-[600px] relative"
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="2000"
      >
        <ImgComparisonSlider
          class="h-full rounded-2xl shadow-2xl border-black border-8"
        >
          <!-- eslint-disable -->
          <img
            slot="first"
            style="width: 1200px; object-fit: cover; height: 100%"
            src="@/assets/images/before.jpg"
          />
          <img
            slot="second"
            style="width: 1200px; object-fit: cover; height: 100%"
            src="@/assets/images/after.jpg"
          />

          <svg
            slot="handle"
            class="w-12"
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35.5" cy="35.5" r="35.5" fill="#D0C2B0" />
            <path
              d="M51.1997 34.4899L49.2297 32.5199L46.0197 29.3099C45.3397 28.6399 44.1797 29.1199 44.1797 30.0799V36.3099V41.9199C44.1797 42.8799 45.3397 43.3599 46.0197 42.6799L51.1997 37.4999C52.0297 36.6799 52.0297 35.3199 51.1997 34.4899Z"
              fill="white"
            />
            <path
              d="M20.8003 34.4899L22.7703 32.5199L25.9803 29.3099C26.6603 28.6399 27.8203 29.1199 27.8203 30.0799V36.3099V41.9199C27.8203 42.8799 26.6603 43.3599 25.9803 42.6799L20.8003 37.4999C19.9703 36.6799 19.9703 35.3199 20.8003 34.4899Z"
              fill="white"
            />
          </svg>

          <!-- eslint-enable -->
        </ImgComparisonSlider>

        <div
          class="bg-white w-[823px] h-[80px] rounded-[50px] absolute bottom-10 ml-[20%] z-10 p-3 flex gap-5 flex-row"
        >
          <div class="flex flex-row ml-12">
            <div class="absolute">
              <img src="@/assets/svg/img.svg" alt="customer picture" />
            </div>

            <div class="relative ml-[-47px]">
              <img src="@/assets/icons/cir.svg" alt="circle" />
            </div>
          </div>

          <div class="pt-1 ml-10">
            <h4 class="font-inter font-[500] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              luctus tem.
            </h4>
            <h4 class="font-[400] text-[#A89C93] text-[18px]">
              Nicole, Home Owner
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
