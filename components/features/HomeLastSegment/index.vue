<script>
import house from "public/images/homelastsegment/imgs/house.png"
import icon1 from "public/images/homelastsegment/icons/Rectangle 263.png"
import icon2 from "public/images/homelastsegment/icons/Rectangle 427.png"
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import blueHouse from "/public/images/homelastsegment/imgs/Mask group(2).png"
export default {
  name : 'HomeLastSegment',
  components: {OutlinedButton},
  data(){
    return{
      house,
      icon1,
      icon2,
      blueHouse
    }
  }
}
</script>

<template>
  <div>
  <img :src="house" alt="house img"/>
  </div>


  <div class="pt-80">


    <div class="flex justify-center items-center text-center ">
      <div class="font-playfairDisplay italic font-[600] text-[100px] flex flex-row gap-3">
        <h1>Get</h1>
        <img :src="icon1" alt="icon 1" class="w-[240px] h-[128px]  mx-2"/>
        <h1>Your Yard Design</h1>
      </div>
    </div>

    <div class="flex justify-center items-center text-center">
      <div  class="font-playfairDisplay italic font-[600] text-[100px] flex flex-row gap-3">
        <h1>Started In Simple</h1>
        <img :src="icon2" alt="icon 2" class="w-[256px] h-[128px] mx-2"/>
        <h1>Steps</h1>
      </div>
    </div>


    <div class="flex justify-center items-center">
      <p class="text-center text-[#665244] font-[400] text-[16px] mt-20 w-[25rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus tempor malesuada. Ut vitae lorem id mi vulputate gravida ut in arcu.</p>
    </div>

  </div>


  <div class="flex justify-center items-center mt-10 mb-64">
    <OutlinedButton
        border-color="#000"
        text-color="#000"
        background-color="white"
        text="GET IN TOUCH"

    />
  </div>


  <div style="background-image: url('public/images/homelastsegment/imgs/Mask group(2).png'); background-size: cover; background-position: center; height: 500px; width: 100%">
  </div>





</template>