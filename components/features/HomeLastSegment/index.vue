<script>
import house from "public/images/homelastsegment/imgs/house.png"
import icon1 from "public/images/homelastsegment/icons/Rectangle 263.png"
import icon2 from "public/images/homelastsegment/icons/Rectangle 427.png"
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import blueHouse from "/public/images/homelastsegment/imgs/Mask group(2).png";
import instagram from  "/public/images/homelastsegment/icons/ant-design_instagram-filled.png";
import image1 from "public/images/homelastsegment/imgs/Image 1.png";
import image2 from "public/images/homelastsegment/imgs/Image 2.png";
import image3 from "public/images/homelastsegment/imgs/Image 3.png";
import image4 from "public/images/homelastsegment/imgs/Image 4.png"
export default {
  name : 'HomeLastSegment',
  components: {OutlinedButton},
  data(){
    return{
      house,
      icon1,
      icon2,
      blueHouse,
      instagram,
      image1,
      image2,
      image3,
      image4
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


 <div class="pb-72">
   <img :src="blueHouse" alt="blue house"/>
   <div class="mt-[-37rem]">
     <h3 class="text-white ml-20 flex flex-col font-playfairDisplay font-[600] text-[100px]">Creating curb appeal <span>One home at a time</span></h3>
   </div>

 </div>


<div>
  <div class="flex flex-row justify-between px-28 py-28">
    <p class="text-black font-[600] text-[32px]">#modernyardz</p>

    <div class="flex flex-row gap-2">
      <img :src="instagram" alt="instagram icon" class="w-[24px] h-[24px]">
      <p class="uppercase font-inter font-[400] text-[16px] text-[#665244]">Follow us on instagram</p>
    </div>

  </div>


  <div class="flex flex-row  justify-evenly px-10 pb-44">
    <img :src="image1" alt="image1" class="w-[367px] h-[392px]">
    <img :src="image2" alt="image2" class="w-[366px] h-[392px]">
    <img :src="image3" alt="image3" class="w-[366px] h-[392px]">
    <img :src="image4" alt="image4" class="w-[366px] h-[392px]">
  </div>

</div>



</template>