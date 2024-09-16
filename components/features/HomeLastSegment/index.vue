<script>
import house from "public/images/homelastsegment/imgs/house.png";
import blueHouse from "/public/images/homelastsegment/imgs/Mask group(2).png";
import instagram from "/public/images/homelastsegment/icons/ant-design_instagram-filled.png";
import image1 from "public/images/homelastsegment/imgs/Image 1.png";
import image2 from "public/images/homelastsegment/imgs/Image 2.png";
import image3 from "public/images/homelastsegment/imgs/Image 3.png";
import image4 from "public/images/homelastsegment/imgs/Image 4.png";
import backyard from "public/images/homesecondsegment/imgs/Backyard.svg";
import frontyard from "public/images/homesecondsegment/imgs/frontyard.svg";
import fullyard from "public/images/homesecondsegment/imgs/FullYard.svg";
import renovation from "public/images/homesecondsegment/imgs/Renovation.svg";
import greaterthanicon from "public/images/homesecondsegment/icons/grt.svg";
import lessthanicon from "public/images/homesecondsegment/icons/lst.svg";
import icon2 from "public/images/getyouryard/icon/Rectangle 427.png";

export default {
  name: "HomeLastSegment",
  data() {
    return {
      house,
      blueHouse,
      instagram,
      image1,
      image2,
      image3,
      image4,
      frontyard,
      backyard,
      fullyard,
      renovation,
      greaterthanicon,
      lessthanicon,
      icon2
    };
  },
};
</script>

<template>


  <div>
    <div class="flex flex-row justify-between px-44 pt-28">
      <p class="text-black font-[600] text-[32px] font-playfairDisplay">
        #modernyardz
      </p>

      <div class="flex flex-row gap-2 cursor-pointer">
        <img :src="instagram" alt="instagram icon" class="w-[24px] h-[24px]" />
        <p class="uppercase font-inter font-[400] text-[16px] text-[#665244]">
          Follow us on instagram
        </p>
      </div>
    </div>

    <div class="flex flex-row justify-evenly px-36 pt-10">
      <img :src="image1" alt="image1" class="w-[367px] h-[392px]" />
      <img :src="image2" alt="image2" class="w-[366px] h-[392px]" />
      <img :src="image3" alt="image3" class="w-[366px] h-[392px]" />
      <img :src="image4" alt="image4" class="w-[366px] h-[392px]" />
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



</template>

