<script>
import FilledButton from "~/components/reusuables/FilledButton/index.vue";
import garden from "public/images/hero/imgs/garden.png"
import chat from  "public/images/hero/icons/chat.png"

export default {
  name : 'Hero',
  components: {FilledButton},
  data()  {
    return {
      garden,
      chat
    }
  }
}
</script>

<template>
  <div class="bg-navbar-color w-full h-[50rem] flex flex-row pt-16 justify-evenly absolute">
    <div class="ml-20 mt-12 flex-1">
      <h1 class="uppercase font-[600] text-[80px] w-[60rem] font-playfairDisplay">
        Creating your dream outdoor space with
        the finest backyard
        designs
      </h1>

      <div class="mt-10">
        <FilledButton background-color="black" text="BOOK FREE CONSULTATION" text-color="white"/>
      </div>
    </div>

    <div class="mr-28 flex flex-row ">
      <img :src="garden" alt="garden image" class="w-[49rem] relative "/>
      <img :src="chat" alt="chat icon" class="w-[60px] h-[60px]  absolute right-20 top-[700px] cursor-pointer  ">
    </div>
  </div>
</template>

