

<template>
  

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
  <ViewDesignProcessOld />
  <ViewTestimonial />
</template>
