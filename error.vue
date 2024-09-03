<script setup lang="ts"></script>

<template>
  <NuxtLayout name="404">
    <div class="px-28 pt-12">
      <img src="@/assets/svg/logo.svg" width="100" />

      <div class="py-16 space-y-5">
        <p class="font-black text-center text-5xl">Oops!</p>
        <p class="font-black text-center">You are lost</p>

        <img src="@/assets/images/404.png" width="500" class="mx-auto" />

        <NuxtLink to="/">
          <div class=" pt-20 flex justify-center items-center max-w-xl mx-auto">
            <svg
              class="w-4 h-4 mr-2"
              width="26"
              height="17"
              viewBox="0 0 26 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.19824 5.94926L20.6434 5.94926C22.9403 5.94926 24.8024 7.81132 24.8024 10.1083L24.8024 11.6339C24.8024 13.9309 22.9403 15.793 20.6434 15.793L6.20866 15.793"
                stroke="black"
                stroke-width="2.08134"
                stroke-linejoin="round"
              />
              <path
                d="M5.84375 1.57617C4.13521 3.28472 3.17729 4.24263 1.46875 5.95117L5.84375 10.3262"
                stroke="black"
                stroke-width="2.08134"
                stroke-linejoin="round"
              />
            </svg>
            <span>Go Home</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style></style>
