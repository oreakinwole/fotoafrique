<script setup>
const stats = ref([
  { id: 1, value: 2000, label: "Satisfied Customers" },
  { id: 2, value: 25, label: "Years of Experience" },
  { id: 3, value: 1000, label: "Design Consultations" },
  { id: 4, value: 100, label: "Transparency", suffix: "%" },
]);
</script>

<template>
  <div class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Achievements
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="text-center bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 class="text-4xl font-extrabold text-gray-800">
            <!-- <count-up
              :end-value="stat.value"
              :duration="3"
              :suffix="stat.suffix || ''"
            /> -->
            {{ stat.value }}
          </h3>
          <p class="mt-2 text-lg font-medium text-gray-600">
            {{ stat.label }}
          </p>
        </div>

        <!-- <count-up :startVal="0" :endVal="2022" :duration="4"></count-up> -->
      </div>
    </div>
  </div>

  <div class="flex flex-col lg:flex-row justify-between items-center lg:px-20">
    <div class="p-6 flex-1">
      <h1
        class="uppercase font-playfairDisplay text-center lg:text-left text-[2rem] lg:text-[3rem] font-semibold"
      >
        Partner with Our Trusted Finance Providers
      </h1>
      <FilledButton
        background-color="black"
        text="Book Free Design Consultation"
        text-color="white"
        class="hidden lg:block uppercase w-[90%] font-semibold lg:w-[290px] mt-10"
      />
    </div>

    <div class="flex-1">
      <div class="flex justify-between mt-8 lg:mt-20">
        <div
          class="flex-1 max-w-[700px] hover:scale-110 duration-200 ease-linear"
        >
          <NuxtLink
            to="https://www.acornfinance.com/pre-qualify/?d=ABD05"
            target="_blank"
          >
            <img
              src="@/assets/images/finance/1.jpg"
              alt="Image 2"
              class="w-full h-auto"
            />
          </NuxtLink>
        </div>
        <div
          class="flex-1 max-w-[700px] hover:scale-110 duration-200 ease-linear"
        >
          <NuxtLink
            to="https://www.acornfinance.com/pre-qualify/?d=ABD05"
            target="_blank"
          >
            <img
              src="@/assets/images/finance/2.jpg"
              alt="Image 2"
              class="w-full h-auto"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <div
          class="flex-1 max-w-[700px] hover:scale-110 duration-200 ease-linear"
        >
          <NuxtLink
            to="https://www.acornfinance.com/pre-qualify/?d=ABD05"
            target="_blank"
          >
            <img src="@/assets/images/finance/3.jpg" class="w-full h-auto" />
          </NuxtLink>
        </div>
        <div
          class="flex-1 max-w-[700px] hover:scale-110 duration-200 ease-linear"
        >
          <NuxtLink
            to="https://www.acornfinance.com/pre-qualify/?d=ABD05"
            target="_blank"
          >
            <img src="@/assets/images/finance/4.jpg" class="w-full h-auto" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <section class="text-center mx-4 mt-20">
    <OutlinedButton
      border-color="#000"
      text-color="#000"
      background-color="white"
      text="SCHEDULE A CALL"
      class="lg:w-[230px]"
    />
  </section>
  <ViewDesignProcess />
  <ViewTestimonial />
</template>
