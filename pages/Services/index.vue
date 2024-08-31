<script>

import NavBar from "~/components/reusuables/NavBar/index.vue";
import Footer from "~/components/features/Footer/index.vue";
import OurPortfolio from "~/components/reusuables/OurPortfolio/index.vue";
import GetYourYard from "~/components/reusuables/GetYourYard/index.vue";

export default {
  name : 'Services',
  components: {GetYourYard, OurPortfolio, Footer, NavBar}
}

</script>

<template>
  <NavBar underlineText="Services" />
  <div class="pt-96">
    services page here
  </div>
  <OurPortfolio/>
  <GetYourYard/>
  <Footer/>
</template>