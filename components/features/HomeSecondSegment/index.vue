<script setup></script>

<template>
  <ViewDesignProcess />

  <div class="mt-36 flex cursor-default">
    <div class="ml-32 mt-20" data-aos="fade-up" data-aos-easing="linear">
      <div>
        <h4 class="font-playfairDisplay text-5xl font-[500]">
          Servi<span class="text-[#A89C93] font-imperial font-[400] text-6xl"
            >C</span
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

    <div data-aos-duration="2000" data-aos-delay="400" data-aos="fade-in">
      <div class="ml-20">
        <NuxtMarquee class="max-w-[95em]">
          <div class="flex flex-row gap-8">
            <div>
              <NuxtLink to="services">
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
                <h4 class="font-inter font-[500] text-[18px]">Paver Patios</h4>
                <p class="font-[400] font-inter text-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div>
              <NuxtLink to="services">
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
                  Concrete Patios
                </h4>
                <p class="font-[400] font-inter text-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div>
              <NuxtLink to="services">
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
                  Artificial Turf
                </h4>
                <p class="font-[400] font-inter text-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div>
              <NuxtLink to="services">
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
                  Outdoor Kitchens
                </h4>
                <p class="font-[400] font-inter text-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>

          <!-- <div>
            <div class="flex flex-row justify-between mt-12">
              <div class="w-[67.8rem] h-[1px] bg-[#A89C93]"></div>

              <div
                class="flex flex-row gap-8 justify-end mr-[17.8rem] font-[300] mt-[-9px]"
              >
                <img
                  src="/images/homesecondsegment/icons/lst.svg"
                  alt="less than icon"
                  class="cursor-pointer"
                />
                <img
                  src="/images/homesecondsegment/icons/grt.svg"
                  alt="graeter than icon"
                  class="cursor-pointer"
                />
              </div>
            </div>
          </div> -->
        </NuxtMarquee>
      </div>
    </div>
  </div>

  <ViewBeforeAndAfter />
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
