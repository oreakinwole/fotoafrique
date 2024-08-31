<script>
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import icon1 from "public/images/getyouryard/icon/Rectangle 263.png";
import icon2 from "public/images/getyouryard/icon/Rectangle 427.png";

export default {
  name: "GetYourYard",
  components: { OutlinedButton },
  data() {
    return {
      icon1,
      icon2,
    };
  },
};
</script>

<template>
  <div class="pt-32">
    <div class="flex justify-center items-center text-center">
      <div
        class="font-playfairDisplay italic font-[600] text-6xl flex flex-row gap-3"
      >
        <h1>Get</h1>
        <img :src="icon1" alt="icon 1" width="120" class="mx-2" />
        <h1>Your Yard Design</h1>
      </div>
    </div>

    <div class="flex justify-center items-center text-center">
      <div class="font-playfairDisplay italic font-[600] text-6xl flex gap-3">
        <h1>Started In Simple</h1>
        <img :src="icon2" alt="icon 2" width="120" class="mx-2" />
        <h1>Steps</h1>
      </div>
    </div>

    <div class="flex justify-center items-center mt-12">
      <p class="text-center text-[#665244] font-[400] text-xs max-w-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus
        tempor malesuada. Ut vitae lorem id mi vulputate gravida ut in arcu.
      </p>
    </div>
  </div>
  <div class="flex justify-center items-center mt-8">
    <OutlinedButton
      border-color="#000"
      text-color="#000"
      background-color="white"
      text="GET IN TOUCH"
    />
  </div>
</template>
