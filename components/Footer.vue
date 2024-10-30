<script>
import amazon from "public/images/footer/icons/AmazonPay.png";
import applePay from "public/images/footer/icons/ApplePay.png";
import googlePay from "public/images/footer/icons/GooglePay.png";
import jcb from "public/images/footer/icons/JCB.png";
import masterCard from "public/images/footer/icons/Mastercard.png";
import visa from "public/images/footer/icons/Visa Classic.png";

export default {
  name: "Footer",
  data() {
    return {
      amazon,
      applePay,
      googlePay,
      jcb,
      masterCard,
      visa,
    };
  },
};
</script>

<template>
  <footer class="w-full h-fit pb-12 bg-black text-white pt-10">
    <!-- first layout -->

    <div class="flex flex-col items-center justify-center">
      <h1
        class="text-center font-playfairDisplay text-3xl lg:text-6xl flex flex-col italic max-w-80 lg:max-w-screen-sm"
      >
       We'll definitely give you value for your money
      </h1>
      <div class="font-inter font-[500] text-[16px] mt-12">
        <OutlinedButton(BLACK)
          border-color="#FCFBFA"
          text-color="#FCFBFA"
          background-color="black"
          text="EXPLORE OUR PRODUCTS"
        />
      </div>
    </div>

    <!-- second layout -->
    <div
      class="flex flex-row flex-wrap gap-8 justify-between mt-14 font-inter text-[#D0C2B0] lg:px-32"
    >
      <div
        class="border border-[#665244] border-l-0 pt-10 pb-28 lg:w-[150rem] mx-5 lg:mx-0 lg:pl-10"
      >
        <h4 class="uppercase text-sm lg:text-md">
          Subscribe to receive ModernYardz news & offers
        </h4>

        <div class="lg:bg-[#523825] lg:w-[480px] h-[55px] mt-5 lg:pl-5 ">
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-[#523825] pl-4 lg:pl-0 w-[90%] lg:w-[410px] h-[55px] outline-none text-[#A89C93] text-[16px] placeholder-[16px] placeholder-[#A89C93]"
          />
          <span class="hidden lg:inline pl-4 text-[#A89C93] text-[18px]">&gt;</span>
        </div>

        <div class="flex flex-row gap-2 mt-8 lg:mt-0">
          <input type="checkbox" class="mt-6 cursor-pointer" />
          <p class="ml-2 font-[300] text-xs lg:text-[14px] mt-5 w-[21rem] lg:w-[25rem]">
            I've read the Privacy Policy and I consent to Modern Yardz sending
            me marketing communications
          </p>
        </div>
      </div>

      <div
        class="flex flex-row gap-12 font-[400] text-[16px] border border-[#665244] border-r-0 py-10 pl-5 lg:pl-12 w-[180rem]"
      >
        <div class="flex flex-col gap-5">
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Our Services</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">3d Packages</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Our Design Process</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Lowest Prices</h4>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">About Us</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Contact Us</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">My Account</h4>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Reviews</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Privacy Policy</h4>
          <h4 class="text-sm lg:text-lg uppercase cursor-pointer">Portfolio</h4>
        </div>
      </div>
    </div>

    <!-- third layout -->
    <div class="hidden lg:flex lg:flex-row justify-between text-[#D0C2B0] px-32">
      <div
        class="border border-[#665244] border-l-0 border-t-0 w-[150rem] text-[12px] font-inter font-[400]"
      >
        <div class="uppercase flex flex-row">
          <p
            class="border border-[#665244] px-[3.9rem] py-5 border-t-0 cursor-pointer"
          >
            Instagram
          </p>
          <p
            class="border border-[#665244] px-[3.9rem] py-5 border-t-0 cursor-pointer"
          >
            Facebook
          </p>
          <p
            class="border border-[#665244] px-[3.85rem] py-5 border-t-0 cursor-pointer"
          >
            Pinterest
          </p>
          <p
            class="border border-[#665244] px-[3.8rem] py-5 border-t-0 cursor-pointer"
          >
            Twitter
          </p>
        </div>

        <div class="pt-8 pb-4 ml-16">
          <select class="bg-black py-2 font-inter text-[14px] font-[300]">
            <option class="">🇺🇸 &nbsp;&nbsp; United States</option>
          </select>
        </div>
      </div>

      <div
        class="flex flex-row space-x-4 border border-[#665244] border-r-0 w-[180rem]  pl-5 pt-20 border-t-0 font-inter font-[400]"
      >
        <p class="text-sm mt-1 font-light">We Accept</p>

        <div>
          <img :src="amazon" alt="amazon icon" width="35" />
        </div>

        <div>
          <img :src="applePay" alt="apple pay icon" width="35" />
        </div>

        <div>
          <img :src="googlePay" alt="google pay icon" width="35" />
        </div>

        <div>
          <img :src="jcb" alt="jcb icon" width="35" />
        </div>

        <div>
          <img :src="masterCard" alt="master card icon" width="35" />
        </div>

        <div>
          <img :src="visa" alt="visa classic icon" width="35" />
        </div>
      </div>
    </div>

    <!-- fourth layout -->
    <div
      class="hidden text-[#D0C2B0] lg:flex lg:flex-row justify-between mt-10 px-72 text-[12px] font-inter font-[400]"
    >
      <p>© 2024 MODERNYARDZ.com. All rights reserved.</p>
      <p>Privacy Policy | Terms of Use</p>
    </div>


    <div class="hidden relative lg:flex-1 lg:flex justify-center items-center mt-10 lg:mt-0">
   
      <img
        src="public/images/hero/icons/chat.png"
        alt="chat icon"
        class="w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 fixed right-4 bottom-4 lg:right-10 lg:bottom-10 cursor-pointer z-50 chat"
      />
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
  content: "";
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
