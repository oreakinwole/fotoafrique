<template>
  <div class="py-32 px-20">
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
  </div>

  <Testimonial />

  <div class="pt-20 pb-56 bg-white">
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
        class="w-[300px] h-[500px] bg-blue-100 rounded-t-full absolute -top-40 right-0"
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

  <OurPortfolio class="mb-16" />
</template>
