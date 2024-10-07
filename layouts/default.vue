<script setup>
const isShowLoader = ref(false);
let counter = ref(null);

// onMounted(() => {
//   counter = setTimeout(() => {
//     isShowLoader.value = false;
//   }, 5000);
// });

// onBeforeUnmount(() => {
//   clearTimeout(counter);
// });
</script>

<template>
  <div
    class="h-[1200px] w-full z-10 bg-black absolute top-0 left-0"
    v-if="isShowLoader"
  >
    <div
      class="loading effect-1 w-48 h-48 rounded-full border border-loader-brown text-center pt-[4em] absolute left-[44%] top-[21%]"
    >
      <p class="text-loader-brown text-2xl">95%</p>
      <p class="text-xs text-loader-brown">Loading...</p>
    </div>
  </div>
  <div class="max-w-[1600px] mx-auto overflow-hidden">
    <NavBarNew class="absolute top-0" />
    <slot />
    <Footer class="mt-32" />
  </div>
</template>

<style>
.loading .effect-1 {
  animation: rotate 1s ease infinite;
}

.loading .effect-2 {
  animation: rotate-opacity 1s ease infinite 0.1s;
}

.loading .effect-3 {
  animation: rotate-opacity 1s ease infinite 0.2s;
}

.loading .effects {
  transition: all 0.3s ease;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1turn);
  }
}

@keyframes rotate-opacity {
  0% {
    opacity: 0.1;
    transform: rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: rotate(1turn);
  }
}
</style>
s
