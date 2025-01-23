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
  <div id="why-choose-us" class="pt-14 px-4 lg:px-20">
    <div class="mt-20 min-h-[720px] flex justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          Why
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >C
          </span>
          hoose Modern Yardz?
        </h4>

        <div class="text-black my-6 leading-loose">
          <div class="font-bold tracking-widest text-lg">
            Your <span class="text-[#A89C93] font-bold">V</span>ision. Our
            <span class="text-[#A89C93] font-bold">E</span>xpertise.
          </div>

          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            Modern Yardz is a cut above the rest. We’ve built our reputation on
            delivering high-quality outdoor spaces that transform homes and
            elevate lifestyles. Here’s what sets us apart:
          </p>
        </div>

        <div class="mt-8 space-y-5">
          <div v-for="item in whyUs" :key="item.title">
            <header class="flex space-x-4 items-center">
              <svg
                class="rotate-90 w-4 text-[#454545]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.69 12.027L13.636 3.59a1.914 1.914 0 0 0-3.274 0L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871H12M16 19h6m-3-3v6"
                />
              </svg>
              <p class="font-normal text-sm tracking-widest">
                {{ item.title }}
              </p>
            </header>
            <p
              class="mt-3 font-light text-xs max-w-96 tracking-widest text-[#454545]"
            >
              {{ item.descr }}
            </p>
          </div>
        </div>
      </section>

      <div class="hidden lg:block h-[700px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="@/assets/images/teamphoto.jpeg"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>

    <div class="hidden lg:block text-center mt-16">
      <FilledButton
        background-color="black"
        text="Book Your Free Consultation Today"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
      />
    </div>
  </div>
</template>
