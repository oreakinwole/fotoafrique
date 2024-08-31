<script>
import closeIcon from "public/images/navbar/icons/Close.png"
export default {
  name: 'PopUpModal',
  props: {
    text: {
      default: '',
      type: String,
      required: true
    }
  },
  data() {
    return {
      closeIcon,
      isVisible: true,
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false;
    }
  }
}
</script>

<template>
  <div v-if="isVisible" class="flex flex-row bg-black items-center justify-center relative h-[40px] font-inter text-[12px]">
    <h4 class="text-white text-center uppercase cursor-pointer">{{text}}</h4>
    <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-24" width="16" @click="closeModal">
  </div>
</template>
