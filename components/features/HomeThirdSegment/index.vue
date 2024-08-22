<script>
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import image1 from "public/images/homethirdsegment/imgs/img(1).png";
import OurPortfolio from "~/components/reusuables/OurPortfolio/index.vue";




export default {
  name: "HomeThirdSegment",
  components: {OurPortfolio, OutlinedButton },
  data() {
    return {
      image1,

    }}
};
</script>



<template>
  <div class="flex flex-col mb-32 mt-40">

    <div class="ml-28">
      <h4 class="font-playfairDisplay font-[500] text-[120px] text-black">
        Our <span class="text-[180px] font-[600] font-playfairDisplay text-[#A89C93] italic">PASSION</span>
      </h4>
      <h4 class="font-playfairDisplay font-[500] text-[120px] text-black mt-[-6rem]">
        Is the <span class="text-[180px] font-[600] font-playfairDisplay text-[#A89C93] italic">WOW</span>
      </h4>
    </div>


    <div class="flex flex-row justify-end gap-24 mr-28 mt-[-3.5rem]">
      <div class="mt-[17rem]">
        <p class="font-inter text-[#665244] font-[400] text-[16px] w-[25rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor feugiat.
        </p>
        <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"
            class="mt-10"
        />
      </div>


      <div class="flex flex-row">
        <div class="flex-none mr-28 ">
          <img :src="image1" alt="house image" class="w-[433px] h-[720px]" />
        </div>
        <div class="flex-none flex  absolute right-28 mt-[37.8rem]">
        <span class="text-[16px] font-[400] text-[#665244] font-inter rotate-90 whitespace-nowrap ">
          Lorem ipsum dolor sit amet
        </span>
        </div>
      </div>



    </div>
  </div>

 <OurPortfolio/>
</template>

