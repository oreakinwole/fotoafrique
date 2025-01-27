<script setup></script>

<template>
 
  <div id="introduction" class="pt-14 px-4 lg:px-20">
  <Stats/>

    <div class="mt-20 min-h-[720px] flex flex-row-reverse justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block mt-8 font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          Welcome
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >T
          </span>
          o Modern Yardz
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <div class="font-bold tracking-widest text-lg">
            We Create <span class="text-[#A89C93] font-bold">Y</span>our dream
            <span class="text-[#A89C93] font-bold">Y</span>ard
          </div>

          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            Modern Yardz is a full-service landscaping design and build company
            serving the San Diego community for over 40 years. From Chula Vista
            to Rancho Santa Fe, we specialize in creating custom outdoor spaces
            that bring your vision to life. Whether it’s a modern patio,
            luxurious pool, cozy fire pit, or lush artificial turf, we handle
            every step of the process—from design to construction—with care and
            precision.
          </p>
          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            We’re not just building yards; we’re building spaces where memories
            are made. With local roots and decades of expertise, we’re here to
            help San Diego homeowners create outdoor spaces that are as
            functional as they are beautiful.
          </p>
        </div>
      </section>
      


      <div class="hidden lg:block h-[700px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="@/assets/images/148-web-or-mls-DSC09212.jpg"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>

    <div class="hidden lg:block text-center mt-16">
      <FilledButton
        background-color="black"
        text="Start Your Project Today"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
      />
    </div>

  </div>

</template>
