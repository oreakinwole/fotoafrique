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
import FilledButton from "~/components/reusuables/FilledButton/index.vue";
import backyard from "public/images/homesecondsegment/imgs/Backyard.svg"
import frontyard from "public/images/homesecondsegment/imgs/frontyard.svg"
import fullyard from "public/images/homesecondsegment/imgs/FullYard.svg"
import renovation from "public/images/homesecondsegment/imgs/Renovation.svg"
import greaterthanicon from "public/images/homesecondsegment/icons/grt.svg"
import lessthanicon from "public/images/homesecondsegment/icons/lst.svg"
export default {
  name : 'HomeSecondSegment',
  components: {FilledButton, OutlinedButton},
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
      house2,
      frontyard,
      backyard,
      fullyard,
      renovation,
      greaterthanicon,
      lessthanicon
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
  <div class="mb-80 mt-16">
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


  <div class="flex flex-row justify-between mb-24 px-32">

    <div>
      <h2 class="font-playfairDisplay font-[500] text-[60px]">Our Design Pro<Span class="font-imperial text-[80px] font-[400] text-[#A89C93]">C</Span>ess</h2>
      <div class="mt-2">
        <p class="font-inter font-[400] text-[16px] text-[#665244] w-[30rem]">Our design process is a collaborative journey, tailored to bring your unique outdoor space to life. From initial consultation to final installation, we guide you through:</p>
      </div>
    </div>

    <p class="text-[#665244] text-[16px] font-inter font-[400] w-[29rem] mt-[8rem]">Together, let's create a space that reflects your personality and enhances your lifestyle.</p>

  </div>


  <div class="flex flex-row justify-between px-32 mb-96">


    <OutlinedButton
        border-color="#000"
        text-color="#000"
        background-color="white"
        text="SEE MORE"
    />

    <div class="flex flex-col mr-20">
      <!-- upper container -->
      <div class="flex flex-row ">

        <div  class="w-[300px] h-[295px] border-2 border-[#A89C93] px-4 py-4">
          <div class="flex flex-row justify-between">
            <h3 class="flex flex-col font-inter font-[700] text-[20px]">Free Design <span>Consultation</span></h3>
            <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">/01</p>
          </div>

          <div class="pt-5">
            <p class="text-[#665244] w-[16rem] font-[400] text-[14px]">Embark on the transformation journey with a free design consultation.</p>
          </div>

          <div>
            <p class="font-[300] text-[#A89C93] text-[27px] pt-[6rem] "> &#43;</p>
          </div>
        </div>

        <div  class="w-[300px] h-[295px]">

        </div>



        <div  class="w-[300px] h-[295px] border-2 border-[#A89C93] px-4 py-4">
          <div class="flex flex-row justify-between">
            <h3 class="flex flex-col font-inter font-[700] text-[20px]">Ultra Realistic <span>3D Design Renderings</span></h3>
            <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">/03</p>
          </div>

          <div class="pt-5">
            <p class="text-[#665244] w-[14rem] font-[400] text-[14px]">Taking the design process a step further, we translate the 2D plan into ultra-realistic 3D renderings.</p>
          </div>

          <div>
            <p class="font-[300] text-[#A89C93] text-[27px] pt-[4.3rem] "> &#43;</p>
          </div>
        </div>



        <div  class="w-[300px] h-[295px]">

        </div>

      </div>


      <!-- lower container -->
      <div class="flex flex-row mt-[-2px]">
        <div  class="w-[300px] h-[295px]">

        </div>

        <div  class="w-[304px] h-[295px] border-2 border-[#A89C93] px-4 py-4 ml-[-2px]">
         <div class="flex flex-row justify-between">
           <h3 class="flex flex-col font-inter font-[700] text-[20px]">2D Landscape <span>Design</span></h3>
           <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">/02</p>
         </div>

          <div class="pt-5">
            <p class="text-[#665244] w-[14rem] font-[400] text-[14px]">Following our in-person meeting, we craft a 2D landscape design.</p>
          </div>

          <div>
            <p class="font-[300] text-[#A89C93] text-[27px] pt-[6rem] "> &#43;</p>
          </div>
        </div>

        <div  class="w-[300px] h-[295px]">

        </div>



        <div  class="w-[300px] h-[295px] border-2 border-[#A89C93] px-4 py-4 ml-[-4px]">
          <div class="flex flex-row justify-between">
            <h3 class="flex flex-col font-inter font-[700] text-[20px]">Comprehensive <span>Quote</span></h3>
            <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">/04</p>
          </div>

          <div class="pt-5">
            <p class="text-[#665244] w-[15rem] font-[400] text-[14px]">With the designs refined and your dream backyard taking shape, we present a detailed and itemized quote for the proposed design.</p>
          </div>

          <div>
            <p class="font-[300] text-[#A89C93] text-[27px] pt-[3.5rem] "> &#43;</p>
          </div>
        </div>

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


  <div class="mt-80 flex flex-row">
    <div class="ml-32 mt-10">
      <div>
        <h4 class="font-playfairDisplay text-[60px] font-[500]">Servi<span class="text-[#A89C93] font-imperial font-[400] text-[80px]">C</span>es</h4>
      </div>

      <p class="text-[#665244] text-[16px] font-[400] font-inter w-[25rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet vestibulum tortor feugiat.</p>
      <FilledButton background-color="black" text="SCHEDULE A CALL" text-color="white" class="mt-16"/>
    </div>

    <div>

      <div class="ml-20">

        <div class="flex flex-row gap-8">
          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img :src="frontyard" alt="frontyard picture" class="w-full h-full"/>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Front Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$1,890.80</p>
            </div>
          </div>

          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img :src="backyard" alt="backyard picture"  class="w-full h-full"/>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Back Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$1,745.99</p>
            </div>
          </div>

          <div>

            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img :src="fullyard" alt="fullyard picture"  class="w-full h-full"/>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Full Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
            </div>
          </div>

          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img :src="renovation" alt="renovation picture"  class="w-full h-full"/>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Renovation</h4>
              <p class="font-[400] font-inter text-[16px]">$45.80</p>
            </div>
          </div>
        </div>


        <div>

          <div class="flex flex-row justify-between mt-12">

            <div class="w-[67.8rem] h-[1px] bg-[#A89C93]"></div>

            <div class="flex flex-row gap-8 justify-end mr-[17.8rem] font-[300] mt-[-9px]">
              <img :src="lessthanicon" alt="less than icon"/>
              <img :src="greaterthanicon" alt="graeter than icon"/>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>



  <div class="flex flex-row justify-evenly mt-44 w-full bg-[#F8F5F3] pt-14 pb-24">

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