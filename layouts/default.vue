<script setup lang="ts">
import NavBar from "~/components/reusuables/NavBar/index.vue";
import Footer from "~/components/features/Footer/index.vue";

</script>

<template>
  <div>
  <NavBar underlineText="Home" />

    <slot/>
    <Footer class="mt-32"/>
  </div>  
</template>