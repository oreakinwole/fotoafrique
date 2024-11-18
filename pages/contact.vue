<script setup lang="ts"></script>

<template>
  <div>
    <header class="text-center py-14 ">
      <p class="text-2xl lg:text-5xl font-[500] font-playfairDisplay">
        We’d love to hear from you
      </p>
      <p class="text-xs max-w-[220px] lg:max-w-sm mx-auto mt-2 lg:mt-6 text-brown">
        Do send us a message. We’d love to hear from you!
      </p>
    </header>

    <section class="lg:h-[500px]">
      <img
        src="@/assets/images/map.png"
        class="object-contain h-full w-full"
        alt="map"
      />
    </section>

    <section class="px-4 lg:px-20 flex justify-between py-12 lg:py-16">
      <div class="text-center">
        <p class="font-bold">Support</p>
        <p class="text-new-gray text-xs">Our friendly team is here to help</p>
        <a
          class="text-brown text-xs underline"
          href="mailto:info@modernyardz.com"
          >info@modernyardz.com</a
        >
      </div>

      <div class="text-center">
        <p class="font-bold">Address</p>
        <p class="text-new-gray text-xs max-w-[250px]">
          5595 Magnatron Blvd. Suite E San Diego, California 92111
        </p>
      </div>

      <div class="text-center">
        <p class="font-bold">Phone</p>
        <p class="text-new-gray text-xs">Mon - Fri: 8am - 5pm | Weekend</p>
        <a class="text-brown text-xs underline" href="tel:6197759554"
          >619-775-9554</a
        >
      </div>
    </section>
  </div>
</template>
