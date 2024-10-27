<script>
import instagram from "/public/images/homelastsegment/icons/ant-design_instagram-filled.png";
import image1 from "public/images/homelastsegment/imgs/Image 1.png";
import image2 from "public/images/homelastsegment/imgs/Image 2.png";
import image3 from "public/images/homelastsegment/imgs/Image 3.png";
import image4 from "public/images/homelastsegment/imgs/Image 4.png";

export default {
  name: "HomeLastSegment",

  data() {
    return {
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
  <div class="cursor-default bg-black h-[600px] relative">
    <div class="absolute top-28 left-20 z-10 ">
      <h3 class="text-white leading-normal font-playfairDisplay font-[600] text-5xl">
        Not sure where to start?<br />
        Take our quiz to find your<br />
        design package.
      </h3>

      <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="transparent"
        text="TAKE A QUIZ"

        class="mt-10"
      />
    </div>

    <div class="bg-black absolute top-0 left-0 h-full w-full opacity-85"></div>

    <video class="w-full h-full object-cover" autoplay muted loop>
      <source src="/video/quizvid.mp4" type="video/mp4" />
      Something went wrong while playing video
    </video>
  </div>

  <div class="cursor-default">
    <div class="flex flex-row justify-between px-44 pt-28 ig">
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

    <div class="flex flex-row justify-evenly gap-5 px-36 pt-10 ig">
      <img
        :src="image1"
        alt="image1"
        class="w-[367px] h-[392px] lg:w-[270px] lg:h-[320px] pix"
      />
      <img
        :src="image2"
        alt="image2"
        class="w-[366px] h-[392px] lg:w-[270px] lg:h-[320px] pix"
      />
      <img
        :src="image3"
        alt="image3"
        class="w-[366px] h-[392px] lg:w-[270px] lg:h-[320px] pix"
      />
      <img
        :src="image4"
        alt="image4"
        class="w-[366px] h-[392px] lg:w-[270px] lg:h-[320px] pix"
      />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1450px) {
  .pix {
    width: 367px;
    height: 392px;
  }
}

@media (max-width: 500px) {
  .ig {
    display: none;
  }
}
</style>
