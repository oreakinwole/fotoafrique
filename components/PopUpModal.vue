<script>
import closeIcon from "public/images/navbar/icons/Close.png";
export default {
  name: "PopUpModal",
  props: {
    text: {
      default: "",
      type: String,
      required: true,
    },
  },
  data() {
    return {
      closeIcon,
      isVisible: true,
    };
  },
  methods: {
    closeModal() {
      this.isVisible = false;
    },
    handleBookConsult() {
      const calendly = useCalendly();

      calendly.initPopupWidget({
        url: "https://calendly.com/d/2sx-n9t-6g7",
      });
    },
  },
};
</script>

<template>
  <div
    v-if="isVisible"
    @click="handleBookConsult"

    class="flex flex-row bg-black items-center justify-center relative h-[40px] font-inter text-[12px]"
  >
    <h4 class="text-white text-center uppercase cursor-pointer">{{ text }}</h4>
    <!-- <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-24" width="16" @click="closeModal"> -->
  </div>
</template>
