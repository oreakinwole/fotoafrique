<script>
import icon1 from "public/images/getyouryard/icon/Rectangle 263.png";
import icon2 from "public/images/getyouryard/icon/Rectangle 427.png";

export default {
  name: "GetYourYard",
  data() {
    return {
      icon1,
      icon2,
    };
  },
};
</script>

<template>
  <div >
    <div class="">
      <div class="flex justify-center items-center text-center">
        <div
          class="font-playfairDisplay italic font-[600] text-6xl flex flex-row gap-3"
        >
          <h1>Meet</h1>
          <img :src="icon1" alt="icon 1" width="120" class="mx-2" />
          <h1>
            The

            Designer
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
