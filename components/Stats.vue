<script setup>
const stats = ref([
  { id: 1, value: 3500, label: "Satisfied Customers" },
  { id: 2, value: 40, label: "Years of Experience" },
  { id: 3, value: 10000, label: "Design Consultations" },
  { id: 4, value: "100%", label: "Transparency", suffix: "%" },
]);
</script>

<template>
  <div class="py-12 bg-[#EFF4E4] px-4 lg:px-20">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-5xl font-semibold text-center text-gray-800 mb-8 pt-3">
        A CUT ABOVE THE REST
      </h2>

      <div class="mt-20 h-[580px] flex flex-row-reverse justify-center">
        <section class="w-1/3 h-full bg-[#161813] text-white pl-16 pt-12 space-y-16">
          <div class="space-y-4">
            <span class="px-4 py-1 text-center rounded-md bg-[#EFF4E4] text-xs font-medium text-[#161813]">SATISFACTION</span>
            <p class="text-5xl font-medium tracking-wide">3500</p>
            <p class="text-sm font-light tracking-wide">Satisfied Customers</p>
          </div>
         
          <div class="space-y-4">
            <span class="px-4 py-1 text-center rounded-md bg-[#EFF4E4] text-xs font-medium text-[#161813]">SATISFACTION</span>
            <p class="text-5xl font-medium tracking-wide">3500</p>
            <p class="text-sm font-light tracking-wide">Satisfied Customers</p>
          </div>
         
          <div class="space-y-4">
            <span class="px-4 py-1 text-center rounded-md bg-[#EFF4E4] text-xs font-medium text-[#161813]">SATISFACTION</span>
            <p class="text-5xl font-medium tracking-wide">3500</p>
            <p class="text-sm font-light tracking-wide">Satisfied Customers</p>
          </div>
         
        </section>

        <div class="hidden lg:block w-1/2 h-full bg-blue-100">
          <!-- <img
          src="@/assets/images/148-web-or-mls-DSC09212.jpg"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        /> -->

          <video
            class="h-full w-full object-cover"
            autoplay
            muted
            loop
          >
            <source src="/video/quizvid.mp4" type="video/mp4" />
            Something went wrong while playing video
          </video>
        </div>
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
