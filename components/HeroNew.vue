<template>
  <div>
    <div class="hidden lg:block bg-black h-[700px] relative">
      <div
        class="bg-gray-900 absolute top-0 left-0 h-full w-full opacity-50"
      ></div>

      <video class="w-full h-full object-cover" autoplay muted loop>
        <source src="/video/new_hero-vid.mp4" type="video/mp4" />
        Something went wrong while playing video
      </video>
    </div>

    <MobileHero />
  </div>

  <div
    class="hidden lg:block px-2 md:px-8 lg:px-20 mt-20 max-w-screen-lg mx-auto text-center text-black mb-10"
    data-aos="fade-up"
    data-aos-easing="linear"
  >
    <h4
      class="font-playfairDisplay tracking-wide text-4xl lg:text-5xl font-semibold mb-2"
    >
      San
      <span
        class="text-[#A89C93] font-imperial font-normal text-6xl lg:text-6xl"
        >D </span
      >iego’s Premier Design & Build Landscaping Experts

      <!-- <span
          class="text-[#A89C93] font-imperial font-normal text-5xl lg:text-6xl"
          >C</span
        > -->
    </h4>

    <p class="text-xl mt-2 tracking-widest">Let’s create your dream yard</p>
    <p
      class="text-md text-[#9e9e9e] mt-4 lg:max-w-screen-xs leading-relaxed tracking-widest lg:mx-auto"
    >
      We transform outdoor spaces into stunning retreats with custom pools,
      patios, fire pits, and more.
    </p>
  </div>

  <div class="hidden lg:block text-center mt-16">
    <FilledButton
      background-color="black"
      text="Book Your Free Consultation Today"
      text-color="white"
      class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
    />
  </div>

  <ViewIntroduction />
  <!-- <ViewWhatWeDo /> -->
  <ViewWhyChooseUs />

</template>
