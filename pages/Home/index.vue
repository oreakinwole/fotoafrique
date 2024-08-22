<script>



import {defineComponent} from "vue";
import Hero from "~/components/features/Hero/index.vue";
import Footer from "~/components/features/Footer/index.vue";
import HomeSecondSegment from "~/components/features/HomeSecondSegment/index.vue";
import HomeThirdSegment from "~/components/features/HomeThirdSegment/index.vue";
import HomeLastSegment from "~/components/features/HomeLastSegment/index.vue";
import NavBar from "~/components/reusuables/NavBar/index.vue";

export default defineComponent({
  components: {NavBar, HomeLastSegment, HomeThirdSegment, HomeSecondSegment, Footer, Hero},
  name : 'Home'
})
</script>

<template>
  <NavBar underlineText="Home" />
  <Hero/>
  <HomeSecondSegment/>
  <HomeThirdSegment/>
  <HomeLastSegment/>
  <Footer/>
</template>