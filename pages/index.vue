<script>
import "animate.css";
</script>

<template>
  <HeroNew />
  <FeaturesHomeSecondSegment />
   <FeaturesHomeThirdSegment />
 <!-- <FeaturesHomeLastSegment /> -->
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

.scape-explore-cursor:hover {
  cursor: url("@/assets/images/bestill.png"), auto;
  cursor: url("@/assets/images/explore_cursor.png"), auto;
  cursor: url("@/assets/images/bestill.png"), auto;
}

.explore-item{
  transition: all 0.8s ease;
}

.explore-item:hover {
  cursor: url("@/assets/images/explore_cursor.png"), auto;
  
}
</style>
