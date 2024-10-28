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

  tl.to("#pin-windmill-svg", {
    // rotateZ: 900,
  });
});
</script>

<template>
  <div class="pt-28">
    <section class="flex space-x-8 w-full mb-28">
      <div class="w-1/2 h-[700px] relative" id="pin-windmill">
        <div
          class="bg-black absolute top-0 left-0 h-full w-full opacity-65"
        ></div>

        <div class="absolute bottom-28 left-20 z-10 ">
      <h2 class="text-white leading-tight font-playfairDisplay font-[600] text-5xl">
        Sweating the Small Stuff<br />
        For <span class="text-loader-brown italic">Exceptional</span> Results<br />
        
      </h2>

     
    </div>

        <img
          src="@/assets/images/backyard_1.jpg"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-1/2 grid grid-cols-2 gap-4">
        <main class="col-span-1 space-y-20 mt-28">
          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/1slandscape_sd.jpg" />
          </div>

          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
            id="pin-windmill-svg"
          >
            <img src="@/assets/images/services/2spavers_sd.jpg" />
          </div>

          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/3spools.jpg" />
          </div>

            <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
            id="pin-windmill-wrap"
          >
            <img src="@/assets/images/services/4outdoor.jpg" />
          </div>
          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img
              src="@/assets/images/services/5sconcretesandiego.jpg"
            />
          </div>
        </main>

        <main class="col-span-1 space-y-20">
          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/6artifical.jpg" />
          </div>

          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/7patio.jpg" />
          </div>

          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/8fire.jpg" />
          </div>

          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/9seat.jpg" />
          </div>

          <div
            class="w-[300px] h-[400px] hover:scale-110 explore-item duration-300 ease-linear bg-black"
          >
            <img src="@/assets/images/services/10light.jpg" />
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<style></style>
