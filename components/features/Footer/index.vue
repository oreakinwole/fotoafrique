<script>
import OutlinedButton from "~/components/reusuables/OutlinedButton/index.vue";
import amazon from  "public/images/footer/icons/AmazonPay.png";
import applePay from "public/images/footer/icons/ApplePay.png";
import googlePay from "public/images/footer/icons/GooglePay.png";
import jcb from "public/images/footer/icons/JCB.png";
import masterCard from "public/images/footer/icons/Mastercard.png";
import visa from "public/images/footer/icons/Visa Classic.png";


export default {
  name : 'Footer',
  components: {OutlinedButton},
  data(){
    return{
      amazon,
      applePay,
      googlePay,
      jcb,
      masterCard,
      visa
    }
  }
}
</script>

<template>

  <footer class=" w-full h-fit pb-12 bg-black text-white pt-20">

    <!-- first layout -->

    <div class="flex flex-col items-center justify-center ">
      <h1 class="text-center font-playfairDisplay text-[70px] flex flex-col italic">
        We Provide best <span>handpicked home decor</span>
      </h1>
      <div class="font-inter font-[500] text-[16px] mt-14 ">
        <OutlinedButton
            border-color="#FCFBFA"
            text-color="#FCFBFA"
            background-color="black"
            text="Explore our Products"

        />
      </div>
    </div>



    <!-- second layout -->
      <div class="flex flex-row justify-between mt-28 font-inter text-[#D0C2B0] px-32  ">

        <div class="border border-[#665244]  border-l-0 pt-10 pb-28 w-[150rem]  pl-10">
          <h4 class="uppercase">Subscribe to receive ModernYardz news & offers</h4>

          <div class="bg-[#523825] w-[480px] h-[55px] mt-5 pl-5">
            <input type="email" placeholder="Enter your email" class="bg-[#523825] w-[410px] h-[55px] outline-none text-[#A89C93] text-[16px] placeholder-[16px] placeholder-[#A89C93]"/>
            <span class="pl-4  text-[#A89C93] text-[18px]">&gt;</span>
          </div>

          <div class="flex flex-row gap-2">
            <input type="checkbox" class="mt-6 cursor-pointer"/>
            <p class="ml-2 font-[300] text-[14px] mt-5 w-[25rem]">I've read the Privacy Policy and I consent to Modern Yardz sending me marketing communications</p>
          </div>


        </div>


        <div class="flex flex-row gap-12 font-[400] text-[16px] border border-[#665244] border-r-0 py-10  pl-12  w-[180rem]  ">

          <div class="flex flex-col gap-5">
            <h4 class="uppercase cursor-pointer">Our Services</h4>
            <h4 class="uppercase cursor-pointer">3d Packages</h4>
            <h4 class="uppercase cursor-pointer">Our Design Process</h4>
            <h4 class="uppercase cursor-pointer">Lowest Prices</h4>
          </div>


          <div class="flex flex-col gap-5">
            <h4 class="uppercase cursor-pointer">About Us</h4>
            <h4 class="uppercase cursor-pointer">Contact Us</h4>
            <h4 class="uppercase cursor-pointer">My Account</h4>
          </div>


          <div class="flex flex-col gap-5">
            <h4 class="uppercase cursor-pointer">Reviews</h4>
            <h4 class="uppercase cursor-pointer">Privacy Policy</h4>
            <h4 class="uppercase cursor-pointer">Portfolio</h4>
          </div>

        </div>

      </div>



    <!-- third layout -->
    <div class="flex flex-row justify-between text-[#D0C2B0]  px-32">

      <div class="border border-[#665244] border-l-0 border-t-0 w-[150rem]   text-[12px] font-inter font-[400]">
        <div class="uppercase flex flex-row  ">
          <p class="border border-[#665244] px-[3.9rem] py-5 border-t-0 cursor-pointer">Instagram</p>
          <p class="border border-[#665244]  px-[3.9rem] py-5 border-t-0 cursor-pointer">Facebook</p>
          <p class="border border-[#665244]  px-[3.85rem] py-5 border-t-0 cursor-pointer">Pinterest</p>
          <p class="border border-[#665244]  px-[3.8rem] py-5 border-t-0 cursor-pointer">Twitter</p>
        </div>

        <div class="py-16 ml-16">
          <select class="bg-black py-2 font-inter text-[14px] font-[300]">
            <option class="">🇺🇸 &nbsp;&nbsp; United States</option>
          </select>
        </div>


      </div>

      <div class="flex flex-row  gap-4 border border-[#665244] border-r-0 w-[180rem] pl-40  py-16 border-t-0 font-inter font-[400] ">
        <p class=" text-[13px] mt-1">We Accept</p>

       <div>
         <img :src="amazon" alt="amazon icon" width="45"/>
       </div>

        <div>
          <img :src="applePay" alt="apple pay icon" width="45"/>
        </div>

        <div>
          <img :src="googlePay" alt="google pay icon" width="45"/>
        </div>

        <div>
          <img :src="jcb" alt="jcb icon" width="45"/>
        </div>

        <div>
          <img :src="masterCard" alt="master card icon" width="45"/>
        </div>

        <div>
          <img :src="visa" alt="visa classic icon" width="45"/>
        </div>


      </div>

    </div>


    <!-- fourth layout -->
    <div class="text-[#D0C2B0] flex flex-row justify-between mt-10 px-72 text-[12px] font-inter font-[400]" >

      <p>© 2024 MODERNYARDZ.com. All rights reserved.</p>
      <p>Privacy Policy | Terms of Use</p>

    </div>

  </footer>

</template>

<style scoped>

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 4px;
  border: 1px solid #fff;

}


input[type="checkbox"]:checked {
  background-color: #523825;
  border-color: #000;
}


input[type="checkbox"]:checked::after {
  content: '';
  display: block;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-left: 6px;
  margin-top: 2px;
}
</style>