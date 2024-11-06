<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: "#pin-windmill",
      start: "50% 50%",
      endTrigger: "#pin-windmill-wrap",
      end: "bottom 50%",
    },
  });

  // tl.to("#pin-windmill-svg", {
  //   rotateZ: 900,
  // });
});
</script>

<template>
  <div class="lg:pt-28">
    <section class="hidden lg:flex space-x-8 w-full mb-28">
      <div class="w-1/2 h-[700px] relative" id="pin-windmill">
        <div
          class="bg-black absolute top-0 left-0 h-full w-full opacity-65"
        ></div>

        <div class="absolute bottom-28 left-20 z-10">
          <h2
            class="text-white leading-tight font-playfairDisplay font-[600] text-5xl"
          >
            Sweating the Small Stuff<br />
            For
            <span class="text-loader-brown italic">Exceptional</span>
            Results<br />
          </h2>
        </div>

        <img
          src="@/assets/images/backyard_1.jpg"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-1/2 grid grid-cols-2 gap-8">
        <main class="col-span-1 space-y-8 mt-28 ">
          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                src="@/assets/images/services/1slandscape_sd.jpg"
                class="explore-item"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
            id="pin-windmill-svg"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/2spavers_sd.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/3spools.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/4outdoor.jpg"
              />
            </NuxtLink>
          </div>
          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/5sconcretesandiego.jpg"
              />
            </NuxtLink>
          </div>
        </main>

        <main class="col-span-1 space-y-8">
          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/6artifical.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/7patio.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/8fire.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full min-h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/9seat.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-[300px] min-h-[400px]  duration-300 ease-linear bg-black"
            id="pin-windmill-wrap"
         
            >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/10light.jpg"
              />
            </NuxtLink>
          </div>
        </main>
      </div>
    </section>

    <section class="lg:hidden">
      <div class="h-[700px] relative">
        <div
          class="bg-black absolute top-0 left-0 h-full w-full opacity-65"
        ></div>

        <div class="absolute bottom-28 left-5 z-10">
          <h2
            class="text-white leading-tight font-playfairDisplay font-[600] text-5xl"
          >
            Sweating the Small Stuff<br />
            For
            <span class="text-loader-brown italic">Exceptional</span>
            Results<br />
          </h2>
        </div>

        <img
          src="@/assets/images/backyard_1.jpg"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="mt-20   grid grid-cols-1 place-items-center gap-4 px-4 mb-20">
        <main class="col-span-1 space-y-20 ">
          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                src="@/assets/images/services/1slandscape_sd.jpg"
                class="explore-item"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/2spavers_sd.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/3spools.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/4outdoor.jpg"
              />
            </NuxtLink>
          </div>
          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/5sconcretesandiego.jpg"
              />
            </NuxtLink>
          </div>
        </main>

        <main class="col-span-1 mt-12 space-y-20">
          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/6artifical.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/7patio.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/8fire.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/9seat.jpg"
              />
            </NuxtLink>
          </div>

          <div
            class="w-full lg:h-[400px]  duration-300 ease-linear bg-black"
          >
            <NuxtLink to="services/landscape">
              <img
                class="explore-item"
                src="@/assets/images/services/10light.jpg"
              />
            </NuxtLink>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<style></style>
