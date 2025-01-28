<script setup></script>

<template>
  <div
    class="absolute -left-[10rem] top-14 z-10 mt-[1px] w-[50rem] origin-top-right border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4 more-dropdown"
  >
    <!-- Dropdown content -->
    <div class="py-1 flex flex-row gap-10 px-4 mt-5 mb-5 ">
      <!-- first container -->

      <button
        class="transition-all duration-1000 animate__animated animate__flipInX block text-left px-4 border-[.5px] rounded-[25px]"
      >
        <NuxtLink to="/">
          <div class="ml-3 mt-2">
            <p class="font-[600] text-[16px]">Design</p>

            <!-- <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
          </div>
          <div
            class="w-[195px] h-[124px] mt-5 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] more-cont overflow-hidden"
          >
            <img
              src="@/assets/images/Ferrer_026.jpg"
              alt="first image"
              class="h-full w-full object-cover"
            />
          </div>
        </NuxtLink>
      </button>

      <!-- second container -->
      <button
        class="transition-all duration-1000 animate__animated animate__flipInX block text-left px-4 border-[.5px] h-[200px] rounded-[25px]"
      >
        <NuxtLink to="/">
          <div class="ml-3 mt-2">
            <p class="font-[600] text-[16px]">Design Packages</p>
            <!-- <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
          </div>
          <div
            class="w-[195px] h-[124px] flex justify-center items-center mt-5 ml-20 bg-navbar-color rounded-tl-[20px] rounded-tr-[20px] more-cont"
          >
            <p class="font-playfairDisplay text-gray-900 font-bold text-8xl">
              ?
            </p>
          </div>
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
