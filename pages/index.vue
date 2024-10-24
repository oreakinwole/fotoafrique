<script setup>
import "animate.css";

// const landingHand = ref(null);
// const isMobileNavLocked = useScrollLock(landingHand);

// onMounted(() => {
//   isMobileNavLocked.value = true;
// });
</script>

<template>
  <div ref="landingHand" class="landing-container">
    <HeroNew />
    <FeaturesHomeSecondSegment />
    <FeaturesHomeThirdSegment />
    <FeaturesHomeLastSegment />
  </div>
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

.explore-item {
  transition: all 0.8s ease;
}

.explore-item:hover {
  cursor: url("@/assets/images/explore_new_cursor.svg"), auto;
}
</style>
