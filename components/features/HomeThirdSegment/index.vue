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

  <div id="why-choose-us" class="pt-14 px-20">
    <h4 class="font-playfairDisplay text-5xl font-semibold text-center">
      Why
      <span class="font-imperial font-normal text-[#A89C93] text-7xl">C </span>
      <span class="text-[#A89C93]">hoose </span>
      Modern Yardz?
    </h4>
    <div class="h-[400px] mt-12 rounded-xl overflow-hidden">
      <img
        src="@/assets/images/teamphoto.jpeg"
        alt="team photo"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="max-w-screen-lg  relative pl-5 pr-5 lg:pr-0 mx-auto mt-10 lg:mt-20 space-y-8"
    >
      <div class="font-inter text-black max-w-lg leading-loose">
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#E6E6E6] text-sm">01</span>
        <p class="mt-4 text-md text-[#454545]">
          At Modern Yardz, our mission is simple: to transform your outdoor
          space into something truly special. Based right here in San Diego,
          we’ve spent decades perfecting the craft of landscape design. From
          custom patios to complete backyard makeovers, we bring hands-on
          experience and a personalized touch to every project.
        </p>
      </div>
      <div class="font-inter text-black max-w-lg leading-loose">
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#E6E6E6] text-sm">02</span>
        <p class="mt-4 text-md text-[#454545]">
          At Modern Yardz, our mission is simple: to transform your outdoor With
          over 40 years in the business, we understand what it takes to create
          outdoor spaces that are both beautiful and functional. Our local roots
          mean we know San Diego’s unique landscape, and we’re committed to
          delivering results that exceed your expectations.
        </p>
      </div>

      <div class="font-inter text-black max-w-lg leading-loose">
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#E6E6E6] text-sm">03</span>
        <p class="mt-4 text-md text-[#454545]">
          Whether you’re looking to revamp your yard or start from scratch,
          we’re here to guide you through every step. Trust us to turn your
          vision into reality—because you deserve a space you’ll love for years
          to come.
        </p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="2000"
        class="hidden lg:block md:block md:w-[38%] md:mr-2 w-[400px] h-[630px] bg-blue-100 rounded-full absolute lg:-top-10 md:-top-0 right-0"
      >
        <img
          src="@/assets/images/thomas_oww.jpeg"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  </div>

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
      Every outdoor space has the potential to be extraordinary. Our custom
      design packages are crafted to fit your needs, whether you’re looking to
      refresh your front yard, revamp your backyard, or completely transform
      your outdoor living space. Choose the package that works best for you, and
      let us bring your vision to life.
    </p>
  </div>

  <div id="packages" class="my-10 lg:mt-36 mb-20 flex">
    <div
      class="hidden lg:block ml-32 mt-8"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <div>
        <h4 class="font-playfairDisplay text-5xl font-[500]">
          Desi<span class="text-[#A89C93] font-imperial text-6xl">G </span>n
          Packages
        </h4>
      </div>

      <p class="text-[#454545] text-sm mt-4 leading-relaxed">
        Every outdoor space has the potential to be extraordinary. Our custom
        design packages are crafted to fit your needs, whether you’re looking to
        refresh your front yard, revamp your backyard, or completely transform
        your outdoor living space. Choose the package that works best for you,
        and let us bring your vision to life.
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
                <h4 class="font-inter font-[500] text-[18px]">
                  Full Yard Design
                </h4>
                <p class="font-inter text-[16px]">$1,890.80</p>
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
                <h4 class="font-inter font-[500] text-[18px]">
                  Backyard Design
                </h4>
                <p class="font-inter text-[16px]">$1,745.99</p>
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
                <h4 class="font-inter font-[500] text-[18px]">
                  Front Yard Design
                </h4>
                <p class="font-inter text-[16px]">$2,745.56</p>
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
                <h4 class="font-inter font-[500] text-[18px]">
                  Outdoor Transformation
                </h4>
                <p class="font-inter text-[16px]">$2,745.56</p>
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
                <h4 class="font-inter font-[500] text-[18px]">
                  Premium Design
                </h4>
                <p class="font-inter text-[16px]">$4,000.00</p>
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
              <h4 class="font-inter font-[500] text-[18px]">
                Full Yard Design
              </h4>
              <p class="font-inter text-[16px]">$1,890.80</p>
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
              <h4 class="font-inter font-[500] text-[18px]">Backyard Design</h4>
              <p class="font-inter text-[16px]">$1,745.99</p>
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
              <h4 class="font-inter font-[500] text-[18px]">
                Front Yard Design
              </h4>
              <p class="font-inter text-[16px]">$2,745.56</p>
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
              <h4 class="font-inter font-[500] text-[18px]">
                Outdoor Transformation
              </h4>
              <p class="font-inter text-[16px]">$2,745.56</p>
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
              <h4 class="font-inter font-[500] text-[18px]">Premium Design</h4>
              <p class="  font-inter text-[16px]">$4,000.00</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
    <FilledButton
      :no-action="true"
      background-color="black"
      text="CHOOSE YOUR PACKAGE"
      text-color="white"
      class="w-[90%] font-semibold lg:w-[290px] lg:mb-20"
    />
  </div>

  <div
    class="mt-28 lg:mt-0 mb-12 lg:mb-28 bg-black h-[430px] lg:h-[500px] relative"
  >
    <div class="absolute top-20 lg:top-28 left-2 right-2 z-10">
      <div
        class="text-white font-semibold text-4xl lg:text-5xl max-w-[600px] mx-auto"
      >
        <p class="leading-tight text-center">
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
