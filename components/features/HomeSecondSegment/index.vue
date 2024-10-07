<script>
import backyard from "public/images/homesecondsegment/imgs/Backyard.svg";
import frontyard from "public/images/homesecondsegment/imgs/frontyard.svg";
import fullyard from "public/images/homesecondsegment/imgs/FullYard.svg";
import renovation from "public/images/homesecondsegment/imgs/Renovation.svg";
import greaterthanicon from "public/images/homesecondsegment/icons/grt.svg";
import lessthanicon from "public/images/homesecondsegment/icons/lst.svg";

export default {
  name: "HomeSecondSegment",

  data() {
    return {
      frontyard,
      backyard,
      fullyard,
      renovation,
      greaterthanicon,
      lessthanicon,
    };
  },
};
</script>

<template>
  <DesignProcess />

  <div
    class="mt-48 flex"
    data-aos-duration="2000"
    data-aos-delay="400"
    data-aos="fade-in"
  >
    <div class="ml-32 mt-20">
      <div>
        <h4 class="font-playfairDisplay text-5xl font-[500]">
          Packa<span class="text-[#A89C93] font-imperial font-[400] text-6xl"
            >G</span
          >es
        </h4>
      </div>

      <p
        class="text-[#665244] text-xs font-[400] font-inter max-w-lg leading-relaxed"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
        dictum diam. Vivamus dignissim turpis nec dui molestie, sit amet
        vestibulum tortor feugiat.
      </p>

      <FilledButton
        background-color="black"
        text="SCHEDULE A CALL"
        text-color="white"
        class="mt-6"
      />
    </div>

    <div>
      <div class="ml-20">
        <div class="flex flex-row gap-8">
          <div>
            <NuxtLink to="3d-packages">
              <div
                class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
              >
                <img
                  :src="frontyard"
                  alt="frontyard picture"
                  class="w-full h-full"
                />
                <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Front Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$1,890.80</p>
            </div>
          </div>

          <div>
            <NuxtLink to="3d-packages">
              <div
                class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
              >
                <img
                  :src="backyard"
                  alt="backyard picture"
                  class="w-full h-full"
                />
                <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Back Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$1,745.99</p>
            </div>
          </div>

          <div>
            <NuxtLink to="3d-packages">
              <div
                class="relative w-[340px] h-[420px] cursor-pointer group explore-item"
              >
                <img
                  :src="fullyard"
                  alt="fullyard picture"
                  class="w-full h-full"
                />
                <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                ></div>
              </div>
            </NuxtLink>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Full Yard</h4>
              <p class="font-[400] font-inter text-[16px]">$2,745.56</p>
            </div>
          </div>

          <div>
            <div class="relative w-[340px] h-[420px] cursor-pointer group">
              <img
                :src="renovation"
                alt="renovation picture"
                class="w-full h-full"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              ></div>
            </div>

            <div class="flex flex-row justify-between mt-5">
              <h4 class="font-inter font-[500] text-[18px]">Renovation</h4>
              <p class="font-[400] font-inter text-[16px]">$45.80</p>
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-row justify-between mt-12">
            <div class="w-[67.8rem] h-[1px] bg-[#A89C93]"></div>

            <div
              class="flex flex-row gap-8 justify-end mr-[17.8rem] font-[300] mt-[-9px]"
            >
              <img
                :src="lessthanicon"
                alt="less than icon"
                class="cursor-pointer"
              />
              <img
                :src="greaterthanicon"
                alt="graeter than icon"
                class="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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

  <!-- <GetYourYard /> -->
  <div class="py-48 pb-96 bg-white">
    <h1
      class="font-playfairDisplay text-center drop-shadow-md font-extrabold text-9xl text-[#7e7d7d]"
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
      />
    </div>
  </div>
</template>

<style>
#myVideo {
  /* position: fixed;
  right: 0;
  bottom: 0; */
  min-width: 100%;
  min-height: 100%;
}
</style>
