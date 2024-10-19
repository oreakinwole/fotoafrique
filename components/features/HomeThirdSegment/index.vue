<template>
  <div class="py-32 px-20">
    <section class="flex gap-x-8 justify-between h-[530px] py-10">
      <div
        class="explore-item w-1/3 h-full bg-[url('@/assets/images/pool1.png')] bg-no-repeat bg-center bg-cover bg-fixed"
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
  
  <div class="py-48 pb-96 bg-white">
    <h1
      class="font-playfairDisplay text-center drop-shadow-md font-extrabold text-9xl text-[#7e7d7d]"
      data-aos="slide-down"
      data-aos-duration="2000"
    >
      Meet the Designer
    </h1>

    <div class="max-w-screen-sm relative ml-[25em] mt-28">
      <p
        class="font-inter text-[#665244] font-[400] text-xs max-w-xs leading-loose"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat.
      </p>

      <OutlinedButton
        border-color="#000"
        text-color="#000"
        background-color="white"
        text="SCHEDULE A CALL"
        class="mt-10"
      />

      <img
        class="absolute -top-40 right-0"
        width="300"
        src="@/assets/images/designerr__.png"
        data-aos="slide-up"
        data-aos-duration="2000"
      />
    </div>
  </div>
  
  <OurPortfolio class="mb-16" />
</template>
