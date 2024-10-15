<script setup>
const stepsShowing = ref(null);
import autoAnimate from "@formkit/auto-animate";

const autoAniSection = ref();

onMounted(() => {
  autoAnimate(autoAniSection.value);
});

// import gsap from "gsap";

// onMounted(() => {
//   gsap.to(".designPro", {
//     x: -1200,
//     scrollTrigger: {
//       trigger: ".designPro",
//       end: 2500,
//       scrub: true,
//     },
//   });
// });
</script>

<template>
  <div class="mt-48 px-10">
    <div class="leading-[3.4em] px-20">
      <p class="font-bold">Our Design Process</p>
      <p class="text-7xl font-normal">Simple Steps to Your Dream Yard</p>
      <p class="text-7xl font-normal mt-3">Here’s how it works:</p>
    </div>

    <section class="h-[450px] flex gap-4 mt-20 relative">
      <div
        class="explore-item overflow-hidden h-full flex-[25] rounded-2xl bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
        <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
          @mouseover="stepsShowing = 1"
          @mouseleave="stepsShowing = null"
        >
          <h5 class="font-bold text-center">Step One: Free Design Consultation</h5>

          <div ref="autoAniSection">
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
        ref="autoAniSection"
        class="explore-item h-full flex-[15] rounded-2xl border bg-[url('@/assets/images/step_two.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
      <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
          @mouseover="stepsShowing = 2"
          @mouseleave="stepsShowing = null"
        >
          <h5 class="font-bold text-center">Step Two: ...</h5>

          <div ref="autoAniSection">
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
        ref="autoAniSection"
        class="explore-item h-full flex-[15] rounded-2xl border bg-[url('@/assets/images/step_three.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
      <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
          @mouseover="stepsShowing = 3"
          @mouseleave="stepsShowing = null"
        >
          <h5 class="font-bold text-center">Step Three: ...</h5>

          <div ref="autoAniSection">
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
        ref="autoAniSection"
        class="explore-item h-full flex-[25] rounded-2xl border bg-[url('@/assets/images/step_four.jpg')] bg-no-repeat bg-center bg-cover relative"
      >
      <div
          class="bg-black text-white rounded-2xl p-5 absolute left-1 bottom-1 w-[98%]"
          @mouseover="stepsShowing = 4"
          @mouseleave="stepsShowing = null"
        >
          <h5 class="font-bold text-center">Step Four: Comprehensive Quote</h5>

          <div ref="autoAniSection">
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
  cursor: url("@/assets/images/process_cursor.png"), auto;
}

.process-item:hover::after {
  opacity: 1;
  top: -6em;
}

.designPro {
  position: relative;
  right: -800px;
  transition: all 0.3s;
}
</style> -->
