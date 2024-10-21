<template>
  <div class="cursor-default flex w-full items-center justify-between py-8 px-28 max-w-[1600px]">
<NuxtLink to="/">
  <img src="@/assets/svg/logo.svg" width="80" />

</NuxtLink>
    <p class="text-xs font-medium animate__animated animate__flipInX animate__delay-3s"
    
    >Start Your Transformation Today – <span class="font-bold border-black border-b" @click="handleBookConsult" role="button">Book a Free Consultation</span></p>

    <svg
    class="w-8"
      width="60"
      height="39"
      viewBox="0 0 60 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="60" y2="1.5" stroke="black" stroke-width="3" />
      <line y1="19.5" x2="60" y2="19.5" stroke="black" stroke-width="3" />
      <line y1="37.5" x2="60" y2="37.5" stroke="black" stroke-width="3" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
 const handleBookConsult = () => {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
};
</script>

<style></style>
