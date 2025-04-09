<script setup>
import "animate.css";

</script>

<template>
  <div class="landing-container pb-56">
    <EventPage />
    <div class="relative mt-20 text-center">
      <h5 class="tracking-wider uppercase text-3xl font-medium my-5">
        Our Partners
      </h5>
      <div
        class="hidden lg:block bg-opacity-50 h-[80px] w-full overflow-hidden"
      >
        <NuxtMarquee class="w-full h-full overflow-hidden">
          <img
            src="@/assets/svg/partners.svg"
            class="w-full h-full object-cover"
          />
        </NuxtMarquee>
      </div>
    </div>
    <section class="py-16 px-4 max-w-7xl mx-auto">
    <!-- Section Heading -->
    <div class="text-center mb-16">
      <h2 class="text-4xl font-medium text-gray-800 mb-4">Take a look at Our Exibhition</h2>
      <p class="text-gray-600 max-w-3xl mx-auto mb-6">
        We are the world's largest provider of flexible workspace solutions, with customers including
        some of the most successful entrepreneurs
      </p>
      <div class="w-24 h-1 bg-gray-400 mx-auto"></div>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Image 1 -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <img 
          src="@/assets/images/upstanmd.png" 
          alt="Child shig" 
          class="w-full h-80 object-cover"
        />
      </div>

      <!-- Image 2 -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <img 
        src="@/assets/images/childshif.png" 
          alt="Open workspace with desks" 
          class="w-full h-80 object-cover"
        />
      </div>

      <!-- Image 3 -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <img 
        src="@/assets/images/upstanmd.png" 
          alt="Person working in private area" 
          class="w-full h-80 object-cover"
        />
      </div>

      <!-- Image 4 -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <img 
        src="@/assets/images/childshif.png" 
          alt="Team meeting in conference room" 
          class="w-full h-80 object-cover"
        />
      </div>
    </div>
  </section>

  <section class="relative w-full h-96 md:h-screen overflow-hidden ">
    <!-- Background Image with overlay -->
    <div class="absolute inset-0 ">
      <img 
        src="@/assets/images/ownner.png"
        alt="Office workspace" 
        class="w-full h-full object-scale-down"
      />
      <div class="absolute inset-0 bg-bg-white bg-opacity-30"></div>
    </div>
    
    <!-- Testimonial Card -->
    <div class="absolute inset-0 flex items-center justify-center  px-4">
      <div class="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-xl">
        <h3 class="text-2xl font-medium text-gray-800 mb-6">Valuable Feedback</h3>
        
        <blockquote class="mb-8">
          <p class="text-gray-700 leading-relaxed">
            "We achieved a cost-savings project while achieving cultural transformation to collaborate better together. Our innovation lab brings ideas, skills and importantly, individuals together to enable innovation."
          </p>
        </blockquote>
        
        <p class="text-xs uppercase tracking-wider text-gray-500 font-semibold">
          SHAWON TERNGUTOR, PRESIDENT AND CEO,PHOTO AFRIQUE NIGERIA.
        </p>
      </div>
    </div>
  </section>
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
