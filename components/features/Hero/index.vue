<script>
import VueWriter from "vue-writer";
import garden from "public/images/hero/imgs/garden.png";
import chat from "public/images/hero/icons/chat.png";
import FilledButton from "~/components/reusuables/FilledButton/index.vue";

export default {
  name: "Hero",
  components: { FilledButton, VueWriter },
  data() {
    return {
      garden,
      chat,
    };
  },
};
</script>

<template>
  <div
    class="bg-navbar-color w-full flex flex-col lg:flex-row pt-12 justify-between"
  >
    <!-- first container -->
    <div class="flex-1 absolute lg:ml-[8rem]">
      <VueWriter
        class="uppercase font-semibold text-5xl font-playfairDisplay leading-tight text-left lg:max-w-xl"
        :array="['with the finest backyard designs', 'tailored to your needs']"
        :typeSpeed="100"
        :delay="500"
        :iterations="1"
      >
        <h3
          class="uppercase font-semibold text-5xl font-playfairDisplay leading-tight text-left lg:max-w-xl"
        >
          Creating your dream outdoor space
        </h3>
      </VueWriter>

      <div class="mt-14">
        <FilledButton
          background-color="black"
          text="BOOK FREE CONSULTATION"
          text-color="white"
        />
      </div>
    </div>

    <!--second container -->

    <div
      class="relative flex flex-1 justify-center items-center lg:mt-0 lg:ml-[49rem]"
    >
      <img :src="garden" alt="garden image" width="500" />
      <!-- <img :src="chat" alt="chat icon" class="w-[65px] h-[65px]  right-4 bottom-4 lg:right-[10rem] lg:bottom-10 cursor-pointer fixed z-50" /> -->
    </div>
  </div>
</template>
