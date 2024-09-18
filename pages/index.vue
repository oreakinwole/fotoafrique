<script>
import "animate.css";


</script>

<template>
  <FeaturesHero />
  <FeaturesHomeSecondSegment />
  <FeaturesHomeThirdSegment />
  <FeaturesHomeLastSegment />
</template>

<style>
@keyframes spin {
  to {
    transform: rotateY(2turn);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .spin_mod {
    animation: spin 8s ease-in-out infinite;
  }
}



</style>
