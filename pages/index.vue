<script>
import { defineComponent } from "vue";
import AOS from "aos";

import Hero from "~/components/features/Hero/index.vue";
import HomeSecondSegment from "~/components/features/HomeSecondSegment/index.vue";
import HomeThirdSegment from "~/components/features/HomeThirdSegment/index.vue";
import HomeLastSegment from "~/components/features/HomeLastSegment/index.vue";

export default defineComponent({
  components: { HomeLastSegment, HomeThirdSegment, HomeSecondSegment, Hero },
  name: "Home",
});

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-sine",
  });
});
</script>

<template>
  <Hero />
  <HomeSecondSegment />
  <HomeThirdSegment />
  <HomeLastSegment />
</template>
