<script setup>
import pr1Img from "@/assets/images/designp_1.webp";
import pr2Img from "@/assets/images/designp_2.webp";
import pr3Img from "@/assets/images/designp_3.webp";
import pr4Img from "@/assets/images/designp_4.webp";
const dProcesses = [
  {
    title: "Free Design Consultation",
    descr:
      "  We start with a free consultation to discuss your vision and goals.",
    img: pr1Img,
  },

  {
    title: "2D Landscape Design",
    descr:
      "We create a 2D design plan that shows a clear, overhead view of your future landscape.",
    img: pr2Img,
  },

  {
    title: "3D Design Renderings",
    descr:
      "We take it a step further by transforming the 2D plan into a realistic 3D rendering.",
    img: pr3Img,
  },
  {
    title: "Comprehensive Quote",
    descr:
      "Once the design is finalized, we provide a detailed, itemized quote.",
    img: pr4Img,
  },
];

const isViewing = ref(0);

const handleChangeView = (index) => (isViewing.value = index);
</script>

<template>
  <!--our portfolio -->
  <div class="h-[780px] relative pt-32 pb-32 px-28 bg-black text-white">
    <div class="flex justify-between font-thin text-xl mb-2">
      <p role="button">Next</p>
      <p role="button">Prev</p>
    </div>

    <div
      class="h-full relative pt-8 bg-gray-900 bg-[url(@/assets/images/designp_1.webp)] bg-no-repeat bg-center bg-cover bg-opacity-50 bg-blend-overlay"
      :class="`bg-[url(${pr1Img})]`"
    >
      <h3
        class="max-w-[400px] uppercase tracking-widest mx-auto text-center text-white font-light text-md mb-[-7rem]"
      >
        {{ dProcesses[isViewing].descr }}
      </h3>
    </div>

    <h4
      class="max-w-96 uppercase absolute bottom-10 text-center left-[36%] text-white font-[700] text-5xl leading-relaxed tracking-wider"
    >
      {{ dProcesses[isViewing].title }}
    </h4>
  </div>
</template>
