<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate";

const turfGallery = ref(1);
const autoAniSection = ref();

const incrementTurf = () => {
  if (turfGallery.value === 3) return (turfGallery.value = 1);
  turfGallery.value += 1;
};

const decrementTurf = () => {
  if (turfGallery.value === 1) return;
  turfGallery.value -= 1;
};

onMounted(() => {
  autoAnimate(autoAniSection.value);
});
</script>

<template>
  <div>
    <div class="px-20 pt-28 cursor-default">
      <section
        class="flex gap-x-8 justify-between h-[580px] py-10 pb-20 border-b border-new-gray border-opacity-25"
      >
        <div class="w-1/3 h-full">
          <img
            src="@/assets/images/pool1.png"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="w-2/3 h-full">
          <p class="font-playfairDisplay text-7xl font-medium">
            Portfoli<span class="text-new-gray font-imperial text-7xl">O</span>
          </p>
          <ul class="flex justify-between max-w-[220px] font-medium">
            <li>Style</li>
            <li class="text-new-gray">Elegance</li>
            <li class="text-new-gray">Creative</li>
          </ul>

          <div class="my-4 mt-20 grid grid-cols-3">
            <img src="@/assets/images/port1.png" width="200" />
            <div class="place-content-end">
              <p class="font-medium">The best design for your space</p>
              <span class="text-new-gray">Located in San Diego</span>
            </div>
            <img src="@/assets/images/port1.png" width="200" />
          </div>
          <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="SCHEDULE A CALL"
          />
        </div>
      </section>

      <div class="relative mt-10" ref="autoAniSection">
        <div class="absolute top-0 right-0 flex gap-x-4 ">
          <svg
            @click="decrementTurf"
            class="w-6 cursor-pointer hover:w-7 transition-all duration-200 ease-out"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18.5"
              cy="18.5"
              r="18"
              transform="matrix(-1 0 0 1 37 0)"
              stroke="#A89C93"
            />
            <path
              d="M21.916 13.166L16.0827 18.9993L21.916 24.8327"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>

          <svg
            @click="incrementTurf"
            class="w-6 cursor-pointer hover:w-7 transition-all duration-200 ease-out"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18.5" cy="18.5" r="18" stroke="#A89C93" />
            <path
              d="M15.084 13.166L20.9173 18.9993L15.084 24.8327"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>

        <section class="h-[750px]" v-if="turfGallery === 1">
          <p class="font-playfairDisplay text-4xl font-medium">
            Paver
            <span class="text-new-gray font-imperial text-5xl">G</span>allery
          </p>

          <span class="text-xs text-brown"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
          >

          <div
            class="mt-10 flex gap-x-8 justify-between pb-20 border-b border-new-gray border-opacity-25"
          >
            <div class="w-1/3">
              <img src="@/assets/images/pool1.png" />
            </div>

            <div class="w-2/3">
              <p class="text-xs max-w-96 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies tellus at lacinia condimentum. Nulla in urna
                venenatis, cursus magna at, sollicitudin neque.

                <br />
                <br />
                <br />
                Maecenas ut nisi tristique, luctus sem eu, facilisis nisi. Donec
                molestie posuere viverra. Donec blandit sollicit erat sed
                pharetra. Nam nunc nisl, imperdiet nec hend eget, dictum et mi.
                In nec porta nunc, at posuere ante.
              </p>

              <div class="my-4 mt-20 grid grid-cols-4">
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <img src="@/assets/images/port1.png" width="200" />

                <img src="@/assets/images/port1.png" width="200" />
              </div>
            </div>
          </div>
        </section>

        <section class="h-[750px]" v-if="turfGallery === 2">
          <p class="font-playfairDisplay text-4xl font-medium">
            Concrete
            <span class="text-new-gray font-imperial text-5xl">G</span>allery
          </p>

          <span class="text-xs text-brown"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
          >

          <div
            class="mt-10 flex gap-x-8 pb-20 border-b border-new-gray border-opacity-25"
          >
            <p class="text-xs max-w-48 self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ultricies tellus at lacinia condimentum. Nulla in urna venenatis,
              cursus magna at, sollicitudin neque.
            </p>

            <div class="w-2/3 flex gap-x-6">
              <img src="@/assets/images/pool1.png" width="400" />

              <div class="grid grid-cols-2 gap-4">
                <img src="@/assets/images/port1.png" width="200" />

                <img
                  src="@/assets/images/port1.png"
                  class="self-end"
                  width="200"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="h-[750px]" v-if="turfGallery === 3">
          <div>
            <p class="font-playfairDisplay text-4xl font-medium">
              Turf
              <span class="text-new-gray font-imperial text-5xl">G</span>allery
            </p>

            <span class="text-xs text-brown"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
            >

            <div
              class="mt-10 flex gap-x-4 pb-20 border-b border-new-gray border-opacity-25"
            >
              <div class="w-1/3 flex flex-col justify-between items-end">
                <p class="text-xs max-w-48">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ultricies tellus at lacinia condimentum. Nulla in urna
                  venenatis, cursus magna at, sollicitudin neque.
                </p>

                <div class="">
                  <img src="../assets/images/port1.png" width="200" />
                </div>
              </div>

              <div class="w-2/3 flex gap-x-4">
                <img src="@/assets/images/pool1.png" width="400" />

                <div class="grid grid-cols-2 gap-4">
                  <img
                    src="@/assets/images/port1.png"
                    class="self-end"
                    width="200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <OurPortfolio />
    <!-- <GetYourYard /> -->
  </div>
</template>

<style></style>
