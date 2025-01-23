<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="black"
      :duration="2000"
      :height="1200"
      :throttle="0"
    >
    </NuxtLoadingIndicator>

    <NuxtPage />
  </NuxtLayout>
</template>
