<script setup>
useHead({
  script: [{ src: "https://embed.typeform.com/next/embed.js" }],
});

const datafQ = ref([
  {
    "@type": "Question",
    name: "What makes Modern Yardz a top landscaper in San Diego?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Modern Yardz stands out for our decades of experience, passion for crafting beautiful, functional outdoor spaces, and personalized service tailored to each client's unique vision.",
    },
  },
  {
    "@type": "Question",
    name: "How can I find the best landscaping services near me in San Diego?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Look for landscapers with a strong local reputation, a portfolio of diverse projects, and services that match your outdoor vision. Modern Yardz meets all these criteria, offering comprehensive landscaping solutions across San Diego.",
    },
  },
  {
    "@type": "Question",
    name: "What types of landscaping services does Modern Yardz offer?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We specialize in a variety of services including garden design, artificial turf installation, outdoor kitchens, pools & spas, patio covers, pergolas, fire features, and custom concrete work.",
    },
  },
  {
    "@type": "Question",
    name: "Can Modern Yardz help with small landscaping projects?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Absolutely! We cater to projects of all sizes, from minor enhancements to major transformations, ensuring each client receives the attention and expertise their outdoor space deserves.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz offer eco-friendly landscaping options?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we're committed to sustainability, offering drought-tolerant landscapes, native plant selections, and efficient irrigation systems to minimize water use and support the local ecosystem.",
    },
  },
  {
    "@type": "Question",
    name: "How does the landscape design process work with Modern Yardz?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Our process begins with a consultation to understand your vision and needs. We then provide a detailed design proposal, including 3D renderings, before starting the installation, ensuring your complete satisfaction with the final outcome.",
    },
  },
  {
    "@type": "Question",
    name: "What is the average cost of landscaping services in San Diego?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Costs vary widely depending on project scope, materials, and design complexity. Contact Modern Yardz for a free quote tailored to your specific landscaping needs and budget.",
    },
  },
  {
    "@type": "Question",
    name: "How long does a typical landscaping project take with Modern Yardz?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Project timelines can vary from a few days for simple installations to several weeks for comprehensive designs, depending on the project's scale and complexity. We prioritize efficiency and quality, keeping you informed every step of the way.",
    },
  },
  {
    "@type": "Question",
    name: "Can Modern Yardz incorporate existing landscape features into a new design?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we excel at blending new designs with existing landscape elements, enhancing your outdoor space while preserving its unique character and features you love.",
    },
  },
  {
    "@type": "Question",
    name: "How can I maintain my new landscape to keep it looking great year-round?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Modern Yardz offers maintenance advice and services, including proper watering, pruning, and care tips tailored to your landscape's specific needs, ensuring it thrives in every season.",
    },
  },
]);


</script>

