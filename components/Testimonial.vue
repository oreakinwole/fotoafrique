<script setup></script>

<template>
  <div class="mt-20 lg:mt-28 lg:px-10 w-screen">
    <div class="px-4 lg:px-20 lg:text-center">
      <p class="font-semibold text-4xl lg:text-7xl mb-12 lg:mb-5">
        What Our Clients<br />Are Saying
      </p>
    </div>

    <section
      class="px-2 lg:h-[300px] flex justify-between lg:justify-center flex-wrap gap-2 lg:gap-4 mt-12"
    >
      <div
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[330px] lg:h-full w-[48.9%] lg:w-[300px] rounded-lg"
      >
        <header
          class="h-[67%] p-2 pt-5 relative rounded-lg bg-[url('@/assets/images/testimonial/test_1.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <span
            class="p-3 text-sm bg-white rounded-lg text-black font-semibold"
          >
            Client Name
          </span>
        </header>

        <footer class="px-2 mt-[1rem]">
          <p class="text-xs ml-2">
            They truly listened to our ideas and turned them into something
            better than we could have imagined.
          </p>
        </footer>
      </div>

      <div
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[330px] lg:h-full w-[48.9%] lg:w-[300px] rounded-lg"
      >
        <header
          class="h-[67%] p-2 pt-5 relative rounded-lg bg-[url('@/assets/images/testimonial/test_2.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <span
            class="p-3 text-sm bg-white rounded-lg text-black font-semibold"
          >
            Client Name
          </span>
        </header>

        <footer class="px-2 mt-[1rem]">
          <p class="text-xs ml-2">
            The craftsmanship and attention to detail were outstanding. We
            couldn’t be happier with the final result.
          </p>
        </footer>
      </div>

      <div
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[330px] lg:h-full w-[48.9%] lg:w-[300px] rounded-lg"
      >
        <header
          class="h-[67%] p-2 pt-5 relative rounded-lg bg-[url('@/assets/images/testimonial/test_3.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <span
            class="p-3 text-sm bg-white rounded-lg text-black font-semibold"
          >
            Client Name
          </span>
        </header>

        <footer class="px-2 mt-[1rem]">
          <p class="text-xs ml-2">
            Our backyard is now a space we love to spend time in, thanks to the
            incredible work of Modern Yardz.
          </p>
        </footer>
      </div>

      <div
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[330px] lg:h-full w-[48.9%] lg:w-[300px] rounded-lg"
      >
        <header
          class="h-[67%] p-2 pt-5 relative rounded-lg bg-[url('@/assets/images/testimonial/test_4.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <span
            class="p-3 text-sm bg-white rounded-lg text-black font-semibold"
          >
            Client Name
          </span>
        </header>

        <footer class="px-2 mt-[1rem]">
          <p class="text-xs ml-2">
            From start to finish, they made the process smooth and enjoyable.
            The end result is stunning.
          </p>
        </footer>
      </div>
    </section>

    <footer class="lg:px-20 mt-14 text-center">
      <NuxtLink to="gallery">

      <FilledButton
        :no-action="true"
        background-color="black"
        text="SEE OUR PORTFOLIO"
        text-color="white"
        class="w-[90%] font-semibold lg:w-[290px]"
      />
    </NuxtLink>

    </footer>
  </div>
</template>
