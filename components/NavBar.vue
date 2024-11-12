
<script>
import closeIcon from "public/images/navbar/icons/Close.png"
import phoneIcon from "public/images/navbar/icons/call.png"
import modernYardzIcon from "public/images/navbar/imgs/logo.png"
import searchIcon from "public/images/navbar/icons/Search.png"
import bagIcon from "public/images/navbar/icons/bag.png"
import dummyProfileIcon from "public/images/navbar/icons/Icon Frame.png"
import PopUpModal from "~/components/PopUpModal.vue";
import MobileNavBar from "~/components/MobileNavBar.vue";
import image1 from "public/images/navbar/imgs/Mask group(4).png"
import image2 from "public/images/navbar/imgs/img.png"
import allButton from "public/images/navbar/icons/See all button.png"
import { useRouter } from 'vue-router';

export default {
  name: 'NavBar',
  components: { PopUpModal ,MobileNavBar},
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
    const router = useRouter();

    function navigateToServices() {
      router.push('/services');
    }

    function navigateToHome() {
      router.push('/home');
    }
    return { navigateToServices , navigateToHome };
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
  <div class="m-nav hidden">
    <MobileNavBar />
  </div>
<!--  <div class="flex flex-col bg-navbar-color font-inter fixed w-full z-10">-->
  <div class="flex flex-col bg-navbar-color font-inter  w-full cont">
    <!-- first layout -->
    <PopUpModal text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

    <!-- second layout  -->
    <div class="flex flex-row mt-10 justify-between text-sm sm:text-base md:text-lg lg:text-[12px] seccont">
  <div class="flex flex-row gap-6 sm:gap-8 lg:gap-14 uppercase ml-8 sm:ml-16 md:ml-24 lg:ml-36">
    <p class="cursor-pointer">About</p>
    <div class="flex flex-row gap-2 cursor-pointer">
      <div>
        <img :src="phoneIcon" alt="phone icon" class="w-16 h-16 lg:w-4 lg:h-4 xl:w-4 xl:h-4 mt-1"  />
      </div>
      <p>Schedule A Call</p>
    </div>
  </div>

  <div class="mr-8 sm:mr-16 md:mr-24 lg:mr-10">
    <img :src="modernYardzIcon" alt="modern yardz logo" class="w-16 h-16 lg:w-[75px] lg:h-[25px] logo " />
  </div>

  <div class="flex flex-row gap-6 sm:gap-8 lg:gap-20 mr-8 sm:mr-16 md:mr-24 lg:mr-36">
    <div>
      <img :src="searchIcon" alt="search icon" class="w-16 h-16 lg:w-[18px] lg:h-[18px] xl:w-[18px] xl:h-[18px] cursor-pointer" />
    </div>
    <div>
      <img :src="dummyProfileIcon" alt="dummy profile icon" class="w-16 h-16 lg:w-[18px] lg:h-[18px] xl:w-[18px] xl:h-[18px]  cursor-pointer" />
    </div>
    <div>
      <img :src="bagIcon" alt="bag icon" class="w-16 h-16 lg:w-[18px] lg:h-[18px] xl:w-[18px] xl:h-[18px] cursor-pointer" />
    </div>
  </div>
</div>


    <!--third layout -->
    <div class="flex justify-center items-center border-b border-black mt-8 text-sm sm:text-base md:text-lg lg:text-[13px] thirdcont">
      <div class="flex flex-row items-center gap-16 uppercase">

        <p @click="navigateToHome" :class="{'cursor-pointer' : true, 'underline-black': underlineText === 'Home' && activeDropdown === null}">Home</p>

        <!-- Service select button -->
        <div class="relative inline-block text-left">
          <!-- Selected Option -->
          <div class="bg-navbar-color uppercase inline-flex items-center justify-between w-full p-2"
                  :class="{'underline-black': activeDropdown === 'service'}">
            <div>
              <span @click="navigateToServices" :class="{'cursor-pointer': true, 'underline-black2': underlineText === 'Services' && activeDropdown === null}">Services</span>

            </div>
            <svg :class="['w-5 h-5 ml-2 -mr-1', getArrowDirection(isServiceOpen)]" fill="currentColor" viewBox="0 0 20 20" @click="toggleServiceDropdown" class="cursor-pointer">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>

          <div v-if="isServiceOpen" class="absolute left-[-33rem] lg:left-[-17rem] z-10 mt-[1px] lg:w-[70rem] origin-top-right bg-navbar-color border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4 select-cont">
            <!-- Dropdown content -->
            <div class="py-1 flex flex-row gap-10 px-10 mt-5 mb-5">
              <!-- first container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] group hover:bg-black f-cont">
                <div class="ml-3 mt-2 text-black group-hover:text-white">
                  <p class="font-[600] text-[16px]">Landscape Design SD</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1 group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[200px]  h-[104px] mt-10 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] custom-cursor-button inner-cont">
                  <img :src="image1" alt="first image" class="">
                </div>
              </button>

              <!-- second container -->
              <button @click="selectOption('More')" class="block w-full text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] group hover:bg-black">
                <div class="ml-3 mt-2 group-hover:text-white">
                  <p class="font-[600] text-[16px] text-black group-hover:text-white">Pavers San Diego</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1 group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[200px] h-[104px] mt-10 ml-20 bg-[#665244] rounded-tl-[20px] rounded-tr-[20px] inner-cont ">
                  <img :src="image2" alt="second image" class="cursor-custom-cursor">
                </div>
              </button>

              <!-- third container -->
              <div @click="selectOption('More')" class="block w-full text-left  h-[251px] rounded-[25px]">
                <div class="">
                  <div class="flex flex-row justify-between font-inter px-6 ml-[-18px]">
                    <div class="flex flex-col gap-4">
                      <h4 class="text-[black] font-[600] text-[14px] mt-4 header1">More Services</h4>
                      <p class="font-[400] text-[13px] cursor-pointer txt1">Pools and Spas</p>
                      <p class="font-[400] text-[13px] cursor-pointer">Outdoor Kitchens</p>
                      <p class="font-[400] text-[13px] cursor-pointer">Concrete San Diego</p>
                      <p class="font-[400] text-[13px] cursor-pointer">Artificial Turf San Diego</p>
                      <p class="font-[400] text-[13px] cursor-pointer">Patio Covers and Pergolas</p>
                    </div>
                    <div class="mt-[50px]">
                      <img :src="allButton" alt="arrow" class="h-[65px] w-[65px] cursor-pointer arrow">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p :class="{'cursor-pointer': true, 'underline-black': underlineText === 'Gallery' && activeDropdown === null}">Gallery</p>
        <p :class="{'cursor-pointer': true, 'underline-black': underlineText === 'Contact' && activeDropdown === null}">Contact</p>
        <p :class="{'cursor-pointer': true, 'underline-black': underlineText === '3D Packages' && activeDropdown === null}">3D Packages</p>




        <!-- More select button -->
        <div class="relative inline-block text-left" @click="toggleMoreDropdown">
          <!-- Selected Option -->
          <button class="bg-navbar-color uppercase cursor-pointer inline-flex items-center justify-between w-full p-2"
                  :class="{'underline-black': activeDropdown === 'more'}">
            <span>More</span>
            <svg :class="['w-5 h-5 ml-2 -mr-1', getArrowDirection(isMoreOpen)]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>

          <div v-if="isMoreOpen" class="absolute left-[-54rem] z-10 mt-[1px] w-[71rem] origin-top-right bg-navbar-color border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4 more-dropdown">
            <!-- Dropdown content -->
            <div class="py-1 flex flex-row gap-10 px-10 mt-5 mb-5">
              <!-- first container -->
              <button @click="selectOption('More')" class="block w-[30%] text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] more-parent">
                <div class="ml-3 mt-2">
                  <p class="font-[600] text-[16px] text-black">Financing</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[195px] h-[124px] mt-5 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] more-cont"></div>
              </button>

              <!-- second container -->
              <button @click="selectOption('More')" class="block w-[30%] text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] more-parent">
                <div class="ml-3 mt-2">
                  <p class="font-[600] text-[16px] text-black">FAQs</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[195px] h-[124px] mt-5 ml-20 bg-[#665244] rounded-tl-[20px] rounded-tr-[20px] more-cont"></div>
              </button>

              <!-- third container -->
              <button @click="selectOption('More')" class="block w-[30%] text-left px-4 py-2 border border-solid border-[#E4DBD1] h-[251px] rounded-[25px] more-parent">
                <div class="ml-3 mt-2">
                  <p class="font-[600] text-[16px] text-black">Social</p>
                  <p class="font-[400] text-[14px] text-[#A89C93] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="w-[195px] h-[124px] mt-5 ml-20 bg-[#D0C2B0] rounded-tl-[20px] rounded-tr-[20px] more-cont"></div>
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
.underline-black2 {
  position: relative;
  padding-bottom: 15px;
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


@media (min-width: 1450px) {
.seccont , .thirdcont{
  font-size : 15px;
}
  .logo{
    width : 80px;
     height: 30px
  }
  .select-cont{
  left : -33rem;
   width: 96rem;
  }

  .inner-cont{
    width: 300px;
    height : 154px;
    margin-top: 7px;
  }
  .arrow{
    height: 105px;
    width: 105px;
  }
  .header1{
    font-size: 16px;
  }
  .txt1{
    font-size: 15px;
  }
  .more-cont{
    width: 300px;
    height: 154px;
    margin-top: 7px;
  }
  .more-parent{
    width: 100%;
  }
  .more-dropdown{
    width: 93rem;
    left: -61rem;
  }
}

@media (max-width: 500px) {
  .cont{
    display: none;
  }
  .m-nav{
    display: block;
  }
}




</style>
