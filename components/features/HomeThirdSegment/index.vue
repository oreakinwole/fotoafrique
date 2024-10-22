<template>
  <div class="py-32 px-20">
    <section class="flex gap-x-8 justify-between h-[530px] py-10">
      <div
        class="explore-item w-1/3 h-full bg-[url('@/assets/images/pool1.png')] bg-no-repeat bg-left-top bg-contain bg-fixed"
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

        <div class="my-4 mt-20 grid grid-cols-3">
          <div class="place-content-end">
            <p class="font-medium">The best design for your space</p>
            <span class="text-new-gray">Located in San Diego</span>
          </div>

          <div>&nbsp;</div>
          <img src="@/assets/images/port1.png" width="200" />
        </div>

        <div class="max-w-20">
          <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"
          />
        </div>
      </div>
    </section>
  </div>

  <Testimonial />

  <div class="pt-20 pb-56  bg-white">
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

      <img
        class="absolute -top-40 right-0"
        width="400"
        src="@/assets/images/designerr__.png"
        data-aos="slide-up"
        data-aos-duration="2000"
      />
    </div>
  </div>

  <OurPortfolio class="mb-16" />
</template>
