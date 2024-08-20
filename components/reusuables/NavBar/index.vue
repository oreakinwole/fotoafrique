

<script>
import closeIcon from "public/images/navbar/icons/Close.png"
import phoneIcon from "public/images/navbar/icons/call.png"
import modernYardzIcon from "public/images/navbar/imgs/logo.png"
import  searchIcon from "public/images/navbar/icons/Search.png"
import bagIcon from "public/images/navbar/icons/bag.png"
import dummyProfileIcon from "public/images/navbar/icons/Icon Frame.png"
export default {
  name : 'NavBar',
  data(){
    return {
      closeIcon,
      phoneIcon,
      modernYardzIcon,
      dummyProfileIcon,
      searchIcon,
      bagIcon,
      isOpen: false,
      selectedOption: 'Select',
    };
  },
  props: {
    underlineText: {
      type: String,
      default: ''
    }},
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.underlineText = option;
      this.isOpen = false;
    }
  }
}

</script>


<template>

  <div class="flex flex-col gap-8  bg-navbar-color font-inter">

    <!-- first layout -->
    <div class="flex flex-row bg-black items-center justify-center relative h-[40px]">
      <h4 class="text-white text-center uppercase cursor-pointer">Schedule Your Free Consultation Today! Click Here</h4>
      <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-24" width="20">
    </div>




    <!-- second layout  -->

    <div class="flex flex-row  justify-between">

      <div class="flex flex-row gap-14 uppercase ml-24">
        <p class="cursor-pointer">About</p>

        <div class="flex flex-row gap-2 cursor-pointer">
         <div>
           <img :src="phoneIcon" alt="phone icon" width="20"/>
         </div>
          <p>Schedule A Call</p>
        </div>
      </div>


      <div class="">
        <img :src="modernYardzIcon" alt="modern yardz logo" width="100"/>
      </div>


      <div class="flex flex-row gap-20 mr-24">
       <div> <img :src="searchIcon" alt="search icon" width="20" class="cursor-pointer"/></div>
        <div><img :src="dummyProfileIcon" alt="dummy profile icon" width="20" class="cursor-pointer"/></div>
       <div> <img :src="bagIcon" alt="bag icon" width="20" class="cursor-pointer"/></div>
      </div>


    </div>





    <!--third layout -->

    <div class="flex justify-center items-center border-b border-black">
      <div class="flex flex-row items-center gap-20 uppercase">
        <p :class="{'cursor-pointer' : true, 'underline-black': underlineText === 'Home'}">Home</p>
        <select :class="{'bg-navbar-color uppercase cursor-pointer': true, 'underline-black': underlineText === 'Select'}">
          <option>Services</option>
        </select>
        <p :class="{'cursor-pointer' : true,'underline-black': underlineText === 'Gallery'}">Gallery</p>
        <p :class="{'cursor-pointer' : true,'underline-black': underlineText === 'Contact'}">Contact</p>
        <p :class="{'cursor-pointer' : true,'underline-black': underlineText === '3D Packages'}">3D Packages</p>

        <!--More select button -->
        <div class="relative inline-block text-left" @click="toggleDropdown">

          <!-- Selected Option -->
          <button class="bg-navbar-color uppercase cursor-pointer inline-flex items-center justify-between w-full p-2 "
                  :class="{'underline-black': underlineText === 'More'}">
            <span>More</span>
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>

          <div v-if="isOpen" class="absolute left-[-61rem] z-10 mt-1 w-[93rem] origin-top-right bg-navbar-color border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px]">

            <!-- Dropdown content -->
            <div class="py-1 flex flex-row gap-10 px-10 mt-5 mb-5">
              <!-- first container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2  border border-solid border-[#E4DBD1] h-[251px] rounded-[25px]">

                 <div class="ml-3 mt-2">
                   <p class="font-[600] text-[16px] text-black">Financing</p>
                   <p class="font-[400] text-[14px] text-[#A89C93] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </div>

                <div class="w-[300px] h-[154px] mt-7 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] "></div>

              </button>

              <!-- second container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2  border border-solid border-[#E4DBD1] h-[251px] rounded-[25px]">

                <div class="ml-3 mt-2">
                  <p class="font-[600] text-[16px] text-black">FAQs</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div class="w-[300px] h-[154px] mt-7 ml-20 bg-[#665244] rounded-tl-[20px] rounded-tr-[20px] "></div>

              </button>

              <!-- third container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2  border border-solid border-[#E4DBD1] h-[251px] rounded-[25px]">

                <div class="ml-3 mt-2">
                  <p class="font-[600] text-[16px] text-black">Social</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div class="w-[300px] h-[154px] mt-7 ml-20 bg-[#D0C2B0] rounded-tl-[20px] rounded-tr-[20px] "></div>

              </button>

            </div>
          </div>




        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.underline-black{
  border-bottom: 2px black solid;
  padding-bottom: 5px;
  padding-top: 8px;
}


</style>