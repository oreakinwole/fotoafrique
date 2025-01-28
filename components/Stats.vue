<script setup>
const stats = ref([
  { id: 1, value: 2000, label: "Satisfied Customers" },
  { id: 2, value: 25, label: "Years of Experience" },
  { id: 3, value: 1000, label: "Design Consultations" },
  { id: 4, value: 100, label: "Transparency", suffix: "%" },
]);
</script>

<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold text-center text-gray-800 mb-8 rounded-tr rounded-tl border-t mx-auto pt-3 max-w-xs border-[#A89C93]"
      >
        Our Achievements
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="text-center p-6 rounded-2xl border border-[#A89C93]"
        >
          <h3 class="text-4xl font-extrabold text-[#A89C93]">
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
</template>
