<script>
import img1 from  "public/images/homesecondsegment/imgs/Mask group.png"
import img2 from "public/images/homesecondsegment/imgs/Mask group2.png"
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";

export default {
  name : 'HomeSecondSegment',
  components: {OutlinedButton},
  data(){
    return{
      img1,
      img2
    }
  }
}

</script>


<template>

  <div class="py-52 px-32 flex flex-row justify-between font-inter gap-10">

    <div>
      <img :src="img1" alt="house with pool" class="w-[653px] h-[653px]"/>
    </div>

    <div>
       <div>
         <h1 class="font-[400] text-[46px] w-[60rem] mr-10"> WE STRIVE TO ENHANCE THE SYNERGY BETWEEN AESTHETICS, STRUCTURE, AND ENVIRONMENTAL DESIGN.</h1>
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

</template>