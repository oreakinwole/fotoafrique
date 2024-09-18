<script>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

import img1 from "public/images/homesecondsegment/imgs/Mask group.png";
import img2 from "public/images/homesecondsegment/imgs/Mask group2.png";
import acher from "public/images/homesecondsegment/icons/Acher Stone.png";
import angelus from "public/images/homesecondsegment/icons/Angelus logo 1.png";
import belgard from "public/images/homesecondsegment/icons/belgard.png";
import orco from "public/images/homesecondsegment/icons/Orco.png";
import techo from "public/images/homesecondsegment/icons/Techo bloc.png";
import unilock from "public/images/homesecondsegment/icons/Unilock.png";
import icon1 from "public/images/getyouryard/icon/Rectangle 263.png";
import icon2 from "public/images/getyouryard/icon/Rectangle 427.png";
import house1 from "public/images/homesecondsegment/imgs/house1.png";
import house2 from "public/images/homesecondsegment/imgs/house2.png";
import backyard from "public/images/homesecondsegment/imgs/Backyard.svg";
import frontyard from "public/images/homesecondsegment/imgs/frontyard.svg";
import fullyard from "public/images/homesecondsegment/imgs/FullYard.svg";
import renovation from "public/images/homesecondsegment/imgs/Renovation.svg";
import greaterthanicon from "public/images/homesecondsegment/icons/grt.svg";
import lessthanicon from "public/images/homesecondsegment/icons/lst.svg";
import customerpicture from "public/images/homethirdsegment/imgs/img.svg";
import circle from "public/images/homethirdsegment/icons/cir.svg";


export default {
  name: "HomeSecondSegment",
  components: { ImgComparisonSlider },

  data() {
    return {
      img1,
      img2,
      acher,
      angelus,
      belgard,
      orco,
      techo,
      unilock,
      icon1,
      icon2,
      house1,
      house2,
      frontyard,
      backyard,
      fullyard,
      renovation,
      greaterthanicon,
      lessthanicon,
      customerpicture,
      circle
    };
  },
};
</script>

<template>
  <div class="pt-20 px-20">
    <section class="flex gap-x-8 justify-between h-[530px] py-10">
      <div class="w-1/3 h-full">
        <img
          src="@/assets/images/pool1.png"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-2/3 h-full">
        <p class="max-w-xl text-3xl" data-aos="fade-in" data-aos-duration="2000">
          WE STRIVE TO ENHANCE THE SYNERGY BETWEEN AESTHETICS, STRUCTURE, AND
          ENVIRONMENTAL DESIGN.
        </p>

        <div class="my-4 mt-20 grid grid-cols-3">
          <div class="place-content-end">
            <p class="font-medium">The best design for your space</p>
            <span class="text-new-gray">Located in San Diego</span>
          </div>

          <div>&nbsp;</div>
          <img class="spin_mod" src="@/assets/images/port1.png" width="200"  />
        </div>

        <div class="max-w-20 ">
          <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"
          />
        </div>
      </div>
    </section>
  </div>

  <DesignProcess />
  <GetYourYard />

    <!-- Before and After Section -->
    <div class="bg-[#F8F5F3] w-full pt-20 pb-1 mb-20">
      <div class="flex flex-col justify-center items-center">
        <h3 class="font-playfairDisplay font-[500] text-5xl text-black">
          Before
          <span class="text-[#A89C93] font-imperial font-[400]">&</span> After
        </h3>
       
       
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

    
    </div>



  <div class="flex justify-center items-center text-center pt-20">
    <div
      class="font-playfairDisplay italic font-[600] text-6xl flex flex-row gap-3"
    >
      <h1>The</h1>
      <img :src="icon1" alt="icon 1" width="150" class="mx-2" />
      <h1>Outdoor Oasis</h1>
    </div>
  </div>

  <div class="flex justify-center items-center text-center">
    <div
      class="font-playfairDisplay italic font-[600] text-6xl flex flex-row gap-3"
    >
      <h1>A Contemporary Yard Design for</h1>
    </div>
  </div>

  <div class="flex justify-center items-center text-center mt-6">
    <div
      class="font-playfairDisplay italic font-[600] text-6xl flex flex-row gap-3"
    >
      <h1>The Modern</h1>
      <img :src="icon2" alt="icon 2" width="150" class="mx-2" />
      <h1>Lifestyle</h1>
    </div>
  </div>

  
  <div class="h-[600px] mt-14 relative px-28">
    <video
      id="myVideo"
      src="/Ashlee_Wilson.mp4"
      autoplay="true"
      loop
      muted
      class="h-full object-cover rounded-3xl"
    ></video>

    <!-- <div class="absolute top-32">
     <h3 class="text-white ml-20 flex flex-col font-playfairDisplay font-[500] text-[70px]">Creating curb appeal <span>One home at a time</span></h3>
   </div> -->
  </div>


 
