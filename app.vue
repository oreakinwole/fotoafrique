<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="black"
      :duration="2000"
      :height="1200"
      :throttle="0"
    >
      <template #default>
        <div class="h-screen flex lg:block justify-center  items-center">
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

            <!-- <svg
        class="spinner-dot dot"
        width="5px"
        height="5px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        x="37"
        y="1.5"
      >
        <circle class="pathspin" fill="#D0C2B0" cx="33" cy="33" r="30"></circle>
      </svg> -->
          </svg>
        </div>
      </template>
    </NuxtLoadingIndicator>

    <NuxtPage />
  </NuxtLayout>
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
