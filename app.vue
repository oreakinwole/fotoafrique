<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="black"
      :duration="2000"
      :height="1200"
      :throttle="0"
    >
      <template #default>
        <div class="h-full">
          <div
            class="w-48 h-48 rounded-full border border-loader-brown text-center pt-[4em] absolute left-[44%] top-[21%]"
          >
            <p class="text-loader-brown text-2xl">95%</p>
            <p class="text-xs text-loader-brown">Loading...</p>
          </div>
        </div>
      </template>
    </NuxtLoadingIndicator>

    <NuxtPage />
  </NuxtLayout>
</template>
