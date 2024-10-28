<script setup>
import autoAnimate from "@formkit/auto-animate";

const testimonials = ref([
  {
    name: "Katherine Moss",
    title: "Project Manager, Layers",
    description:
      "They truly listened to our ideas and turned them into something better than we could have imagined.",
  },
  {
    name: "Katherine Moss",
    title: "Project Manager, Layers",
    description:
      "The craftsmanship and attention to detail were outstanding. We couldn’t be happier with the final result.",
  },
  {
    name: "Katherine Moss",
    title: "Project Manager, Layers",
    description:
      "Our backyard is now a space we love to spend time in, thanks to the incredible work of Modern Yardz",
  },
  {
    name: "Katherine Moss",
    title: "Project Manager, Layers",
    description:
      "From start to finish, they made the process smooth and enjoyable. The end result is stunning.",
  },
  {
    name: "Katherine Moss",
    title: "Project Manager, Layers",
    description:
      "We’re thrilled with our new outdoor area! The team was professional, and the design was flawless.",
  },
]);
const autoAniSection = ref();

const isViewingTest = ref(0);

const incrementTest = () => {
  // console.log('Cur', isViewingTest)
  if (isViewingTest.value === testimonials.value.length - 1)
    return (isViewingTest.value = 0);
  isViewingTest.value += 1;
};

const decrementTest = () => {
  if (isViewingTest.value === 0) return;
  isViewingTest.value -= 1;
};

onMounted(() => {
  autoAnimate(autoAniSection.value);
});
</script>

<template>
  <p class="px-20 text-3xl font-light">What Our Clients Are Saying</p>
  <div class="px-20 flex mb-20" ref="autoAniSection">
    <div class="flex-[1] space-y-8 pt-10 cursor-default" >
      <img src="@/assets/svg/stars.svg" width="80" />

      <p class="text-3xl font-medium max-w-sm leading-tight">
        {{ testimonials[isViewingTest].description }}
      </p>

      <section class="flex justify-between items-center max-w-sm">
        <div class="flex items-center space-x-4">
          <img src="@/assets/images/avatar_katherine.png" width="40" />

          <div>
            <p class="text-xs font-bold">
              {{ testimonials[isViewingTest].name }}
            </p>
            <span class="text-xs font-light">
              {{ testimonials[isViewingTest].title }}
            </span>
          </div>
        </div>

        <div class="flex gap-x-4">
          <svg
            @click="decrementTest"
            class="w-8 cursor-pointer hover:w-7 transition-all duration-200 ease-out"
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2542_2608)">
              <rect
                y="0.611328"
                width="56"
                height="56"
                rx="28"
                fill="white"
                fill-opacity="0.9"
              />
              <rect
                x="0.5"
                y="1.11133"
                width="55"
                height="55"
                rx="27.5"
                stroke="#EAECF0"
              />
              <path
                d="M35 28.6113H21M21 28.6113L28 35.6113M21 28.6113L28 21.6113"
                stroke="#667080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2542_2608"
                x="-8"
                y="-7.38867"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2542_2608"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2542_2608"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            @click="incrementTest"
            class="w-8 cursor-pointer hover:w-7 transition-all duration-200 ease-out"
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2542_2609)">
              <rect
                y="0.611328"
                width="56"
                height="56"
                rx="28"
                fill="white"
                fill-opacity="0.9"
              />
              <rect
                x="0.5"
                y="1.11133"
                width="55"
                height="55"
                rx="27.5"
                stroke="#EAECF0"
              />
              <path
                d="M21 28.6113H35M35 28.6113L28 21.6113M35 28.6113L28 35.6113"
                stroke="#667080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2542_2609"
                x="-8"
                y="-7.38867"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2542_2609"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2542_2609"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </section>
    </div>

    <div class="flex-[1] flex flex-col items-center space-y-4">
      <header class="flex items-end space-x-4">
        <div
          data-aos="slide-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          <img src="@/assets/images/testimonial/test_1.jpg" width="220" />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="600"
          data-aos-easing="linear"
        >
          <img src="@/assets/images/testimonial/test_2.jpg" width="220" />
        </div>

        <div></div>
      </header>

      <footer class="flex space-x-4">
        <div
          data-aos="slide-right"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src="@/assets/images/testimonial/test_3.jpg" width="220" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="600"
          data-aos-easing="linear"
        >
          <img src="@/assets/images/testimonial/test_4.jpg" width="220" />
        </div>
        <div
          data-aos="slide-left"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          <img src="@/assets/images/testimonial/test_5.jpg" width="220" />
        </div>
      </footer>
    </div>
  </div>
</template>