<!-- 
  <div class="flex flex-row justify-evenly mt-44 w-full bg-[#F8F5F3] pt-14">
    <div class="mt-44">
      <img :src="house1" alt="house 1" class="w-[350px] h-[389px]" />
    </div>

    <div class="text-center leading-[8rem]">
      <p class="font-inter font-[400] text-[16px] uppercase">
        Shop By Category
      </p>
      <h4
        class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer"
      >
        New Construction
      </h4>
      <h4
        class="font-playfairDisplay font-[500] text-[60px] text-black cursor-pointer"
      >
        Home Design
      </h4>
      <h4
        class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer"
      >
        Pool Design
      </h4>
      <h4
        class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer"
      >
        Horticulture
      </h4>
      <h4
        class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer"
      >
        Outdoor Decor
      </h4>
      <p class="underline font-[500] text-[16px] uppercase cursor-pointer">
        See More
      </p>
    </div>

    <div class="mt-44">
      <img :src="house2" alt="house 2" class="w-[350px] h-[389px]" />
    </div>
  </div> -->

  <div class="mt-40 flex" data-aos-duration="2000" data-aos-delay="400" data-aos="fade-in">
    <div class="ml-32 mt-20">
      <div>
        <h4 class="font-playfairDisplay text-5xl font-[500]">
          Packa<span class="text-[#A89C93] font-imperial font-[400] text-6xl"
            >G</span
          >es
        </h4>
      </div>

      <p
        class="text-[#665244] text-xs font-[400] font-inter max-w-lg leading-relaxed"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat.
      </p>

      <FilledButton
        background-color="black"
        text="GET STARTED"
        text-color="white"
        class="mt-6"
      />
    </div>

    <div>
      <div class="ml-20">
        <div class="flex flex-row gap-8">
          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img
                :src="frontyard"
                alt="frontyard picture"
                class="w-full h-full"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              ></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Front Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$1,890.80</p>
            </div>
          </div>

          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img
                :src="backyard"
                alt="backyard picture"
                class="w-full h-full"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              ></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Back Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$1,745.99</p>
            </div>
          </div>

          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img
                :src="fullyard"
                alt="fullyard picture"
                class="w-full h-full"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              ></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Full Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
            </div>
          </div>

          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img
                :src="renovation"
                alt="renovation picture"
                class="w-full h-full"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              ></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Renovation</h4>
              <p class="font-[400] font-inter text-[16px]">$45.80</p>
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-row justify-between mt-12">
            <div class="w-[67.8rem] h-[1px] bg-[#A89C93]"></div>

            <div
              class="flex flex-row gap-8 justify-end mr-[17.8rem] font-[300] mt-[-9px]"
            >
              <img
                :src="lessthanicon"
                alt="less than icon"
                class="cursor-pointer"
              />
              <img
                :src="greaterthanicon"
                alt="graeter than icon"
                class="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#myVideo {
  /* position: fixed;
  right: 0;
  bottom: 0; */
  min-width: 100%;
  min-height: 100%;
}
</style>