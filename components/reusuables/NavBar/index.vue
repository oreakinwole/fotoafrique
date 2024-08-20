

<script>
import closeIcon from "assets/images/navbar/icons/Close.png"
import phoneIcon from "assets/images/navbar/icons/call.png"
import modernYardzIcon from "assets/images/navbar/imgs/logo.png"
import  searchIcon from  "assets/images/navbar/icons/Search.png"
import bagIcon from "assets/images/navbar/icons/bag.png"
import dummyProfileIcon from "assets/images/navbar/icons/Icon Frame.png"
export default {
  name : 'NavBar',
  data(){
    return {
      closeIcon,
      phoneIcon,
      modernYardzIcon,
      dummyProfileIcon,
      searchIcon,
      bagIcon
    };
  },
  props: {
    underlineText: {
      type: String,
      default: ''
    }},
}

</script>


<template>

  <div class="flex flex-col gap-8">

    <!-- first layout -->
    <div class="flex flex-row bg-black items-center justify-center relative">
      <h4 class="text-white text-center uppercase">Schedule Your Free Consultation Today! Click Here</h4>
      <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-24" width="20">
    </div>




    <!-- second layout  -->

    <div class="flex flex-row  justify-between">

      <div class="flex flex-row gap-14 uppercase ml-24">
        <p >About</p>

        <div class="flex flex-row gap-2">
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
       <div> <img :src="searchIcon" alt="search icon" width="20"/></div>
        <div><img :src="dummyProfileIcon" alt="dummy profile icon" width="20"/></div>
       <div> <img :src="bagIcon" alt="bag icon" width="20"/></div>
      </div>


    </div>





    <!--third layout -->

    <div class="flex justify-center items-center">
      <div class="flex flex-row items-center gap-20 uppercase">
        <p :class="{'underline-black': underlineText === 'Home'}">Home</p>
        <select class="bg-white uppercase">
          <option>Select</option>
        </select>
        <p :class="{'underline-black': underlineText === 'Gallery'}">Gallery</p>
        <p :class="{'underline-black': underlineText === 'Contact'}">Contact</p>
        <p :class="{'underline-black': underlineText === '3D Packages'}">3D Packages</p>
        <select class="bg-white  uppercase">
          <option>More</option>
        </select>
      </div>
    </div>

  </div>
</template>

<style scoped>
.underline-black {
  position: relative;
  display: inline-block;
  padding-left: 25px;
}

.underline-black::after {
  content: "";
  position: absolute;
  left: 10%;
  right: 20%;
  bottom: -2px;
  width: 120%;
  height: 3px;
  background-color: #000;
}

</style>