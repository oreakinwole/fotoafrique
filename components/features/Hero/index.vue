<script>

import garden from "public/images/hero/imgs/garden.png";
import chat from "public/images/hero/icons/chat.png";
import FilledButton from "~/components/reusuables/FilledButton/index.vue";

export default {
  name: "Hero",
  components: {FilledButton},
  data() {
    return {
      garden,
      chat,
    };
  },
};
</script>

<template>

  <div class="bg-navbar-color w-full flex flex-col lg:flex-row pt-64 justify-between">
    <!-- first container -->
    <div class="mt-20 flex-1 absolute lg:ml-[8rem]">
      <h3 class="uppercase font-semibold text-4xl lg:text-6xl xl:text-[70px] font-playfairDisplay leading-tight text-left lg:w-[55rem]" style="line-height: 90px">
        Creating your dream
        outdoor space
        with the finest backyard
        designs
      </h3>

      <div class="mt-20">
        <FilledButton background-color="black" text="BOOK FREE CONSULTATION" text-color="white" />
      </div>
    </div>

    <!--second container -->

    <div class="relative flex flex-1 justify-center items-center  lg:mt-0 lg:ml-[49rem] ">
      <img :src="garden" alt="garden image" class="w-full lg:w-auto max-w-[48rem]" />
      <img :src="chat" alt="chat icon" class="w-[65px] h-[65px]  right-4 bottom-4 lg:right-[10rem] lg:bottom-10 cursor-pointer fixed z-50" />
    </div>
  </div>
</template>
