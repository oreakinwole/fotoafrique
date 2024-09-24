
<script>
import closeIcon from "public/images/navbar/icons/Close.png"
import phoneIcon from "public/images/navbar/icons/call.png"
import modernYardzIcon from "public/images/navbar/imgs/logo.png"
import searchIcon from "public/images/navbar/icons/Search.png"
import bagIcon from "public/images/navbar/icons/bag.png"
import dummyProfileIcon from "public/images/navbar/icons/Icon Frame.png"
import image1 from "public/images/navbar/imgs/Mask group(4).png"
import image2 from "public/images/navbar/imgs/img.png"
import allButton from "public/images/navbar/icons/See all button.png"

export default {
  name: 'NavBar',
  data() {
    return {
      closeIcon,
      phoneIcon,
      modernYardzIcon,
      dummyProfileIcon,
      searchIcon,
      bagIcon,
      image1,
      image2,
      allButton,
      isServiceOpen: false,
      isMoreOpen: false,
      selectedOption: 'Select',
      activeDropdown: null,
    };
  },
  setup() {
    
  },
  props: {
    underlineText: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleServiceDropdown() {
      if (this.activeDropdown === 'service') {
        this.isServiceOpen = false;
        this.activeDropdown = null;
      } else {
        this.isServiceOpen = !this.isServiceOpen;
        this.isMoreOpen = false;
        this.activeDropdown = 'service';
      }
      this.updateUnderline();
    },
    toggleMoreDropdown() {
      if (this.activeDropdown === 'more') {
        this.isMoreOpen = false;
        this.activeDropdown = null;
      } else {
        this.isMoreOpen = !this.isMoreOpen;
        this.isServiceOpen = false;
        this.activeDropdown = 'more';
      }
      this.updateUnderline();
    },
    selectOption(option) {
      this.selectedOption = option;
      this.underlineText = option;
      this.isServiceOpen = false;
      this.isMoreOpen = false;
      this.activeDropdown = null;
      this.updateUnderline();
    },
    updateUnderline() {
      if (this.activeDropdown === 'service') {
        this.underlineText = 'Service';
      } else if (this.activeDropdown === 'more') {
        this.underlineText = 'More';
      } else {
        this.underlineText = '';
      }
    },
    getArrowDirection(isOpen) {
      return isOpen ? 'rotate-180' : '';
    }
  }
}
</script>

<template>
  <div class="hidden lg:flex flex-col bg-navbar-color font-inter w-full">
    <!-- first layout -->
    <PopUpModal text="BOOK A FREE DESIGN CONSULTATION." />

    <!-- second layout  -->
    <div class="flex flex-row mt-10 justify-between text-xs">
      <div class="flex flex-row gap-14 uppercase ml-36">
        <p class="cursor-pointer ">About</p>
        <div class="flex gap-2 cursor-pointer">
          <div>
            <img :src="phoneIcon" alt="phone icon" width="14" />
          </div>
          <p>Schedule A Call</p>
        </div>
      </div>

      <div class="">
        <img :src="modernYardzIcon" alt="modern yardz logo" width="90" class="mr-20 mt-[-10px]" />
      </div>

      <div class="flex flex-row gap-8 mr-36 ">
        <div>
          <img :src="searchIcon" alt="search icon" width="15" class="cursor-pointer" />
        </div>
        <div>
          <!-- <img :src="dummyProfileIcon" alt="dummy profile icon" width="15" class="cursor-pointer" /> -->
        </div>
        <div>
          <img :src="bagIcon" alt="bag icon" width="15" class="cursor-pointer" />
        </div>
      </div>
    </div>

    <!--third layout -->
    <div class="flex justify-center  items-center border-b border-black mt-8 text-xs">
      <div class="flex items-center gap-20 uppercase">

        <p class="text-xs" :class="{'cursor-pointer' : true, 'underline-black': underlineText === 'Home' && activeDropdown === null}"><NuxtLink to="/">Home</NuxtLink></p>

        <!-- Service select button -->
        <div class="relative inline-block text-left">
          <!-- Selected Option -->
          <div class="bg-navbar-color uppercase inline-flex items-center justify-between w-full p-2"
                  :class="{'underline-black': activeDropdown === 'service'}">
            <div>
              <span class="text-xs" :class="{'cursor-pointer': true, 'underline-black2': underlineText === 'Services' && activeDropdown === null}"><NuxtLink to="/services">Services</NuxtLink></span>

            </div>
            <svg :class="['w-5 h-5 ml-2 -mr-1', getArrowDirection(isServiceOpen)]" fill="currentColor" viewBox="0 0 20 20" @click="toggleServiceDropdown" class="cursor-pointer">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>

          <div v-if="isServiceOpen" class="absolute left-[-33rem] z-10 mt-[1px] w-[96rem] origin-top-right bg-navbar-color border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4">
            <!-- Dropdown content -->
            <div class="py-1 flex flex-row gap-10 px-10 mt-5 mb-5">
              <!-- first container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] group hover:bg-black">
                <div class="ml-3 mt-2 text-black group-hover:text-white">
                  <p class="font-[600] text-[16px]">Landscape Design SD</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1 group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[300px] h-[154px] mt-7 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] custom-cursor-button">
                  <img :src="image1" alt="first image" class="">
                </div>
              </button>

              <!-- second container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] group hover:bg-black">
                <div class="ml-3 mt-2 group-hover:text-white">
                  <p class="font-[600] text-[16px] text-black group-hover:text-white">Pavers San Diego</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1 group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[300px] h-[154px] mt-7 ml-20 bg-[#665244] rounded-tl-[20px] rounded-tr-[20px] ">
                  <img :src="image2" alt="second image" class="cursor-custom-cursor">
                </div>
              </button>

              <!-- third container -->
              <div @click="selectOption('More')" class="block w-full text-left  h-[251px] rounded-[25px]">
                <div class="">
                  <div class="flex flex-row justify-between font-inter px-6 ml-[-18px]">
                    <div class="flex flex-col gap-4">
                      <h4 class="text-[black] font-[600] text-[16px] mt-4">More Services</h4>
                      <p class="font-[400] text-[15px] cursor-pointer">Pools and Spas</p>
                      <p class="font-[400] text-[15px] cursor-pointer">Outdoor Kitchens</p>
                      <p class="font-[400] text-[15px] cursor-pointer">Concrete San Diego</p>
                      <p class="font-[400] text-[15px] cursor-pointer">Artificial Turf San Diego</p>
                      <p class="font-[400] text-[15px] cursor-pointer">Patio Covers and Pergolas</p>
                    </div>
                    <div class="mt-[50px]">
                      <img :src="allButton" alt="arrow" class="h-[105px] w-[105px] cursor-pointer">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-xs" :class="{'cursor-pointer': true, 'underline-black': underlineText === 'Gallery' && activeDropdown === null}"><NuxtLink to="/portfolio">Gallery</NuxtLink></p>
        <p class="text-xs" :class="{'cursor-pointer': true, 'underline-black': underlineText === 'Contact' && activeDropdown === null}"><NuxtLink to="/contact">Contact</NuxtLink></p>
        <p class="text-xs" :class="{'cursor-pointer': true, 'underline-black': underlineText === '3D Packages' && activeDropdown === null}"><NuxtLink to="/3d-packages">3D Packages</NuxtLink></p>




       
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
.underline-black2 {
  position: relative;
  padding-bottom: 10px;
  padding-top: 8px;
}

.underline-black2::after {
  content: "";
  display: block;
  width: 150%;
  height: 2px;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: -8px;
}




</style>