<template>
  <!-- <div class="py-24 px-20">
    <section class="flex gap-x-8 justify-between h-[530px] py-10">
      <div
        class="explore-item w-1/3 h-full bg-[url('@/assets/images/pool1.jpg')] bg-no-repeat bg-left-top bg-contain bg-fixed"
      ></div>

      <div class="w-2/3 h-full" id="portfolioIntro">
        <p
          class="max-w-xl text-3xl"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          WE STRIVE TO ENHANCE THE SYNERGY BETWEEN AESTHETICS, STRUCTURE, AND
          ENVIRONMENTAL DESIGN.
        </p>

        <div class="my-4 h-[calc(100%-7.9rem)] grid grid-cols-3">
          <div class="place-content-end col-span-2">
            <p class="text-brown text-sm leading-relaxed max-w-md text-justify">
              At Modern Yardz, we’re passionate about crafting outdoor spaces
              that blend beauty, functionality, and the natural environment.
              Every design is created with care to ensure it complements both
              your lifestyle and the unique characteristics of your home.
            </p>
          </div>

          <div class="col-span-1">
            <img src="@/assets/images/port1.png" width="200" />
          </div>
        </div>
      </div>
    </section>
  </div> -->

  

  <div
    id="packages"
    class="lg:hidden mt-24 px-6"
    data-aos="fade-up"
    data-aos-easing="linear"
  >
    <h4 class="font-playfairDisplay text-4xl font-[500] mb-4">
      Desi<span class="text-[#A89C93] font-imperial text-5xl">G </span>n
      Packages
    </h4>

    <p class="text-[#454545] text-lg leading-relaxed">
      Whether you’re looking for a front yard refresh or a full backyard
      makeover, our design packages make it easy to get started. Choose the
      perfect package for your project, and let us handle the rest.
    </p>
  </div>

  <div id="packages" class="my-10 lg:mt-36 mb-20 flex">
    <div
      class="hidden lg:block ml-32 mt-16"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <div>
        <h4 class="font-playfairDisplay text-5xl tracking-wide font-[500]">
          Desi<span class="text-[#A89C93] font-imperial text-6xl">G </span>n
          Packages
        </h4>
      </div>

      <p class="text-[#454545] text-sm mt-4 leading-relaxed tracking-widest">
        Whether you’re looking for a front yard refresh or a full backyard
        makeover, our design packages make it easy to get started. Choose the
        perfect package for your project, and let us handle the rest.
      </p>
    </div>

    <div data-aos-duration="2000" data-aos-delay="400" data-aos="fade-in">
      <div class="hidden lg:block ml-20">
        <NuxtMarquee class="max-w-[120em]">
          <div class="flex flex-row gap-8">
            <div>
              <NuxtLink to="3d-packages">
                <div
                  class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
                >
                  <img
                    src="@/assets/images/packages/p-fullyard.jpg"
                    alt="frontyard picture"
                    class="w-full h-full rounded-xl"
                  />
                  <div
                    class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  ></div>
                </div>
              </NuxtLink>

              <div class="flex flex-row justify-between mt-5">
                <h4 class="font-[500] text-[18px]">Full Yard Design</h4>
                <p class="text-[16px]">$1,890.80</p>
              </div>
            </div>

            <div>
              <NuxtLink to="3d-packages">
                <div
                  class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
                >
                  <img
                    src="@/assets/images/packages/p-backyard.jpg"
                    alt="backyard picture"
                    class="w-full h-full rounded-xl"
                  />
                  <div
                    class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  ></div>
                </div>
              </NuxtLink>

              <div class="flex flex-row justify-between mt-5">
                <h4 class="font-[500] text-[18px]">Backyard Design</h4>
                <p class="text-[16px]">$1,745.99</p>
              </div>
            </div>

            <div>
              <NuxtLink to="3d-packages">
                <div
                  class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
                >
                  <img
                    src="@/assets/images/packages/p-frontyard.jpg"
                    alt="fullyard picture"
                    class="w-full h-full rounded-xl"
                  />
                  <div
                    class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  ></div>
                </div>
              </NuxtLink>

              <div class="flex flex-row justify-between mt-5">
                <h4 class="font-[500] text-[18px]">Front Yard Design</h4>
                <p class="text-[16px]">$2,745.56</p>
              </div>
            </div>

            <div>
              <NuxtLink to="3d-packages">
                <div
                  class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
                >
                  <img
                    src="@/assets/images/packages/p-outdoor.jpg"
                    alt="renovation picture"
                    class="w-full h-full rounded-xl"
                  />
                  <div
                    class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  ></div>
                </div>
              </NuxtLink>

              <div class="flex flex-row justify-between mt-5">
                <h4 class="font-[500] text-[18px]">Outdoor Transformation</h4>
                <p class="text-[16px]">$2,745.56</p>
              </div>
            </div>

            <div>
              <NuxtLink to="3d-packages">
                <div
                  class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
                >
                  <img
                    src="/images/homesecondsegment/imgs/Renovation.svg"
                    alt="renovation picture"
                    class="w-full h-full rounded-xl"
                  />
                  <div
                    class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  ></div>
                </div>
              </NuxtLink>

              <div class="flex flex-row justify-between mt-5">
                <h4 class="font-[500] text-[18px]">Premium Design</h4>
                <p class="text-[16px]">$4,000.00</p>
              </div>
            </div>
          </div>
        </NuxtMarquee>
      </div>

      <div class="lg:ml-20">
        <div
          class="lg:hidden flex flex-row justify-center flex-wrap gap-2 lg:gap-8"
        >
          <div class="w-[47%]">
            <NuxtLink to="3d-packages">
              <div
                class="relative w-full h-[250px] cursor-pointer group explore-item"
              >
                <img
                  src="@/assets/images/packages/p-fullyard.jpg"
                  alt="frontyard picture"
                  class="w-full h-full rounded-xl"
                />
                <div
                  class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-wrap justify-between mt-5">
              <h4 class="font-[500] text-[18px]">Full Yard Design</h4>
              <p class="text-[16px]">$1,890.80</p>
            </div>
          </div>

          <div class="w-[47%]">
            <NuxtLink to="3d-packages">
              <div
                class="relative w-full h-[250px] cursor-pointer group explore-item"
              >
                <img
                  src="@/assets/images/packages/p-backyard.jpg"
                  alt="backyard picture"
                  class="w-full h-full rounded-xl"
                />
                <div
                  class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-wrap justify-between mt-5">
              <h4 class="font-[500] text-[18px]">Backyard Design</h4>
              <p class="text-[16px]">$1,745.99</p>
            </div>
          </div>

          <div class="w-[47%]">
            <NuxtLink to="3d-packages">
              <div
                class="relative w-full h-[250px] cursor-pointer group explore-item"
              >
                <img
                  src="@/assets/images/packages/p-frontyard.jpg"
                  alt="fullyard picture"
                  class="w-full h-full rounded-xl"
                />
                <div
                  class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-wrap justify-between mt-5">
              <h4 class="font-[500] text-[18px]">Front Yard Design</h4>
              <p class="text-[16px]">$2,745.56</p>
            </div>
          </div>

          <div class="w-[47%]">
            <NuxtLink to="3d-packages">
              <div
                class="relative w-full h-[250px] cursor-pointer group explore-item"
              >
                <img
                  src="@/assets/images/packages/p-outdoor.jpg"
                  alt="renovation picture"
                  class="w-full h-full rounded-xl"
                />
                <div
                  class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-wrap justify-between mt-5">
              <h4 class="font-[500] text-[18px]">Outdoor Transformation</h4>
              <p class="text-[16px]">$2,745.56</p>
            </div>
          </div>

          <!-- <div class="w-[47%]">
            <NuxtLink to="3d-packages">
              <div
                class="relative w-full h-[250px] cursor-pointer group explore-item"
              >
                <img
                  src="/images/homesecondsegment/imgs/Renovation.svg"
                  alt="renovation picture"
                  class="w-full h-full rounded-xl"
                />
                <div
                  class="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-wrap justify-between mt-5">
              <h4 class=" font-[500] text-[18px]">Premium Design</h4>
              <p class="   text-[16px]">$4,000.00</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
    <NuxtLink to="#quiz">
      <FilledButton
        :no-action="true"
        background-color="black"
        text="Take Our Quiz to Find Your Package"
        text-color="white"
        class="w-[90%] font-semibold lg:w-[290px] lg:mb-20"
      />
    </NuxtLink>
  </div>

  <div
    id="quiz"
    class="mt-28 lg:mt-0 mb-12 lg:mb-28 bg-black h-[430px] lg:h-[500px] relative"
  >
    <div class="absolute top-20 lg:top-28 left-2 right-2 z-10">
      <div
        class="text-white font-semibold text-4xl lg:text-5xl max-w-[600px] mx-auto"
      >
        <p class="leading-tight tracking-wider text-center">
          Not sure where to start ? <br />
          Take our quiz to find your design package.
          <br />
        </p>
      </div>

      <!-- <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="transparent"
        text="TAKE A QUIZ NOW"
        class="mt-10"
      /> -->

      <div
        class="mt-12 text-center"
        data-tf-live="01JBCJ0CFAY1HW94C4WJCBNZQZ"
      ></div>
    </div>

    <div class="bg-black absolute top-0 left-0 h-full w-full opacity-50"></div>

    <video class="w-full h-full object-cover" autoplay muted loop>
      <source src="/video/quizvid.mp4" type="video/mp4" />
      Something went wrong while playing video
    </video>
  </div>

  <FAQs class="mb-16" :faq-data="{ dataArray: datafQ }" />
</template>

<style lang="scss">
[data-tf-live] button {
  background-color: transparent !important ;
  border: 1px solid white !important;
  border-radius: 0.75rem !important;
  height: 50px !important;
  width: 200px !important;
  font-family: "Inter" !important;
  font-size: 1rem !important;
}
</style>
