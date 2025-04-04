<script setup>
import "animate.css";

</script>

<template>
  <div class="landing-container">
    <EventPage />
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

/* .explore-item {
  transition: all 0.8s ease;
}

.explore-item:hover {
  cursor: url("@/assets/images/explore_new_cursor.svg"), auto;
} */
</style>
