<script>
import dummyProfileIcon from "public/images/navbar/icons/Icon Frame.png";
import modernYardzIcon from "public/images/navbar/imgs/logo.png";
import modernYardzIconwhite from "public/images/navbar/imgs/bg-logo.png";
import menu from "public/images/navbar/icons/menu.png";
import closeWhite from "public/images/navbar/icons/closewhite.png";
import pix1 from "public/images/navbar/imgs/Rectangle 426.png";
import pix2 from "public/images/navbar/imgs/Rectangle 427.png";
export default {
  name: "MobileNavBar",
  data() {
    return {
      dummyProfileIcon,
      modernYardzIcon,
      menu,
      closeWhite,
      modernYardzIconwhite,
      pix1,
      pix2,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <div class="flex flex-row justify-between w-full h-[50px] items-center px-4">
    <!-- Hamburger menu icon -->
    <div @click="toggleMenu" class="cursor-pointer">
      <div class="space-y-2">
        <!-- <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span> -->

        <img :src="menu" alt="menu" class="w-[25px] h-[25px]" />
      </div>
    </div>

    <!-- Logo -->
    <div>
      <img :src="modernYardzIcon" alt="logo" class="w-[55px] h-[18px]" />
    </div>

    <!-- Profile icon -->
    <div>
      <img
        :src="dummyProfileIcon"
        alt="dummy profile"
        class="w-[14px] h-[14px]"
      />
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-0 left-0 w-full h-full bg-black shadow-md z-60"
    >
      <div class="flex flex-row justify-between px-4 pt-10">
        <div class="pl-2">
          <img
            :src="modernYardzIconwhite"
            alt="logo"
            class="w-[55px] h-[20px]"
          />
        </div>

        <div @click="toggleMenu">
          <img :src="closeWhite" alt="close" class="w-[20px] h-[20px]" />
        </div>
      </div>
      <ul
        class="flex flex-col pt-14 gap-5 text-[#666666] font-inter font-[400] text-[23px] pl-2"
      >
        <li class="py-2 px-4 cursor-pointer">Home</li>
        <li class="py-2 px-4 cursor-pointer">Services</li>
        <li class="py-2 px-4 cursor-pointer">Gallery</li>
        <li class="py-2 px-4 cursor-pointer">Contact</li>
        <li class="py-2 px-4 cursor-pointer">3D Packages</li>
        <li class="py-2 px-4 cursor-pointer"></li>
      </ul>

      <div class="flex flex-row pt-[7rem]">
        <div>
          <img :src="pix1" alt="picture 1" />
        </div>

        <div class="pt-5">
          <img :src="pix2" alt="picture 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add some styles for the hamburger */
</style>
