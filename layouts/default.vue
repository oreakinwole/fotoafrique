<script setup>
const isShowLoader = ref(false);
/* This activates the Blur on the nav */
const isShowingNav = ref(false);
const isBodyClicked = ref(false);

const route = useRoute();

// const loaderCountInterval = ref();
// const loaderCount = ref(0);

// onMounted(() => {
//   loaderCountInterval.value = setInterval(() => {
//     if (loaderCount.value < 100) {
//       loaderCount.value += 10;
//     }
//   }, 180);
// });

// onBeforeUnmount(() => {
//   clearInterval(loaderCountInterval.value);
// });

// watch(loaderCount, (val: number) => {
//   if (val === 100) isShowLoader.value = false;
// });

/* for Nabar component */
const handleIsNavbarShowing = (val) => {
  isShowingNav.value = val;
  isBodyClicked.value = false;
};
</script>

<template>
  <div class="max-w-[1600px] mx-auto overflow-hidden">
    <slot />
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
