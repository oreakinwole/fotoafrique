<script setup>
import "animate.css";
const features = ref([
  "1 consultation with a designer",
  "Up to 3 design revisions",
  "Comprehensive planting plan",
  "Hardscape layout",
  "Outdoor lighting design",
  "2D landscape plans for a clear project blueprint",
]);
const features2 = ref([
  "1 consultation with a designer",
  "Up to 10 design revisions",
  "Comprehensive planting plan",
  "Irrigation plan for efficient water management",
  "Hardscape layout",
  "Drainage planning for long-term durability",
  "Outdoor lighting design",
  "2D landscape plans for easy visualization",
  "High-quality 3D renderings of your outdoor space",
]);

const features3 = ref([
  "Unlimited 1:1 designer consultations for 30 days",
  "Unlimited design revisions for ultimate flexibility",
  "Comprehensive planting plan",
  "Irrigation plan for optimal water use",
  "Hardscape layout for stunning walkways, patios, and features",
  "Drainage planning to protect your investment",
  "Outdoor lighting design",
  "Detailed 2D landscape plans",
  "Ultra-realistic 3D renderings",
  "3D Fly-Through Video: A virtual tour of your new yard",
  "3D Nightscape: Visualize your design with stunning nighttime lighting",
]);
</script>

<template>
  <div class="landing-container">
    <div class="relative h-screen w-full">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5812/fccf/3f5e0cd05ea26dc78e496ca26ddb232e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9wKg8aTAlN6gblnqNIrbA1qGOZiXpjeCN0N5vRbzwHRPNRup-3HGL7bDSf5ar-a3tMIi~5PXT0R4vUosiMV1qxTMw3DOax3bBnuj~o4QmISYHQ9v8qTbVjJgQnShnSbGcjWjk1RUA7Bsflk5MYXvrxsuF4v64nQ8rO~w7mj0zR703mCrzwoPbYUYyt-5AKuGD35Nog001qw2YXJkeaP2bg1oDYVihRIsbxTsOKkL3CvM-GFaUsarbrHt~MmAcfDjbveqi1DD5AYF~YQ2c0GVj2vA4XFmXE8gsU7uwP7~WiilKW9S2-vwJelxV9tKuJTACV2YnPkF4im5lEwlESSUw__')`,
        }"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 class="text-5xl font-bold md:text-6xl">Landscape Design</h1>
        <p class="mt-4 mb-12 text-lg md:text-xl max-w-2xl">
          Professional landscape design simplified
        </p>
        <FilledButton

          background-color="black"
          text="Book Free Design Consultation"
          text-color="white"
          class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto "
        />
      </div>
    </div>

    <ViewDesignSteps />
    <ViewDesignProcessOld />
    <ViewTestimonial />

    <div id="packages" class="my-10 lg:my-20 max-w-lg mx-auto">
      <div>
        <h4 class="font-playfairDisplay text-5xl tracking-wide font-[500]">
          Desi<span class="text-[#A89C93] font-imperial text-6xl">G </span>n
          Packages
        </h4>
      </div>

      <p class="text-[#454545] text-sm mt-4 leading-relaxed tracking-widest">
        Transform your outdoor space with our expertly crafted design packages.
        Each package is tailored to meet your needs, whether you’re looking for
        foundational plans or a fully immersive, luxury experience. With access
        to cutting-edge designs, we make your dream yard a reality.
      </p>
    </div>

    <div class="flex flex-wrap gap-8">
      <div
        class="max-w-md mx-auto shadow-lg rounded-2xl border border-gray-200"
      >
        <div class="text-center bg-gray-100 rounded-t-2xl p-4">
          <h2 class="text-2xl font-bold">Standard Design Package</h2>
          <p class="mt-2 text-gray-600">
            Perfect for homeowners looking for professional landscape plans to
            get started.
          </p>
        </div>
        <div class="p-6 space-y-4">
          <ul class="space-y-2 text-gray-700">
            <li
              v-for="(item, index) in features"
              :key="index"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-black mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ item }}
            </li>
          </ul>
          <div class="text-center">
            <FilledButton
              :noAction="true"
              background-color="black"
              text=" Explore the Standard Package"
              text-color="white"
              class="mt-32"
            />
          </div>
        </div>
      </div>

      <!--  -->

      <div
        class="max-w-md mx-auto shadow-lg rounded-2xl border border-gray-200"
      >
        <div class="text-center bg-gray-100 rounded-t-2xl p-4">
          <h2 class="text-2xl font-bold">Premium Design Package</h2>
          <p class="mt-2 text-gray-600">
            Ideal for more complex projects requiring detailed planning and
            customization.
          </p>
        </div>
        <div class="p-6 space-y-4">
          <ul class="space-y-2 text-gray-700">
            <li
              v-for="(item, index) in features2"
              :key="index"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-black mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ item }}
            </li>
          </ul>

          <div class="text-center">
            <FilledButton
              :noAction="true"
              background-color="black"
              text="Discover the Premium Package"
              text-color="white"
              class="mt-8"
            />
          </div>
        </div>
      </div>
      <!--  -->

      <div
        class="max-w-md mx-auto shadow-lg rounded-2xl border border-gray-200"
      >
        <div class="text-center bg-gray-100 rounded-t-2xl p-4">
          <h2 class="text-2xl font-bold">Luxe Design Package</h2>
          <p class="mt-2 text-gray-600">
            Our most immersive package for clients seeking a fully customized
            experience.
          </p>
        </div>
        <div class="p-6 space-y-4">
          <ul class="space-y-2 text-gray-700">
            <li
              v-for="(item, index) in features3"
              :key="index"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-black mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ item }}
            </li>
          </ul>

          <div class="text-center">
            <FilledButton
              :noAction="true"
              background-color="black"
              text="Upgrade to Luxe"
              text-color="white"
              class="mt-8"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- <ViewWhatWeDo /> -->
    <!-- <ViewWhyChooseUs /> -->
  </div>
</template>

<style scoped>
.text-green-600 {
  color: #16a34a;
}
.bg-green-500 {
  background-color: #16a34a;
}
.bg-green-600:hover {
  background-color: #15803d;
}
</style>
