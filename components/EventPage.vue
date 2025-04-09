<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation bar -->
    <nav class="bg-transparent absolute w-full z-10">
      <div
        class="container mx-auto px-4 py-6 flex justify-between items-center"
      >
        <div class="text-white text-3xl font-bold">
          <!-- <a href="#">coHub.</a> -->

          <p class="tracking-wider uppercase text-2xl font-bold">FOTO|AFRIQUE</p>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-white hover:text-gray-300">Exibhition</a>
          <a href="#" class="text-white hover:text-gray-300">Feature</a>
          <a href="#" class="text-white hover:text-gray-300">About</a>
          <a href="#" class="text-white hover:text-gray-300">Blog</a>
          <a href="#" class="text-white hover:text-gray-300">Pricing</a>
          <a href="#" class="text-white hover:text-gray-300">FAQ</a>
          <a href="#" class="text-white hover:text-gray-300">Error</a>
          <a href="#" class="text-white hover:text-gray-300">Contact</a>
        </div>
        <div class="md:hidden">
          <button class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section with background image -->
    <div class="relative h-screen">
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>

      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://chats.cash/_nuxt/img/hero.4f08bb2.png');
        "
      ></div>

      <!-- Content -->
      <div
        class="relative font-opensans container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-white text-4xl md:text-7xl  mb-6 font-semibold  tracking-normal"
        >
          START WHERE YOU ARE, <br />DO WHAT YOU CAN.
        </h1>
        <p class="text-white text-lg  font-light mb-12 max-w-screen-sm">
          We have the world's largest network of workspaces and Lorem iposor dolor iposor dolor iposor dolor iposor dolor iposor dolor
        </p>
        <div class="bg-white bg-opacity-40 rounded-full px-5 py-2 text-white text-center max-w-2xl mx-auto shadow-lg backdrop-blur-sm">
      <h1 class="text-xs font-semibold">Africa's Humanitarian Aid Transfer Solution</h1>
    </div>

        <!-- Play button -->
        <div class="mt-8">
          <button
            class="bg-white rounded-full p-8 hover:bg-gray-200 transition duration-300"
          >
          <svg
          class="size-8"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 12.5L9 18.38L8 19V6zm-1.9 0L9 7.8v9.4z"/></svg>
          </button>
          <p class="text-white mt-4">Our Drive. in 30 Seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>


