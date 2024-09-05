<script>
import house from "public/images/homelastsegment/imgs/house.png";
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import blueHouse from "/public/images/homelastsegment/imgs/Mask group(2).png";
import instagram from "/public/images/homelastsegment/icons/ant-design_instagram-filled.png";
import image1 from "public/images/homelastsegment/imgs/Image 1.png";
import image2 from "public/images/homelastsegment/imgs/Image 2.png";
import image3 from "public/images/homelastsegment/imgs/Image 3.png";
import image4 from "public/images/homelastsegment/imgs/Image 4.png";
export default {
  name: "HomeLastSegment",
  components: { OutlinedButton },
  data() {
    return {
      house,
      blueHouse,
      instagram,
      image1,
      image2,
      image3,
      image4,
    };
  },
};
</script>

<template>
  <div>
    <img :src="house" alt="house img" />
  </div>

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
</template>

