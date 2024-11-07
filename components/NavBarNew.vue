<script setup>
const isShowMobileNav = ref(false);

const toggleNav = () => {
  isShowMobileNav.value = !isShowMobileNav.value;
};

const handleBookConsult = () => {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
};
</script>

<template>
  <div
    class="lg:absolute lg:top-0 hero-trigger lg:bg-none flex w-full items-center justify-between py-4 lg:py-8 px-8 lg:px-28 max-w-[1600px]"
  >
    <NuxtLink
      to="/"
      :class="
        isShowMobileNav
          ? 'animate__animated animate__fadeOut animate__slow'
          : 'animate__animated animate__fadeIn animate__slow'
      "
    >
      <img src="@/assets/svg/logo.svg" class="w-24" />
    </NuxtLink>
    <p
      class="hidden lg:block text-xs font-medium animate__animated animate__flipInX animate__delay-3s"
    >
      <span class="">Start Your Transformation Today –</span>
      <span
        class="font-bold border-black border-b"
        @click="handleBookConsult"
        role="button"
      >
        Book a Free Consultation</span
      >
    </p>

    <svg
      role="button"
      @click="toggleNav"
      class="w-7 lg:w-8"
      width="60"
      height="39"
      viewBox="0 0 60 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="60" y2="1.5" stroke="black" stroke-width="3" />
      <line y1="19.5" x2="60" y2="19.5" stroke="black" stroke-width="3" />
      <line y1="37.5" x2="60" y2="37.5" stroke="black" stroke-width="3" />
    </svg>

    <div
      class="animate__animated animate__slideInDown fixed top-0 right-0 bg-white h-screen w-full z-20"
      v-if="isShowMobileNav"
    >
      <main class="flex h-full">
        <div class="hidden h-full lg:block lg:w-2/5 bg-gray-200 relative">
          <div
            class="bg-black absolute top-0 left-0 h-full w-full opacity-85"
          ></div>

          <video class="w-full h-full object-cover" autoplay muted loop>
            <source src="/video/quizvid.mp4" type="video/mp4" />
            Something went wrong while playing video
          </video>
        </div>

        <div class="w-full lg:w-2/3 px-8">
          <nav class="flex justify-between pt-2 items-center h-14">
            <div class="animate__animated animate__fadeIn animate__delay-2s">
              <NuxtLink to="/">
                <img
                  src="@/assets/svg/logo.svg"
                  width="70"
                  @click="isShowMobileNav = false"
                />
              </NuxtLink>
            </div>

            <svg
              role="button"
              @click="toggleNav"
              class="w-6"
              width="46"
              height="45"
              viewBox="0 0 46 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.93934"
                y1="43.9393"
                x2="44.3657"
                y2="1.51293"
                stroke="black"
                stroke-width="3"
              />
              <line
                y1="-1.5"
                x2="60"
                y2="-1.5"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 3 0)"
                stroke="black"
                stroke-width="3"
              />
            </svg>
          </nav>

          <section
            class="flex justify-between mt-12 lg:mt-0 lg:items-center animate__animated animate__fadeIn animate__slow"
          >
            <ul class="space-y-8">
              <li
                class="text-5xl lg:text-6xl hover:scale-x-90 duration-200 ease-linear font-semibold"
                @click="isShowMobileNav = false"
              >
                <NuxtLink to="/services">Services</NuxtLink>
              </li>

              <li
                class="text-5xl lg:text-6xl hover:scale-x-90 duration-200 ease-linear font-semibold"
                @click="isShowMobileNav = false"
              >
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
              </li>
              <li
                class="text-5xl lg:text-6xl hover:scale-x-90 duration-200 ease-linear font-semibold"
                @click="isShowMobileNav = false"
              >
                <NuxtLink to="/3d-packages">3D Packages</NuxtLink>
              </li>
              <li
                class="text-5xl lg:text-6xl hover:scale-x-90 duration-200 ease-linear font-semibold"
                @click="isShowMobileNav = false"
              >
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
            </ul>

            <svg
              class="w-12 -mt-16 lg:mt-0 lg lg:w-14"
              width="94"
              height="442"
              viewBox="0 0 94 442"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="47" cy="395" r="46.5" stroke="black" />
              <path
                d="M55.0502 379H38.3614C33.7508 379 30 382.752 30 387.364V402.636C30 407.248 33.7508 411 38.3614 411H55.0502C59.6608 411 63.4116 407.248 63.4116 402.636V387.364C63.4116 382.752 59.6608 379 55.0502 379ZM32.9496 387.364C32.9496 384.379 35.3777 381.95 38.3614 381.95H55.0502C58.0338 381.95 60.4619 384.379 60.4619 387.364V402.636C60.4619 405.621 58.0338 408.05 55.0502 408.05H38.3614C35.3777 408.05 32.9496 405.621 32.9496 402.636V387.364Z"
                fill="black"
              />
              <path
                d="M46.7072 402.778C50.9947 402.778 54.4847 399.289 54.4847 394.999C54.4847 390.708 50.9966 387.219 46.7072 387.219C42.4179 387.219 38.9297 390.708 38.9297 394.999C38.9297 399.289 42.4179 402.778 46.7072 402.778ZM46.7072 390.171C49.3696 390.171 51.5351 392.337 51.5351 395C51.5351 397.664 49.3696 399.83 46.7072 399.83C44.0448 399.83 41.8793 397.664 41.8793 395C41.8793 392.337 44.0448 390.171 46.7072 390.171Z"
                fill="black"
              />
              <path
                d="M55.2049 388.474C56.3594 388.474 57.3005 387.534 57.3005 386.377C57.3005 385.221 56.3613 384.281 55.2049 384.281C54.0485 384.281 53.1094 385.221 53.1094 386.377C53.1094 387.534 54.0485 388.474 55.2049 388.474Z"
                fill="black"
              />
              <circle cx="47" cy="279" r="46.5" stroke="black" />
              <path
                d="M30.0822 263L43.2794 280.65L30 295H32.9895L44.6168 282.437L54.0105 295H64.1821L50.243 276.358L62.6041 263H59.6146L48.9076 274.571L40.2558 263H30.0842H30.0822ZM34.4773 265.202H39.149L59.783 292.798H55.1112L34.4773 265.202Z"
                fill="black"
              />
              <circle cx="47" cy="163" r="46.5" stroke="black" />
              <path
                d="M55.0502 147H38.3614C33.7508 147 30 150.752 30 155.364V170.636C30 175.248 33.7508 179 38.3614 179H55.0502C59.6608 179 63.4116 175.248 63.4116 170.636V155.364C63.4116 150.752 59.6608 147 55.0502 147ZM32.9496 155.364C32.9496 152.379 35.3777 149.95 38.3614 149.95H55.0502C58.0338 149.95 60.4619 152.379 60.4619 155.364V170.636C60.4619 173.621 58.0338 176.05 55.0502 176.05H38.3614C35.3777 176.05 32.9496 173.621 32.9496 170.636V155.364Z"
                fill="black"
              />
              <path
                d="M46.7072 170.778C50.9947 170.778 54.4847 167.289 54.4847 162.999C54.4847 158.708 50.9966 155.219 46.7072 155.219C42.4179 155.219 38.9297 158.708 38.9297 162.999C38.9297 167.289 42.4179 170.778 46.7072 170.778ZM46.7072 158.171C49.3696 158.171 51.5351 160.337 51.5351 163C51.5351 165.664 49.3696 167.83 46.7072 167.83C44.0448 167.83 41.8793 165.664 41.8793 163C41.8793 160.337 44.0448 158.171 46.7072 158.171Z"
                fill="black"
              />
              <path
                d="M55.2049 156.474C56.3594 156.474 57.3005 155.534 57.3005 154.377C57.3005 153.221 56.3613 152.281 55.2049 152.281C54.0485 152.281 53.1094 153.221 53.1094 154.377C53.1094 155.534 54.0485 156.474 55.2049 156.474Z"
                fill="black"
              />
              <circle cx="47" cy="47" r="46.5" stroke="black" />
              <path
                d="M49.7243 38.2106V42.7221H54.9986L54.1635 48.7994H49.7243V62.8012C48.8342 62.9318 47.9236 63 46.9993 63C45.9324 63 44.8846 62.91 43.8643 62.7359V48.7994H39V42.7221H43.8643V37.2021C43.8643 33.7774 46.4878 31 49.7256 31V31.0029C49.7352 31.0029 49.7435 31 49.7531 31H55V36.2559H51.5715C50.5526 36.2559 49.7256 37.131 49.7256 38.2091L49.7243 38.2106Z"
                fill="black"
              />
            </svg>
          </section>

          <footer class="grid grid-cols-4 lg:mt-16">
            <div class="col-span-1 space-y-4">
              <p class="text-xs font-semibold">Locations</p>
              <p class="text-xs">San Diego</p>
            </div>
            <div class="col-span-1 space-y-4">
              <p class="text-xs font-semibold">Legal</p>
              <p class="text-xs">Privacy Policy</p>
              <p class="text-xs">Term of Use</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>
