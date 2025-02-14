<script setup>
import "animate.css";
const features = ref([
  {
    title: "Standard",
    attributes: [
      "1 consultation with a designer",
      "Up to 3 design revisions",
      "Comprehensive planting plan",
      "Hardscape layout",
      "Outdoor lighting design",
      "2D landscape plans for a clear project blueprint",
    ],
    priceRange: "$1,195 - $1,595",
  },
  {
    title: "Premium",
    attributes: [
      "1 consultation with a designer",
      "Up to 10 design revisions",
      "Comprehensive planting plan",
      "Irrigation plan for efficient water management",
      "Hardscape layout",
      "Drainage planning for long-term durability",
      "Outdoor lighting design",
      "2D landscape plans for easy visualization",
      "High-quality 3D renderings of your outdoor space",
    ],
    priceRange: "$1,195 - $1,595",
  },
  {
    title: "Luxe",
    attributes: [
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
    ],
    priceRange: "",
  },
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
        <h1 class="text-5xl font-bold md:text-6xl">Our Design Process</h1>
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

    <ViewTestimonial />

    <section class="pb-20 px-4 lg:px-20 bg-[#EFF4E4]">
    <div class="py-20 max-w-full sm:max-w-xl lg:max-w-lg mx-auto">
      <div>
        <h4 class="text-5xl tracking-wide font-semibold text-center">
          Design Packages
        </h4>
      </div>
      <p class="text-[#454545] text-sm mt-4 text-center leading-relaxed tracking-widest">
        Transform your outdoor space with our expertly crafted design packages.
        Each package is tailored to meet your needs, whether you’re looking for
        foundational plans or a fully immersive, luxury experience. With access
        to cutting-edge designs, we make your dream yard a reality.
      </p>
    </div>
    <div class="flex justify-center gap-6 flex-wrap">
      <div
        v-for="(item, cardContainerIndex) in features"
        :key="cardContainerIndex"
        :class="
          cardContainerIndex % 2 === 0
            ? 'bg-white text-black'
            : 'bg-black text-white'
        "
        class="rounded-lg px-8 py-6 w-full sm:min-h-80 sm:max-w-[330px] flex flex-col justify-between shadow"
      >
        <div>
          <h2 class="font-bold text-3xl mt-4">{{ item.title }}</h2>
          <hr class="my-4 border-gray-400" />
          <ul class="space-y-2 py-4">
            <li
              v-for="(item, index) in item.attributes"
              :key="index"
              class="flex gap-4 items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
        <div>
          <hr class="my-4 border-gray-400" />
          <div class="flex justify-between items-center">
            <p class="text-sm font-bold">{{ item.priceRange }}</p>
            <FilledButton
              :noAction="true"
              :backgroundColor="cardContainerIndex % 2 === 0 ? '#000' : '#fff'"
              :text="item.priceRange ? 'B00K NOW' : 'CONTACT FOR PRICING'"
              :textColor="cardContainerIndex % 2 === 0 ? '#fff' : '#000'"
              :width="item.priceRange ? 'fit-content' : '100%'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

   
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
