<script>



import {defineComponent} from "vue";
import Hero from "~/components/features/Hero/index.vue";
import HomeSecondSegment from "~/components/features/HomeSecondSegment/index.vue";
import HomeThirdSegment from "~/components/features/HomeThirdSegment/index.vue";
import HomeLastSegment from "~/components/features/HomeLastSegment/index.vue";

export default defineComponent({
  components: { HomeLastSegment, HomeThirdSegment, HomeSecondSegment, Hero},
  name : 'Home'
})
</script>

<template>
  <Hero/>
  <HomeSecondSegment/>
  <HomeThirdSegment/>
  <HomeLastSegment/>
</template>