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

    class="flex flex-row bg-black items-center justify-center relative h-[40px] font-inter text-[12px] gas xe"
  >
    <h4 class="text-white text-center uppercase cursor-pointer number">{{ text }}</h4>
    <!-- <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-24" width="16" @click="closeModal"> -->
  </div>
</template>


<style lang="scss">
.gas {
  --blur: 1.75rem;
  --box-blur: calc(0.5 * var(--blur));
  --glow: var(--color);
  --size: 12rem;
  
  border: 1px solid currentColor;
  box-shadow: 
    /* --- "glass" tube --- */
    /* inside */ inset 0 0 0 2px rgba(0, 0, 0, 0.15),
    /* outside */      0 0 0 2px rgba(0, 0, 0, 0.15),
    /* --- glow --- */
    /* inside */ inset 0 0 var(--box-blur) var(--glow),
    /* outside */      0 0 var(--box-blur) var(--glow);
  color: var(--color, white);

  .number { 
    font-weight: 700; 
  }
  
  .symbol { 
    font-size: 4rem; 
    font-family: 'Neon Glow';
    text-shadow: 0 0 var(--blur) var(--glow);
  }
  
  &.he { --color: #FCEAAC; filter: saturate(175%); }
  &.ne { --color: #FDA802; filter: brightness(110%); }
  &.ar { --color: #E555C7; filter: brightness(125%); }
  &.kr { --color: #B7E7F7; filter: saturate(200%); }
  &.xe { --color: #C4C4C6; filter: brightness(105%); }
}
</style>