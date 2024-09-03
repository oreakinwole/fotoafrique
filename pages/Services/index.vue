<script>
import OurPortfolio from "~/components/reusuables/OurPortfolio/index.vue";
import GetYourYard from "~/components/reusuables/GetYourYard/index.vue";

export default {
  name : 'Services',
  components: {GetYourYard, OurPortfolio}
}

</script>

<template>
  <div class="pt-96">
    services page here
  </div>
  <OurPortfolio/>
  <GetYourYard/>
</template>