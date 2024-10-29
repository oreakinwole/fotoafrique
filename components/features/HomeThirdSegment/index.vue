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

  <div class="pb-56 bg-white">
    <h1
      class="font-playfairDisplay text-left pl-20 font-bold text-9xl text-[#665244] opacity-50"
      data-aos="slide-left"
      data-aos-duration="2000"
    >
      Why Choose
    </h1>
    <h1
      class="font-playfairDisplay text-right pr-20 font-bold text-9xl text-[#665244] opacity-50"
      data-aos="slide-right"
      data-aos-duration="2000"
    >
      Modern Yardz?
    </h1>

    <div class="max-w-screen-lg relative pl-36 mx-auto mt-28 space-y-8">
      <div
        class="font-inter text-[#665244] max-w-md font-[400] text-xs leading-loose"
      >
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#F5F0EA]">01</span>
        <p class="mt-4">
          At Modern Yardz, our mission is simple: to transform your outdoor
          space into something truly special. Based right here in San Diego,
          we’ve spent decades perfecting the craft of landscape design. From
          custom patios to complete backyard makeovers, we bring hands-on
          experience and a personalized touch to every project.
        </p>
      </div>
      <div
        class="font-inter text-[#665244] max-w-md font-[400] text-xs leading-loose"
      >
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#F5F0EA]">02</span>
        <p class="mt-4">
          At Modern Yardz, our mission is simple: to transform your outdoor With
          over 40 years in the business, we understand what it takes to create
          outdoor spaces that are both beautiful and functional. Our local roots
          mean we know San Diego’s unique landscape, and we’re committed to
          delivering results that exceed your expectations.
        </p>
      </div>

      <div
        class="font-inter text-[#665244] max-w-md font-[400] text-xs leading-loose"
      >
        <span class="rounded-2xl font-semibold px-4 py-1 bg-[#F5F0EA]">03</span>
        <p class="mt-4">
          Whether you’re looking to revamp your yard or start from scratch,
          we’re here to guide you through every step. Trust us to turn your
          vision into reality—because you deserve a space you’ll love for years
          to come.
        </p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="2000"
        class="w-[400px] h-[630px] bg-blue-100 rounded-t-full absolute -top-40 right-0"
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

  <div class="my-36 flex cursor-default">
    <div class="ml-32 mt-20" data-aos="fade-up" data-aos-easing="linear">
      <div>
        <h4 class="font-playfairDisplay text-5xl font-[500]">
          Packa<span class="text-[#A89C93] font-imperial font-[400] text-6xl"
            >G</span
          >es
        </h4>
      </div>

      <p class="text-[#665244] text-xs font-[400] font-inter leading-relaxed">
        Every outdoor space has the potential to be extraordinary. Our custom
        design packages are crafted to fit your needs, whether you’re looking to
        refresh your front yard, revamp your backyard, or completely transform
        your outdoor living space. Choose the package that works best for you,
        and let us bring your vision to life.
      </p>

     
    </div>

    <div data-aos-duration="2000" data-aos-delay="400" data-aos="fade-in">
      <div class="ml-20">
        <NuxtMarquee class="max-w-[120em]">
          <div class="flex flex-row gap-8">
            <div>
              <NuxtLink to="3d-packages">
                <div
                  class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
                >
                  <img
                    src="@/assets/images/services/paver.png"
                    alt="frontyard picture"
                    class="w-full h-full"
                  />
                  <div
                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
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
                    src="@/assets/images/services/concrete.png"
                    alt="backyard picture"
                    class="w-full h-full"
                  />
                  <div
                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
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
                    src="@/assets/images/services/turf.png"
                    alt="fullyard picture"
                    class="w-full h-full"
                  />
                  <div
                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
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
                    src="/images/homesecondsegment/imgs/Renovation.svg"
                    alt="renovation picture"
                    class="w-full h-full"
                  />
                  <div
                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
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
                    class="w-full h-full"
                  />
                  <div
                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
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
    </div>
  </div>

  <div class="cursor-default mb-28 bg-black h-[600px] relative">
    <div class="absolute top-28 left-20 z-10">
      <h3
        class="text-white leading-normal font-playfairDisplay font-[600] text-5xl"
      >
        Not sure which package is right for you ?<br />
        Take our quiz to find your perfect <br />
        design package.
      </h3>

      <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="transparent"
        text="TAKE A QUIZ NOW"
        class="mt-10"
      />
    </div>

    <div class="bg-black absolute top-0 left-0 h-full w-full opacity-85"></div>

    <video class="w-full h-full object-cover" autoplay muted loop>
      <source src="/video/quizvid.mp4" type="video/mp4" />
      Something went wrong while playing video
    </video>
  </div>

  <OurPortfolio class="mb-16" />
</template>
