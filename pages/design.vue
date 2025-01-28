<script setup>
import "animate.css";
</script>

<template>
  <div class="landing-container">
    <div class="relative h-screen w-full">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5812/fccf/3f5e0cd05ea26dc78e496ca26ddb232e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9wKg8aTAlN6gblnqNIrbA1qGOZiXpjeCN0N5vRbzwHRPNRup-3HGL7bDSf5ar-a3tMIi~5PXT0R4vUosiMV1qxTMw3DOax3bBnuj~o4QmISYHQ9v8qTbVjJgQnShnSbGcjWjk1RUA7Bsflk5MYXvrxsuF4v64nQ8rO~w7mj0zR703mCrzwoPbYUYyt-5AKuGD35Nog001qw2YXJkeaP2bg1oDYVihRIsbxTsOKkL3CvM-GFaUsarbrHt~MmAcfDjbveqi1DD5AYF~YQ2c0GVj2vA4XFmXE8gsU7uwP7~WiilKW9S2-vwJelxV9tKuJTACV2YnPkF4im5lEwlESSUw__')`,
        }"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 class="text-5xl font-bold md:text-6xl">Landscape Design</h1>
        <p class="mt-4 mb-12 text-lg md:text-xl max-w-2xl">
          Professional landscape design simplified
        </p>
        <FilledButton
          background-color="black"
          text="Book Free Design Consultation"
          text-color="white"
          class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
        />
      </div>
    </div>

    <ViewDesignSteps />
    <ViewDesignProcess />

    <ViewTestimonial />
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
                  <h4 class="font-[500] text-[18px]">Premium</h4>
                  <p class="text-[16px]">$3,295</p>
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
                  <h4 class="font-[500] text-[18px]">Full Yard</h4>
                  <p class="text-[16px]">$1,595</p>
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
                  <h4 class="font-[500] text-[18px]">Front Yard</h4>
                  <p class="text-[16px]">$1,195</p>
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
                  <h4 class="font-[500] text-[18px]">Back Yard</h4>
                  <p class="text-[16px]">$1,395</p>
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
      <NuxtLink to="/#quiz">
        <FilledButton
          :no-action="true"
          background-color="black"
          text="Take Our Quiz to Find Your Package"
          text-color="white"
          class="w-[90%] font-semibold lg:w-[290px] lg:mb-20"
        />
      </NuxtLink>
    </div>

    <!-- <ViewWhatWeDo /> -->
    <!-- <ViewWhyChooseUs /> -->
  </div>
</template>
