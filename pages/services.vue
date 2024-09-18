<script setup lang="ts"></script>

<template>
  <div class="px-20">
    <section class="flex gap-x-20 justify-between h-[600px] py-10">
      <div class="w-1/2 h-full">
        <img
          src="@/assets/images/backyard_1.png"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-1/2 h-full space-y-5 px-14">
        <p class="font-playfairDisplay text-5xl font-medium">
          Landscape Design SD
        </p>
        <p class="text-brown text-sm max-w-lg">
          San Diego, a city renowned for its stunning landscapes and vibrant
          outdoor life, presents a unique opportunity for homeowners to
          transform their outdoor spaces into personal paradises. Modern Yardz
          is at the forefront of this transformation, offering bespoke landscape
          design solutions that cater to the diverse needs of San Diego
          residents.
        </p>

        <p class="text-brown text-sm max-w-lg">
          San Diego, a city renowned for its stunning landscapes and vibrant
          outdoor life, presents a unique opportunity for homeowners to
          transform their outdoor spaces into personal paradises.
        </p>

        <p class="text-brown text-sm max-w-lg border-b border-new-gray pb-8">
          In the heart of San Diego, where the climate is as varied as the
          city's topography, our landscape designs are conceived to thrive. From
          e our landscape designs are conceived to thrive. From e our landscape
          designs are conceived to thrive. From e design spaces that are both
          eco-friendly and uniquely San Diegan.
        </p>
        <br />

        <FilledButton
          background-color="black"
          text="GET FREE QUOTE"
          text-color="white"
          class="w-full"
        />
      </div>
    </section>

    <section class="pt-48">
      <div class="flex max-w-screen-lg mx-auto gap-x-12">
        <div class="w-1/2 pt-16">
          <p class="text-4xl font-medium font-playfairDisplay">
            Our Design Pro
            <span class="text-new-gray font-imperial text-5xl uppercase"
              >C </span
            >ess
          </p>

          <div class="text-xs space-y-6 pt-6 text-brown text-justify">
            <p>
              Our design process is a collaborative journey, tailored to bring
              your unique outdoor space to life. From initial consultation to
              final installation, we guide you through:
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

        <div class="w-[800px] ">
          <img
            src="/images/hero/imgs/garden.png"
            class="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>

    <section class="pt-48 space-y-5 max-w-md">
      <p class="text-4xl font-medium font-playfairDisplay">
        More
        <span class="text-new-gray font-imperial text-5xl uppercase">S </span
        >ervices
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

  <OurPortfolio class="mb-16" />


</template>

<style></style>
