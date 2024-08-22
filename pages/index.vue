<script setup lang="ts">
import NavBar from "~/components/reusuables/NavBar/index.vue";
import Hero from "~/components/features/Hero/index.vue";
import Footer from "~/components/features/Footer/index.vue";
import HomeSecondSegment from "~/components/features/HomeSecondSegment/index.vue";
import HomeLastSegment from "~/components/features/HomeLastSegment/index.vue";
import HomeThirdSegment from "~/components/features/HomeThirdSegment/index.vue";

</script>

<template>
  <NavBar underlineText="Home" />
  <Hero/>
  <HomeSecondSegment/>
  <HomeThirdSegment/>
  <HomeLastSegment/>
  <Footer/>
</template>

<style>
.your-css-class {
}
</style>
