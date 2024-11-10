<script setup>
const isViewingDs = ref(null);

watch(isViewingDs, (val) => {
  console.log("current val", val);
});
</script>

<template>
  <div class="mt-20 lg:mt-28 lg:px-10 w-screen md:mt-20">
    <div
      class="px-2 md:px-8 lg:px-20 lg:text-center"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <h4 class="font-playfairDisplay text-5xl font-[500] mb-4">
        Our Desi<span class="text-[#A89C93] font-imperial font-[400] text-6xl"
          >G </span
        >n Process
      </h4>

      <p class="text-xl lg:text-3xl">
        Simple Steps to Your Dream Yard, Here’s how it works:
      </p>
      <p
        class="text-md lg:text-xs text-[#454545] mt-4 lg:max-w-screen-sm leading-relaxed lg:mx-auto"
      >
        Creating the outdoor space you’ve always wanted is easier than you
        think. Our collaborative design process ensures that every step is clear
        and tailored to your needs, from the first meeting to the final
        installation.
      </p>
    </div>

    <section
      class="px-2 flex justify-between lg:justify-center flex-wrap gap-2 lg:gap-4 mt-12"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[290px] w-[48.9%] lg:w-[300px] rounded-lg"
        :class="isViewingDs === 1 && 'h-[390px]'"
      >
        <header
          class="h-56 p-2 relative rounded-lg bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <div
            class="h-10 w-20 flex justify-center items-center text-sm bg-white rounded-lg text-black font-semibold"
          >
            Step 01
          </div>
        </header>

        <footer>
          <div class="flex justify-between items-center px-2 mt-[1rem]">
            <div class="flex items-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8307 10.8327V16.2493C23.8307 21.666 21.6641 23.8327 16.2474 23.8327H9.7474C4.33073 23.8327 2.16406 21.666 2.16406 16.2493V9.74935C2.16406 4.33268 4.33073 2.16602 9.7474 2.16602H15.1641"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.8307 10.8327H19.4974C16.2474 10.8327 15.1641 9.74935 15.1641 6.49935V2.16602L23.8307 10.8327Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.58594 14.084H14.0859"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.58594 18.416H11.9193"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm ml-2 font-medium">Free Design Consultation</p>
            </div>

            <svg
              role="button"
              @click="isViewingDs = 1"
              class="w-6"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21V7"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            v-if="isViewingDs === 1"
            class="text-sm mt-6 text-center px-4 pb-2"
          >
            We start with a free consultation to discuss your vision and goals.
          </p>
        </footer>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="400"
        data-aos-duration="900"
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[290px] w-[48.9%] lg:w-[300px] rounded-lg"
        :class="isViewingDs === 2 && 'h-[390px]'"
      >
        <header
          class="h-56 p-2 relative rounded-lg bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <div
            class="h-10 w-20 flex justify-center items-center text-sm bg-white rounded-lg text-black font-semibold"
          >
            Step 02
          </div>
        </header>

        <footer>
          <div class="flex justify-between items-center px-2 mt-[1rem]">
            <div class="flex items-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3982 2.32867L23.1482 6.22865C23.5274 6.38031 23.8307 6.8353 23.8307 7.23614V10.8328C23.8307 11.4286 23.3432 11.9161 22.7474 11.9161H3.2474C2.65156 11.9161 2.16406 11.4286 2.16406 10.8328V7.23614C2.16406 6.8353 2.4674 6.38031 2.84657 6.22865L12.5966 2.32867C12.8132 2.24201 13.1816 2.24201 13.3982 2.32867Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.8307 23.8333H2.16406V20.5833C2.16406 19.9875 2.65156 19.5 3.2474 19.5H22.7474C23.3432 19.5 23.8307 19.9875 23.8307 20.5833V23.8333Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.33594 19.4993V11.916"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.66406 19.4993V11.916"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 19.4993V11.916"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.3359 19.4993V11.916"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6641 19.4993V11.916"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.08594 23.834H24.9193"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 9.20898C13.8975 9.20898 14.625 8.48145 14.625 7.58398C14.625 6.68652 13.8975 5.95898 13 5.95898C12.1025 5.95898 11.375 6.68652 11.375 7.58398C11.375 8.48145 12.1025 9.20898 13 9.20898Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm ml-2 font-medium">2D Landscape Design</p>
            </div>

            <svg
              role="button"
              @click="isViewingDs = 2"
              class="w-6"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21V7"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            v-if="isViewingDs === 2"
            class="text-sm mt-6 text-center px-4 pb-2"
          >
            We create a 2D design plan that shows a clear, overhead view of your
            future landscape.
          </p>
        </footer>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="600"
        data-aos-duration="900"
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[290px] w-[48.9%] lg:w-[300px] rounded-lg"
        :class="isViewingDs === 3 && 'h-[390px]'"
      >
        <header
          class="h-56 p-2 relative rounded-lg bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <div
            class="h-10 w-20 flex justify-center items-center text-sm bg-white rounded-lg text-black font-semibold"
          >
            Step 03
          </div>
        </header>

        <footer>
          <div class="flex justify-between items-center px-2 mt-[1rem]">
            <div class="flex items-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.16406 23.834H23.8307"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2608 23.8233L3.26084 23.845L3.25 7.65999C3.25 6.93416 3.61835 6.26246 4.21418 5.86162L8.54752 2.96914C9.27335 2.48164 10.2267 2.48164 10.9525 2.96914L15.2858 5.86162C15.8925 6.26246 16.25 6.93416 16.25 7.65999L16.2608 23.8233Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6484 23.8442V19.5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6667 13C20.475 13 19.5 13.975 19.5 15.1667V17.3333C19.5 18.525 20.475 19.5 21.6667 19.5C22.8583 19.5 23.8333 18.525 23.8333 17.3333V15.1667C23.8333 13.975 22.8583 13 21.6667 13Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.25 15.166H16.25"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.75 23.834V19.7715"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.75 11.375C10.6475 11.375 11.375 10.6475 11.375 9.75C11.375 8.85254 10.6475 8.125 9.75 8.125C8.85254 8.125 8.125 8.85254 8.125 9.75C8.125 10.6475 8.85254 11.375 9.75 11.375Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm ml-2 font-medium">3D Design Renderings</p>
            </div>

            <svg
              role="button"
              @click="isViewingDs = 3"
              class="w-6"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21V7"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            v-if="isViewingDs === 3"
            class="text-sm mt-6 text-center px-4 pb-2"
          >
            We take it a step further by transforming the 2D plan into a
            realistic 3D rendering.
          </p>
        </footer>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="800"
        data-aos-duration="900"
        class="overflow-hidden border border-[#808080] py-[2px] px-[3px] h-[290px] w-[48.9%] lg:w-[300px] rounded-lg"
        :class="isViewingDs === 4 && 'h-[390px]'"
      >
        <header
          class="h-56 p-2 relative rounded-lg bg-[url('@/assets/images/step_one.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <div
            class="h-10 w-20 flex justify-center items-center text-sm bg-white rounded-lg text-black font-semibold"
          >
            Step 04
          </div>
        </header>

        <footer>
          <div class="flex justify-between items-center px-2 mt-[1rem]">
            <div class="flex items-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.75 7.58268V18.416C22.75 21.666 21.125 23.8327 17.3333 23.8327H8.66667C4.875 23.8327 3.25 21.666 3.25 18.416V7.58268C3.25 4.33268 4.875 2.16602 8.66667 2.16602H17.3333C21.125 2.16602 22.75 4.33268 22.75 7.58268Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7109 4.875V7.04167C15.7109 8.23333 16.6859 9.20833 17.8776 9.20833H20.0443"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.66406 14.084H12.9974"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.66406 18.416H17.3307"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm ml-2 font-medium">Comprehensive Quote</p>
            </div>

            <svg
              role="button"
              @click="isViewingDs = 4"
              class="w-6"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21V7"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            v-if="isViewingDs === 4"
            class="text-sm mt-6 text-center px-4 pb-2"
          >
            Once the design is finalized, we provide a detailed, itemized quote.
          </p>
        </footer>
      </div>
    </section>

    <footer class="lg:px-20 mt-14 text-center">
      <p class="text-[#454545] font-semibold mb-4">Ready to Get Started?</p>
      <FilledButton
        background-color="black"
        text="Book Free Design Consultation"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px]"
      />
    </footer>
  </div>
</template>
