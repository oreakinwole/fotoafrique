<script setup lang="ts">
import AssetsSlider from "~/components/reusuables/AssetsSlider";
</script>

<template>
  <div class="px-20">
    <section class="flex gap-x-20 justify-between h-[600px] py-10">
      <div class="w-1/2 bg-green-500 h-full">
        <img
          src="@/assets/images/backyard_1.png"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-1/2 h-full space-y-5">
        <p class="font-playfairDisplay text-5xl font-medium">
          Small Yard, Big Design
        </p>
        <p class="text-brown text-sm max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
          vestibulum tortor feugiat.
        </p>

        <div class="pt-5 flex items-center">
          <img src="@/assets/svg/review_star.svg" />

          &nbsp; &nbsp;

          <span class="text-brown text-2xl"> 350 Reviews</span>
        </div>

        <section class="max-w-[550px]">
          <div class="text-5xl font-bold border-b border-new-gray py-14">
            $1,890.80
          </div>

          <div class="mt-8 space-y-8">
            <p class="font-medium">Select Size</p>

            <div class="space-x-4">
              <button class="px-16 bg-[#F5F0EA] py-2 rounded-sm">
                Standard Lot
              </button>
              <button class="px-16 bg-brown text-white py-2 rounded-sm">
                Large Lot
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="pt-48">
      <div class="flex max-w-screen-md mx-auto gap-x-12">
        <div class="w-1/2 pt-16">
          <p class="text-4xl font-medium font-playfairDisplay">
            Package
            <span class="text-new-gray font-imperial text-5xl uppercase"
              >D </span
            >etails
          </p>

          <div class="text-xs space-y-6 pt-6 text-brown max-w-64 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non risus eget mauris malesuada porttitor quis
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non risus eget mauris malesuada porttitor quis
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non risus eget mauris malesuada porttitor quis
            </p>
          </div>
        </div>

        <div class="w-1/2 h-[550px]">
          <img
            src="@/assets/images/package_detail.png"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

    <section class="pt-48 space-y-5 max-w-md">
      <p class="text-4xl font-medium font-playfairDisplay">
        More
        <span class="text-new-gray font-imperial text-5xl uppercase">3D </span
        >Assets
      </p>

      <p class="text-xs text-brown">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
        risus eget mauris malesuada porttitor quis sed odio.
      </p>
    </section>

    <div class="py-12">
      <AssetsSlider />
    </div>
  </div>
</template>

<style></style>
