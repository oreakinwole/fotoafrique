<script>
import image1 from "public/images/homethirdsegment/imgs/img(1).png";
import owner from "public/images/homethirdsegment/imgs/owner.png";
import bg from "public/images/homethirdsegment/icons/bg.png";
import before from "public/images/homethirdsegment/imgs/image 28.svg";
import after from "public/images/homethirdsegment/imgs/after.svg";
import arrow from "public/images/homethirdsegment/icons/arrow.svg";
import circle from "public/images/homethirdsegment/icons/cir.svg";

export default {
  name: "HomeThirdSegment",
  data() {
    return {
      image1,
      bg,
      before,
      after,
      arrow,
      circle,
      owner
    };
  },
 
 
};
</script>

<template>
  <div class="home-third-segment bg-white">
    <div class="flex flex-col mb-48 pt-20">
      <div class="ml-28">
    <MeetDesigner class="mb-20"/>

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
            data-aos-duration="1000"  data-aos="fade-up"
            >WOW</span
          >
        </h4>
      </div>

      <div class="flex flex-row justify-end gap-24 mr-28 mt-[-3.5rem]">
        <div class="mt-[17rem]"  data-aos-duration="1000"  data-aos="fade-up">
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
            text="TRANSFORM YOUR YARD"
            class="mt-10"
          />
        </div>

        <div class="flex flex-row relative">
          <div class="flex-none mr-28" data-aos-duration="2000"  data-aos="slide-up">
            <img :src="owner" alt="Meet the designer" width="300" />
          </div>
          <!-- <div class="flex-none flex absolute right-6 bottom-20">
            <span
              class="text-xs font-[400] text-[#665244] font-inter rotate-90 whitespace-nowrap"
            >
              Lorem ipsum dolor sit amet
            </span>
          </div> -->
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
