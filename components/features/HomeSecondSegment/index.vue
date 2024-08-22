<script>
import img1 from  "public/images/homesecondsegment/imgs/Mask group.png"
import img2 from "public/images/homesecondsegment/imgs/Mask group2.png"
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import acher from "public/images/homesecondsegment/icons/Acher Stone.png";
import angelus from "public/images/homesecondsegment/icons/Angelus logo 1.png"
import belgard from "public/images/homesecondsegment/icons/belgard.png"
import orco from "public/images/homesecondsegment/icons/Orco.png"
import techo from "public/images/homesecondsegment/icons/Techo bloc.png"
import unilock from "public/images/homesecondsegment/icons/Unilock.png"
import icon1 from "public/images/getyouryard/icon/Rectangle 263.png"
import icon2 from "public/images/getyouryard/icon/Rectangle 427.png"
import  house1 from  "public/images/homesecondsegment/imgs/house1.png"
import  house2 from  "public/images/homesecondsegment/imgs/house2.png"

export default {
  name : 'HomeSecondSegment',
  components: {OutlinedButton},
  data(){
    return{
      img1,
      img2,
      acher,
      angelus,
      belgard,
      orco,
      techo,
      unilock,
      icon1,
      icon2,
      house1,
      house2
    }
  }
}

</script>


<template>

  <div class="py-52 px-28 flex flex-row justify-between font-inter ">

    <div class="">
      <img :src="img1" alt="house with pool" class="w-[653px] h-[653px]"/>
    </div>

    <div>
       <div>
         <h1 class="font-[400] text-[46px] w-[60rem] mr-14"> WE STRIVE TO ENHANCE THE SYNERGY BETWEEN AESTHETICS, STRUCTURE, AND ENVIRONMENTAL DESIGN.</h1>
       </div>

      <div class="ml-[43rem] mt-6">
        <img :src="img2" alt="house with garden" class="w-[317px] h-[339px]">
      </div>

      <div class="mt-[-5rem]">
       <div class="mb-10 font-[400] text-[20px]">
         <h3>The best design for your space</h3>
         <p class="text-[#A89C93]">Located in San Diego</p>
       </div>
        <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"

        />
      </div>
    </div>
  </div>
  <div class="mb-96 mt-16">
    <p class="uppercase text-center font-inter font-[400] text-[16px]">Our Partners</p>
    <div class="flex justify-center mt-20">
      <div class="flex flex-row gap-20 border-t border-b border-[#A89C93] border-solid py-14 px-16">
        <img :src="angelus" alt="angelus logo" class="w-[133.64px] h-[55.57px]"/>
        <img :src="orco" alt="orco logo" class="w-[89.05px] h-[50.81px]"/>
        <img :src="unilock" alt="unilock logo" class="w-[211.71px] h-[40.67px] pt-4"/>
        <img :src="belgard" alt="belgard logo" class="w-[48.58px] h-[51.05px]"/>
        <img :src="techo" alt="techo bloc logo" class="w-[382.67px] h-[40.65px] pt-4"/>
        <img :src="acher" alt="acher stone logo" class="w-[76px] h-[51px]"/>
      </div>
    </div>
  </div>


  <div>

    <div>
      <h2>Our Design Pro<Span>C</Span>ess</h2>
      <div>
        <p></p>
      </div>
    </div>

  </div>




  <div class="flex justify-center items-center text-center ">
    <div class="font-playfairDisplay italic font-[600] text-[100px] flex flex-row gap-3">
      <h1>The</h1>
      <img :src="icon1" alt="icon 1" class="w-[240px] h-[128px]  mx-2"/>
      <h1>Outdoor Oasis</h1>
    </div>
  </div>

  <div class="flex justify-center items-center text-center ">
    <div class="font-playfairDisplay italic font-[600] text-[100px] flex flex-row gap-3">
      <h1>A Contemporary Yard Design for</h1>
    </div>
  </div>

  <div class="flex justify-center items-center text-center">
    <div  class="font-playfairDisplay italic font-[600] text-[100px] flex flex-row gap-3">
      <h1>The Modern</h1>
      <img :src="icon2" alt="icon 2" class="w-[256px] h-[128px] mx-2"/>
      <h1>Lifestyle</h1>
    </div>
  </div>



  <div class="flex flex-row justify-evenly mt-48 w-full bg-[#F8F5F3] pt-24 pb-24">

    <div class="mt-44">
      <img :src="house1" alt="house 1" class="w-[350px] h-[389px]"/>
    </div>

    <div class="text-center leading-[8rem]">
      <p class="font-inter font-[400] text-[16px] uppercase">Shop By Category</p>
      <h4 class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer" >New Construction</h4>
      <h4 class="font-playfairDisplay font-[500] text-[60px] text-black cursor-pointer">Home Design</h4>
      <h4 class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer">Pool Design</h4>
      <h4 class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer">Horticulture</h4>
      <h4 class="font-playfairDisplay font-[500] text-[60px] text-[#A89C93] cursor-pointer">Outdoor Decor</h4>
      <p class="underline font-[500] text-[16px] uppercase cursor-pointer">See More</p>
    </div>

    <div  class="mt-44">
      <img :src="house2" alt="house 2" class="w-[350px] h-[389px]"/>
    </div>

  </div>


</template>