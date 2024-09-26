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
    transform: rotateY(3turn);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .spin_mod {
    animation: spin 8s ease-in-out infinite;
  }
}

.explore-item:hover {
  cursor: url("@/assets/images/explore_cursor.png"), auto;
}
</style>
