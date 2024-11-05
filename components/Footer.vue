<script setup>
const handleBookConsult = () => {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
};
</script>

<template>
  <footer class="w-full h-fit mt-[-10rem] lg:mt-0 lg:pb-12 bg-black text-white lg:pt-10">
    <!-- first layout -->

    <div class="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
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
      class="flex flex-row flex-wrap lg:flex-nowrap gap-8 lg:gap-0 justify-between mt-14 font-inter text-[#D0C2B0] lg:px-32"
    >
      <div
        class="lg:border border border-l-0 border-r-0 border-[#665244] lg:border-l-0 border-t-0 pt-10 pb-28 lg:w-[150rem] mx-5 lg:mx-0 lg:pl-10"
      >
        <h4 class="uppercase text-sm lg:text-md">
          Subscribe to receive ModernYardz news & offers
        </h4>

        <div class="lg:bg-[#523825] lg:w-[480px] h-[55px] mt-5 lg:pl-5">
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-[#523825] pl-4 lg:pl-0 w-[90%] lg:w-[410px] h-[55px] outline-none text-[#A89C93] text-[16px] placeholder-[16px] placeholder-[#A89C93]"
          />
          <span class="hidden lg:inline pl-4 text-[#A89C93] text-[18px]"
            >&gt;</span
          >
        </div>

        <div class="flex flex-row gap-2 mt-8 lg:mt-0">
          <input type="checkbox" class="mt-6 cursor-pointer" />
          <p
            class="ml-2 font-[300] text-xs lg:text-[14px] mt-5 w-[21rem] lg:w-[25rem]"
          >
            I've read the Privacy Policy and I consent to Modern Yardz sending
            me marketing communications
          </p>
        </div>
      </div>

      <div
        class="flex flex-row gap-12 font-[400] text-[16px] lg:border border-[#665244] lg:border-r-0 py-10 pl-5 lg:pl-12 w-[180rem]"
      >
        <div class="flex flex-col gap-5">
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            Our Services
          </h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            3d Packages
          </h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            Our Design Process
          </h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            Lowest Prices
          </h4>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">About Us</h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            Contact Us
          </h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            My Account
          </h4>
        </div>

        <div class="flex flex-col gap-5">
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">Reviews</h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">
            Privacy Policy
          </h4>
          <h4 class="text-xs lg:text-lg uppercase cursor-pointer">Portfolio</h4>
        </div>
      </div>
    </div>

    <!-- third layout -->
    <!-- <div
      class="hidden lg:flex lg:flex-row justify-between text-[#D0C2B0] px-32"
    > -->
    <div
      class="lg:flex lg:flex-row justify-between text-[#D0C2B0] lg:px-32"
    >
      <div
        class="border border-[#665244] border-l-0 border-t-0 border-b-0 lg:border-b w-[150rem] text-[12px] font-inter font-[400]"
      >
        <div class="uppercase lg:flex lg:flex-row">
          <div class="lg:flex flex flex-row lg:ml-0 ml-[1rem]"><p
            class="border border-[#665244] px-[3.9rem] py-5 lg:border-t-0 cursor-pointer"
          >
            Instagram
          </p>
          <p
            class="border border-[#665244] px-[3.9rem] py-5 lg:border-t-0 cursor-pointer"
          >
            Facebook
          </p>
        </div>
          


          <div class="lg:flex flex flex-row lg:ml-0 ml-[1rem]">
            <p
            class="border border-[#665244] lg:px-[3.85rem] px-[3rem] py-5  border-t-0 cursor-pointer"
          >
            Pinterest
          </p>
          <p
            class="border border-[#665244] lg:px-[3.8rem] px-[5.3rem] py-5 border-t-0 cursor-pointer"
          >
            Twitter
          </p>
          </div>
        </div>

        <div class="pt-8 pb-4 lg:ml-16 ml-4">
          <select class="bg-black py-2 font-inter text-[14px] font-[300]">
            <option class="">🇺🇸 &nbsp;&nbsp; United States</option>
          </select>
        </div>
      </div>

      <div
        class="flex lg:flex-row flex-col lg:space-x-4 border border-[#665244] border-b-0 lg:border-b border-r-0 w-[180rem] pl-5 lg:pt-20 border-t-0 font-inter font-[400]"
      >
        <p class="text-sm mt-1 font-light">We Accept</p>

       <div class="flex gap-3 lg:mt-0 mt-3 lg:mr-0 ">
        <div class="">
          <img
            src="/images/footer/icons/AmazonPay.png"
            alt="amazon icon"
            width="35"
          />
        </div>

        <div>
          <img
            src="/images/footer/icons/ApplePay.png"
            alt="apple pay icon"
            width="35"
          />
        </div>

        <div>
          <img
            src="/images/footer/icons/GooglePay.png"
            alt="google pay icon"
            width="35"
          />
        </div>

        <div>
          <img src="/images/footer/icons/JCB.png" alt="jcb icon" width="35" />
        </div>

        <div>
          <img
            src="/images/footer/icons/Mastercard.png"
            alt="master card icon"
            width="35"
          />
        </div>

        <div>
          <img
            src="/images/footer/icons/Visa Classic.png"
            alt="visa classic icon"
            width="35"
          />
        </div>
       </div>
      </div>
    </div>

    <!-- fourth layout -->
    <div
      class=" text-[#D0C2B0] lg:flex lg:flex-row justify-between mt-10 text-center lg:pt-0 pt-5 lg:pb-0 pb-24 lg:px-72 text-[12px] font-inter font-[400] uppercase"
    >
      <p>© 2024 MODERNYARDZ.com. All rights reserved.</p>
      <p class="lg:mt-0 mt-3">Privacy Policy | Terms of Use</p>
    </div>

    <div
      class="hidden relative lg:flex-1 lg:flex justify-center items-center mt-10 lg:mt-0 animate__animated animate__fadeIn animate__slower"
    >
      <img
        @click="handleBookConsult"
        src="/images/hero/icons/chat.png"
        alt="chat icon"
        class=" hover:scale-110 duration-200 ease-linear w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 fixed right-4 bottom-4 lg:right-10 lg:bottom-10 cursor-pointer z-50 chat"
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
