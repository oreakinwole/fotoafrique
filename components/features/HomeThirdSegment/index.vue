<script setup>
useHead({
  script: [{ src: "https://embed.typeform.com/next/embed.js" }],
});
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

  <div class="pt-14 lg:pb-20">
    <h1
      class="lg:hidden text-center font-bold text-5xl text-[#7B7B7B] opacity-50"
    >
      Why Choose<br />
      Modern Yardz?
    </h1>

    <h1
      class="hidden lg:block text-left pl-20 font-bold text-9xl text-[#7B7B7B] opacity-50"
      data-aos="slide-left"
      data-aos-duration="2000"
    >
      Why Choose
    </h1>
    <h1
      class="hidden lg:block text-right pr-20 font-bold text-9xl text-[#7B7B7B] opacity-50"
      data-aos="slide-right"
      data-aos-duration="2000"
    >
      Modern Yardz?
    </h1>

    <div
      class="max-w-screen-lg relative pl-5 pr-5 lg:pr-0 mx-auto mt-10 lg:mt-28 space-y-8"
    >
      <div
        class="font-inter text-black max-w-md font-[400] text-xs leading-loose"
      >
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#E6E6E6]">01</span>
        <p class="mt-4 text-[#454545]">
          At Modern Yardz, our mission is simple: to transform your outdoor
          space into something truly special. Based right here in San Diego,
          we’ve spent decades perfecting the craft of landscape design. From
          custom patios to complete backyard makeovers, we bring hands-on
          experience and a personalized touch to every project.
        </p>
      </div>
      <div
        class="font-inter text-black max-w-md font-[400] text-xs leading-loose"
      >
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#E6E6E6]">02</span>
        <p class="mt-4 text-[#454545]">
          At Modern Yardz, our mission is simple: to transform your outdoor With
          over 40 years in the business, we understand what it takes to create
          outdoor spaces that are both beautiful and functional. Our local roots
          mean we know San Diego’s unique landscape, and we’re committed to
          delivering results that exceed your expectations.
        </p>
      </div>

      <div
        class="font-inter text-black max-w-md font-[400] text-xs leading-loose"
      >
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#E6E6E6]">03</span>
        <p class="mt-4 text-[#454545]">
          Whether you’re looking to revamp your yard or start from scratch,
          we’re here to guide you through every step. Trust us to turn your
          vision into reality—because you deserve a space you’ll love for years
          to come.
        </p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="2000"
        class="hidden lg:block w-[400px] h-[630px] bg-blue-100 rounded-t-full absolute -top-40 right-0"
      >
        <video
          class="w-full h-full object-cover rounded-t-full bg-[url('@/assets/images/why_ch_bg.jpg')] bg-no-repeat bg-top bg-cover"
          autoplay
          muted
          loop
        >
          <source src="/video/why_ch_vid2.mp4" type="video/mp4" />
          Something went wrong while playing video
        </video>
      </div>
    </div>
  </div>

  <Testimonial />

  <div
    class="lg:hidden mt-24 px-6"
    data-aos="fade-up"
    data-aos-easing="linear"
  >
  <h4 class="text-4xl mb-4 font-semibold">Packages</h4>


    <p class="text-[#454545] text-lg  leading-relaxed">
      Every outdoor space has the potential to be extraordinary. Our custom
      design packages are crafted to fit your needs, whether you’re looking to
      refresh your front yard, revamp your backyard, or completely transform
      your outdoor living space. Choose the package that works best for you, and
      let us bring your vision to life.
    </p>
  </div>

  <div class="my-10 lg:my-36 flex">
    <div
      class="hidden lg:block ml-32 mt-20"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <div>
        <h4 class="text-6xl font-semibold">Packages</h4>
      </div>

      <p class="text-[#454545] text-xs mt-4 font-inter leading-relaxed">
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
                <p class="font-[400] font-inter text-[16px]">$1,890.80</p>
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
                <p class="font-[400] font-inter text-[16px]">$1,745.99</p>
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
                <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
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
                <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
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
                <p class="font-[400] font-inter text-[16px]">$4,000.00</p>
              </div>
            </div>
          </div>
        </NuxtMarquee>
      </div>

      <div class="lg:ml-20">
        <div class="lg:hidden flex flex-row justify-center flex-wrap gap-2 lg:gap-8">
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
              <p class="font-[400] font-inter text-[16px]">$1,890.80</p>
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
              <p class="font-[400] font-inter text-[16px]">$1,745.99</p>
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
              <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
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
              <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
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
              <p class="font-[400] font-inter text-[16px]">$4,000.00</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="mt-28 lg:mt-0 mb-12 lg:mb-28 bg-black h-[480px] lg:h-[600px] relative">
    <div class="absolute top-14 lg:top-28 left-5 right-4 lg:left-20 z-10">
      <div class="text-white font-semibold text-4xl lg:text-5xl">
        <p class="leading-tight">
          Not sure which package is right for you ?<br />
          Take our quiz to find your perfect<br />
          design package.
        </p>
      </div>

      <!-- <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="transparent"
        text="TAKE A QUIZ NOW"
        class="mt-10"
      /> -->

      <ClientOnly>
        <div class="mt-12" data-tf-live="01JBCJ0CFAY1HW94C4WJCBNZQZ"></div>
      </ClientOnly>
    </div>

    <div class="bg-black absolute top-0 left-0 h-full w-full opacity-50"></div>

    <video class="w-full h-full object-cover" autoplay muted loop>
      <source src="/video/quizvid.mp4" type="video/mp4" />
      Something went wrong while playing video
    </video>
  </div>

  <OurPortfolio class="mb-16" />
</template>
