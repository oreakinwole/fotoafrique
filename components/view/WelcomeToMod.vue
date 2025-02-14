<script setup>
const whyUs = [
  {
    title: "Decades of Experience:",
    descr:
      "With 40+ years in the industry, we’ve honed the art of landscape design and construction.",
  },

  {
    title: "Local Roots",
    descr:
      "As San Diego locals, we understand the area’s unique landscape and design needs.",
  },
  {
    title: "Custom Approach",
    descr: "Every project is tailored to your vision, preferences, and budget.",
  },
  {
    title: "Full-Service Excellence",
    descr:
      "From design to build, we handle every detail, ensuring a seamless experience.",
  },
];
</script>

<template>
  <div class="py-14 px-4 lg:px-20 bg-[#161813] text-white">
    <div class="mt-20 flex items-center justify-between gap-10">
      <div class="h-[700px] w-1/2 hidden lg:block bg-blue-100 rounded-3xl">
        <img
          src="@/assets/images/teamphoto.jpeg"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div
        class="max-w-full sm:max-w-full lg:max-w-lg"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <h4 class="hidden sm:block text-5xl tracking-wide font-semibold">
          WELCOME TO MODERN YARDZ
        </h4>

        <div class="text-white my-6 space-y-6 leading-loose">
          <div class="font-bold tracking-widest text-lg">
            WE CREATE YOUR DREAM YARD
          </div>

          <p class="mt-1 font-light tracking-widest text-md text-[#858484]">
            Modern Yardz is a full-service landscaping design and build company
            serving the San Diego community for over 40 years. From Chula Vista
            to Rancho Santa Fe, we specialize in creating custom outdoor spaces
            that bring your vision to life. Whether it’s a modern patio,
            luxurious pool, cozy fire pit, or lush artificial turf, we handle
            every step of the process, from design to construction, with care
            and precision.
          </p>

          <p class="mt-1 font-light tracking-widest text-md text-[#858484]">
            We’re not just building yards; we’re building spaces where memories
            are made. With local roots and decades of expertise, we’re here to
            help San Diego homeowners create outdoor spaces that are as
            functional as they are beautiful.
          </p>
        </div>
        <div class="hidden lg:block mt-8">
          <FilledButton
            background-color="white"
            text="Book Your Free Consultation Today"
            text-color="black"
            class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
