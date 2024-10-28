<script setup>
const stepsShowing = ref(null);
</script>

<template>
  <div class="mt-28 px-10 w-screen">
    <div class="leading-[3.4em] px-20">
      <p class="font-bold">Our Design Process</p>
      <p class="text-7xl font-normal">Simple Steps to Your Dream Yard</p>
      <p class="text-7xl font-normal mt-3">Here’s how it works:</p>
    </div>

    <section class="h-[540px] flex gap-4 mt-20 relative">
      <div
        @mouseover="stepsShowing = 1"
        @mouseleave="stepsShowing = null"
        class="explore-item overflow-hidden h-full flex-[5] hover:flex-[10] rounded-2xl bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
        >
          <h5 class="font-bold text-center">
            Step One: Free Design Consultation
          </h5>

          <div>
            <div v-if="stepsShowing === 1">
              <p class="py-4 text-sm">
                We start with a free consultation to discuss your vision and
                goals. During this appointment, we will:
              </p>
              <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        @mouseover="stepsShowing = 2"
        @mouseleave="stepsShowing = null"
        class="explore-item h-full flex-[5] hover:flex-[10] rounded-2xl border bg-[url('@/assets/images/step_two.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
        >
          <h5 class="font-bold text-center">Step Two: ...</h5>

          <div>
            <div v-if="stepsShowing === 2">
              <p class="py-4 text-sm">
                We start with a free consultation to discuss your vision and
                goals. During this appointment, we will:
              </p>
              <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        @mouseover="stepsShowing = 3"
        @mouseleave="stepsShowing = null"
        class="explore-item h-full flex-[5] hover:flex-[10] rounded-2xl border bg-[url('@/assets/images/step_three.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
        >
          <h5 class="font-bold text-center">Step Three: ...</h5>

          <div>
            <div v-if="stepsShowing === 3">
              <p class="py-4 text-sm">
                We start with a free consultation to discuss your vision and
                goals. During this appointment, we will:
              </p>
              <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        @mouseover="stepsShowing = 4"
        @mouseleave="stepsShowing = null"
        class="explore-item h-full flex-[5] hover:flex-[10] rounded-2xl border bg-[url('@/assets/images/step_four.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
        >
          <h5 class="font-bold text-center">Step Four: Comprehensive Quote</h5>

          <div>
            <div v-if="stepsShowing === 4">
              <p class="py-4 text-sm">
                We start with a free consultation to discuss your vision and
                goals. During this appointment, we will:
              </p>
              <ul class="text-sm list-disc leading-loose">
                <li>
                  Understand your style, needs, and how you want to use your
                  outdoor space.
                </li>
                <li>Measure your yard for accuracy.</li>

                <li>
                  Take photos and videos to ensure every detail is covered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
