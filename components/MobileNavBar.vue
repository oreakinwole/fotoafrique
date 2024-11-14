<script setup>
const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div
    class="flex bg-transparent justify-between w-full h-[50px] items-center px-4"
  >
    <!-- Logo -->
    <div>
      <img
        src="/images/navbar/imgs/logo.png"
        alt="logo"
        class="w-20"
      />
    </div>

    <!-- Hamburger menu icon -->
    <div @click="toggleMenu" class="">
      <div class="space-y-2">
        <!-- <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span> -->

        <img
          src="/images/navbar/icons/menu.png"
          alt="menu"
          class="w-[25px] h-[25px]"
        />
      </div>
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="animate__animated animate__slideInRight absolute top-0 left-0 w-full h-full bg-black shadow-md z-60"
    >
      <div class="flex flex-row justify-between px-4 pt-10">
        <div class="pl-2">
          <img
            src="/images/navbar/imgs/bg-logo.png"
            alt="logo"
            class="w-20"
          />
        </div>

        <div @click="toggleMenu">
          <img
            src="/images/navbar/icons/closewhite.png"
            alt="close"
            class="w-[20px] h-[20px]"
          />
        </div>
      </div>
      <ul
        class="flex flex-col pt-14 gap-5 text-[#666666] font-inter font-[400] text-[23px] pl-2"
      >
        <li class="py-2 px-4">Home</li>
        <li class="py-2 px-4">Services</li>
        <li class="py-2 px-4">Gallery</li>
        <li class="py-2 px-4">Contact</li>
        <li class="py-2 px-4">3D Packages</li>
        <li class="py-2 px-4"></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Add some styles for the hamburger */
</style>
