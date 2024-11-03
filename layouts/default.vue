<script setup lang="ts">
const isShowLoader = ref(true);

const loaderCountInterval = ref();
const loaderCount = ref(0);

onMounted(() => {
  loaderCountInterval.value = setInterval(() => {
    if (loaderCount.value < 100) {
      loaderCount.value += 10;
    }
  }, 180);
});

onBeforeUnmount(() => {
  clearInterval(loaderCountInterval.value);
});

watch(loaderCount, (val: number) => {
  if (val === 100) isShowLoader.value = false;
});
</script>

<template>
  <div
    class="h-screen w-full z-10 bg-black absolute top-0 left-0 flex justify-center items-center"
    v-if="isShowLoader"
  >
    <div class="relative">
      <svg
        class="spinner"
        width="174px"
        height="174px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="pathspin"
          fill="transparent"
          stroke-width=".5"
          cx="33"
          cy="33"
          r="30"
          stroke="url(#gradient)"
        ></circle>
        <defs>
          <linearGradient id="gradient">
            <stop offset="50%" stop-color="#D0C2B0" stop-opacity="1" />
            <stop offset="65%" stop-color="#D0C2B0" stop-opacity=".5" />
            <stop offset="100%" stop-color="#D0C2B0" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div
        class="absolute flex flex-col   items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#D0C2B0] text-4xl"
      >
        <p class="mt-6">{{ loaderCount }}%</p>
        <p class="text-xs font-semibold">Loading...</p>
      </div>
    </div>
  </div>

  <div class="max-w-[1600px] mx-auto overflow-hidden" v-else>
    <NavBarNew />
    <slot />
    <Footer class="mt-32" />
  </div>
</template>

<style scoped>
.spinner {
  animation: rotate 1.4s linear infinite;
  -webkit-animation: rotate 1.4s linear infinite;
  -moz-animation: rotate 1.4s linear infinite;
  width: 174px;
  height: 174px;
  margin: 20% auto 0;
  position: relative;
}

.spinner-dot {
  width: 274px;
  height: 274px;
  position: relative;
  top: 0;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.pathspin {
  stroke-dasharray: 170;
  stroke-dashoffset: 20;
}
</style>
