<script setup>
const stepsShowing = ref(null);
</script>

<template>
  <div class="mt-12 lg:mt-28 px-10 w-screen">
    <div class="leading-[3.4em] lg:px-20 max-w-screen-lg">
      <p
        class="font-normal text-4xl lg:text-5xl font-playfairDisplay mb-5 lg:mb-8"
      >
        Our Design Pro<span class="font-imperial text-5xl text-[#A89C93]"
          >C</span
        >ess
      </p>
      <p class="text-2xl lg:text-4xl lg:font-medium font-playfairDisplay">
        Creating the outdoor space you’ve always wanted is
        <span
          class="font-imperial text-4xl lg:text-6xl text-[#A89C93] border-b border-dashed p-0"
          >easier&nbsp;</span
        >
        than you think.
      </p>
      <!-- <p class="text-3xl  mt-6 font-playfairDisplay">
        Here is how it works:
      </p> -->
    </div>

    <section
      class=" h-[1780px] lg:h-[450px] flex justify-center flex-wrap gap-4 mt-20 relative"
    >
      <div
        @mouseover="stepsShowing = 1"
        @mouseleave="stepsShowing = null"
        class="overflow-hidden h-[420px] lg:h-full w-full lg:w-[300px] rounded-2xl bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white h-[35%] lg:h-[30%] rounded-2xl p-5 absolute left-1 bottom-2 w-[98%]"
        >
          <h5 class="font-bold text-center">
            Step One: Free Design Consultation
          </h5>

          <div>
            <div>
              <p class="py-4 text-sm">
                We start with a free consultation to discuss your vision and
                goals.
              </p>

              <!-- <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>

      <div
       @mouseover="stepsShowing = 2"
        @mouseleave="stepsShowing = null"
        class="overflow-hidden h-[420px] lg:h-full w-full lg:w-[300px] rounded-2xl bg-[url('@/assets/images/step_two.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white h-[35%] lg:h-[30%] rounded-2xl p-5 absolute left-1 bottom-2 w-[98%]"
        >
          <h5 class="font-bold text-center">
            Step Two: 2D Landscape Design
          </h5>

          <div>
            <div>
              <p class="py-4 text-sm">
                We create a 2D design plan that shows a clear, overhead view of
                your future landscape.
              </p>

              <!-- <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>

      <div
        @mouseover="stepsShowing = 3"
        @mouseleave="stepsShowing = null"
        class="overflow-hidden h-[420px] lg:h-full w-full lg:w-[300px] rounded-2xl bg-[url('@/assets/images/step_three.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white h-[35%] lg:h-[30%] rounded-2xl p-5 absolute left-1 bottom-2 w-[98%]"
        >
          <h5 class="font-bold text-center">
            Step Three: 3D Design Renderings
          </h5>

          <div>
            <div>
              <p class="py-4 text-sm">
                We take it a step further by transforming the 2D plan into a
                realistic 3D rendering.
              </p>

              <!-- <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>

      <div
        @mouseover="stepsShowing = 4"
        @mouseleave="stepsShowing = null"
        class="overflow-hidden h-[420px] lg:h-full w-full lg:w-[300px] rounded-2xl bg-[url('@/assets/images/step_four.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white h-[35%] lg:h-[30%] rounded-2xl p-5 absolute left-1 bottom-2 w-[98%]"
        >
          <h5 class="font-bold text-center">
            Step Four: Comprehensive Quote
          </h5>

          <div>
            <div>
              <p class="py-4 text-sm">
                Once the design is finalized, we provide a detailed, itemized
                quote.
              </p>

              <!-- <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="flex items-center justify-center lg:justify-between lg:px-20 mt-10"
    >
      <FilledButton
        background-color="black"
        text="Book Your Free Design Consultation Today!"
        text-color="white"
        class="uppercase lg:w-[390px]"
      />

      <p class="text-xs hidden lg:block text-brown w-2/4 max-w-lg">
        Transform your outdoor space with ease. Book your free design
        consultation today and let’s create a yard you’ll love!
      </p>
    </footer>
  </div>
</template>

<!-- <style lang="scss">
.process-item::after {
  content: url("@/assets/images/hov_process.png");
  position: absolute;
  opacity: 0;
  transition: all 1s;
  top: 0;
  cursor: url("@/assets/images/process_cursor_small.svg"), auto;
}

.process-item:hover::after {
  opacity: 1;
  top: -6em;
}
</style> -->
