<script>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import image1 from "public/images/homethirdsegment/imgs/img(1).png";
import bg from "public/images/homethirdsegment/icons/bg.png";
import before from "public/images/homethirdsegment/imgs/image 28.svg";
import after from "public/images/homethirdsegment/imgs/after.svg";
import arrow from "public/images/homethirdsegment/icons/arrow.svg";
import customerpicture from "public/images/homethirdsegment/imgs/img.svg";
import circle from "public/images/homethirdsegment/icons/cir.svg";

export default {
  name: "HomeThirdSegment",
  components: { ImgComparisonSlider },
  data() {
    return {
      image1,
      bg,
      before,
      after,
      arrow,
      customerpicture,
      circle,
    };
  },
 
 
};
</script>

<template>
  <div class="home-third-segment bg-white">
    <div class="flex flex-col mb-48 pt-20">
      <div class="ml-28">
        <h4 class="font-playfairDisplay font-[500] text-8xl text-black">
          Our
          <span
            class="text-8xl font-[600] font-playfairDisplay text-[#A89C93] italic"
            >PASSION</span
          >
        </h4>

        <h4 class="font-playfairDisplay font-[500] text-8xl text-black">
          Is the
          <span
            class="text-8xl font-[600] font-playfairDisplay text-[#A89C93] italic"
            >WOW</span
          >
        </h4>
      </div>

      <div class="flex flex-row justify-end gap-24 mr-28 mt-[-3.5rem]">
        <div class="mt-[17rem]">
          <p
            class="font-inter text-[#665244] font-[400] text-xs max-w-xs leading-loose"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
            vestibulum tortor feugiat.
          </p>
          <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"
            class="mt-10"
          />
        </div>

        <div class="flex flex-row relative">
          <div class="flex-none mr-28">
            <img :src="image1" alt="house image" width="300" />
          </div>
          <div class="flex-none flex absolute right-6 bottom-20">
            <span
              class="text-xs font-[400] text-[#665244] font-inter rotate-90 whitespace-nowrap"
            >
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Before and After Section -->
    <div class="bg-[#F8F5F3] w-full pt-20 pb-1 mb-20">
      <div class="flex flex-col justify-center items-center">
        <h3 class="font-playfairDisplay font-[500] text-5xl text-black">
          Before
          <span class="text-[#A89C93] font-imperial font-[400]">&</span> After
        </h3>
        <p
          class="font-inter font-[400] text-xs text-[#665244] max-w-md text-center mt-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
          vestibulum tortor feugiat.
        </p>
        <OutlinedButton
          border-color="#000"
          text-color="#000"
          background-color="#F8F5F3"
          text="SEE MORE"
          class="mt-8"
        />
      </div>

      <!--       Image Comparison Slider-->
      <div class="px-32 my-20 h-[600px] relative">
        <ImgComparisonSlider class="h-full">
          <!-- eslint-disable -->
          <img
            class="rounded-2xl"
            slot="first"
            style="width: 100%; height: 100%"
            src="@/assets/images/before.png"
          />
          <img
            slot="second"
            style="width: 100%; height: 100%"
            src="@/assets/images/after.png"
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
          <img :src="customerpicture" alt="customer picture" />
        </div>

        <div class="relative ml-[-47px]">
          <img :src="circle" alt="circle" />
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

    <OurPortfolio class="mb-16" />
  </div>
</template>

<style scoped>
.comparison-slider {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.comparison-images {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.comparison-img {
  transition: clip-path 0.4s ease;
}

.before-image {
  clip-path: inset(0 50% 0 0);
}

.after-image {
  clip-path: inset(0 0 0 50%);
}

.slider-line {
  width: 4px;
  background-color: #a89c93;
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 2;
}

.slider-handle {
  z-index: 3;
  width: 71px;
  height: 71px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  cursor: pointer;
  position: absolute;
}
</style>
