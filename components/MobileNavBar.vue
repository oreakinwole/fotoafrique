<script setup>
// import autoAnimate from "@formkit/auto-animate";

const isMenuOpen = ref(false);
const isServicesOpen = ref(false);

// const autoAniSection = ref();

// onMounted(() => {
//   autoAnimate(autoAniSection.value, { duration: 300 });
// });

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div
    class="flex bg-transparent justify-between w-full h-[50px] items-center px-4"
  >
    <!-- Logo -->
    <div>
      <NuxtLink to="/">
        <img
          src="/images/navbar/imgs/logo.png"
          alt="logo"
          class="w-20"
          :class="isMenuOpen && 'animate__animated animate__fadeOut'"
        />
      </NuxtLink>
    </div>

    <!-- Hamburger menu icon -->
    <div @click="toggleMenu">
      <div class="space-y-2">
        <!-- <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span> -->

        <img
          src="/images/navbar/icons/menu.png"
          alt="menu"
          class="w-[25px] h-[25px]"
        />
      </div>
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="animate__animated animate__slideInRight absolute top-0 left-0 w-full bg-black shadow-md z-60"
    >
      <div class="flex flex-row justify-between px-4 pt-8">
        <div class="pl-2">
          <NuxtLink to="/">
            <img
              @click="toggleMenu"
              src="/images/navbar/imgs/bg-logo.png"
              alt="logo"
              class="w-20 animate__animated animate__fadeIn animate__delay-1s"
          /></NuxtLink>
        </div>

        <div @click="toggleMenu">
          <img
            src="/images/navbar/icons/closewhite.png"
            alt="close"
            class="w-[20px] h-[20px]"
          />
        </div>
      </div>
      <ul
        class="flex flex-col w-full justify-center items-center pt-14 gap-5 text-[#A89C93] text-2xl font-playfairDisplay pl-2"
      >
        <div>
          <header
            @click="isServicesOpen = !isServicesOpen"
            class="flex items-center"
          >
            <p class="py-2">Services</p>
            <svg
              class="ml-2 w-6"
              :class="isServicesOpen && 'rotate-180'"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9181 8.94922L13.3981 15.4692C12.6281 16.2392 11.3681 16.2392 10.5981 15.4692L4.07812 8.94922"
                stroke="#665244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </header>

          <ul
            class="animate__animated animate__fadeIn text-xs pl-8"
            v-if="isServicesOpen"
          >
            <NuxtLink to="/services/landscape-sd">
              <li @click="toggleMenu" class="pb-3 underline">
                Landscape Design SD
              </li>
            </NuxtLink>

            <NuxtLink to="/services/pavers-sd">
              <li @click="toggleMenu" class="pb-3 underline">
                Pavers San Diego
              </li>
            </NuxtLink>

            <NuxtLink to="/services/pools-and-spas">
              <li @click="toggleMenu" class="pb-3 underline">Pools and Spas</li>
            </NuxtLink>

            <NuxtLink to="/services/outdoor-kitchens">
              <li @click="toggleMenu" class="pb-3 underline">
                Outdoor Kitchens
              </li>
            </NuxtLink>
            <NuxtLink to="/services/concrete-sd">
              <li @click="toggleMenu" class="pb-3 underline">
                Concrete San Diego
              </li>
            </NuxtLink>
            <NuxtLink to="/services/artificial-turf">
              <li @click="toggleMenu" class="pb-3 underline">
                Artificial Turf San Diego
              </li>
            </NuxtLink>
            <NuxtLink to="/services/patios-and-pergolas">
              <li @click="toggleMenu" class="pb-3 underline">
                Patio Covers and Pergolas
              </li>
            </NuxtLink>
          </ul>
        </div>
        <NuxtLink to="/portfolio">
          <li @click="toggleMenu" class="py-2">Portfolio</li>
        </NuxtLink>
        <NuxtLink to="/#packages">
          <li @click="toggleMenu" class="py-2">Design Packages</li>
        </NuxtLink>
        <NuxtLink to="/finance">
          <li @click="toggleMenu" class="py-2">Finance</li>
        </NuxtLink>

        <NuxtLink to="/#FAQS">
          <li @click="toggleMenu" class="py-2">FAQs</li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li @click="toggleMenu" class="py-2">Contact</li>
        </NuxtLink>
      </ul>

      <svg
        class="ml-[40%] mt-12"
        width="195"
        height="30"
        viewBox="0 0 195 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.50763 0.888672H22.4924C26.494 0.888672 29.75 4.1455 29.75 8.14852V21.8614C29.75 25.8644 26.494 29.1212 22.4924 29.1212H7.50763C3.50597 29.1212 0.25 25.8644 0.25 21.8614V8.14852C0.25 4.1455 3.50597 0.888672 7.50763 0.888672ZM7.50763 3.03788C4.6905 3.03788 2.39846 5.33073 2.39846 8.14852V21.8614C2.39846 24.6792 4.6905 26.972 7.50763 26.972H22.4924C25.3095 26.972 27.6015 24.6792 27.6015 21.8614V8.14852C27.6015 5.33073 25.3095 3.03788 22.4924 3.03788H7.50763Z"
          fill="#D0C2B0"
          stroke="black"
          stroke-width="0.5"
        />

        <path
          d="M14.999 21.9884C18.8487 21.9884 21.9824 18.8555 21.9824 15.003C21.9824 11.1505 18.8504 8.01758 14.999 8.01758C11.1476 8.01758 8.01562 11.1505 8.01562 15.003C8.01562 18.8555 11.1476 21.9884 14.999 21.9884ZM14.999 10.6685C17.3896 10.6685 19.3339 12.6134 19.3339 15.0047C19.3339 17.396 17.3896 19.3409 14.999 19.3409C12.6084 19.3409 10.6641 17.396 10.6641 15.0047C10.6641 12.6134 12.6084 10.6685 14.999 10.6685Z"
          fill="#D0C2B0"
        />

        <NuxtLink to="https://www.instagram.com/modern_yardz/">
          <path
            d="M22.6316 9.14511C23.6682 9.14511 24.5131 8.30165 24.5131 7.263C24.5131 6.22435 23.6699 5.38086 22.6316 5.38086C21.5932 5.38086 20.75 6.22435 20.75 7.263C20.75 8.30165 21.5932 9.14511 22.6316 9.14511Z"
            fill="#D0C2B0"
          />
        </NuxtLink>

        <path
          d="M70.033 30.0088H69.967C61.7143 30.0088 55 23.2926 55 15.0374V14.9714C55 6.71627 61.7143 0 69.967 0H70.033C78.2857 0 85 6.71627 85 14.9714V15.0374C85 23.2926 78.2857 30.0088 70.033 30.0088ZM69.967 1.01577C62.2738 1.01577 56.0155 7.27596 56.0155 14.9714V15.0374C56.0155 22.7329 62.2738 28.9931 69.967 28.9931H70.033C77.7262 28.9931 83.9845 22.7329 83.9845 15.0374V14.9714C83.9845 7.27596 77.7262 1.01577 70.033 1.01577H69.967Z"
          fill="#D0C2B0"
        />

        <NuxtLink to="https://www.facebook.com/modernyardz/">
          <path
            d="M72.0191 11.6391V14.7971H75.9246L75.3062 19.0512H72.0191V28.8523C71.3601 28.9438 70.6858 28.9915 70.0014 28.9915C69.2113 28.9915 68.4355 28.9285 67.68 28.8066V19.0512H64.0781V14.7971H67.68V10.9332C67.68 8.53598 69.6226 6.5918 72.0201 6.5918V6.59383C72.0272 6.59383 72.0333 6.5918 72.0404 6.5918H75.9256V10.2709H73.3869C72.6324 10.2709 72.0201 10.8834 72.0201 11.6381L72.0191 11.6391Z"
            fill="#D0C2B0"
          />
        </NuxtLink>
        <!-- <path
          d="M125.033 30.01H124.967C116.714 30.01 110 23.2935 110 15.038V14.972C110 6.71651 116.714 0 124.967 0H125.033C133.286 0 140 6.71651 140 14.972V15.038C140 23.2935 133.286 30.01 125.033 30.01ZM124.967 1.01581C117.274 1.01581 111.015 7.27622 111.015 14.972V15.038C111.015 22.7338 117.274 28.9942 124.967 28.9942H125.033C132.726 28.9942 138.985 22.7338 138.985 15.038V14.972C138.985 7.27622 132.726 1.01581 125.033 1.01581H124.967Z"
          fill="#D0C2B0"
        />

        <NuxtLink to="https://www.x.com/modernyardz/">
          <path
            d="M116.393 7.07227L123.077 16.0114L116.352 23.2795H117.866L123.754 16.9165L128.512 23.2795H133.663L126.604 13.8376L132.864 7.07227H131.35L125.927 12.9325L121.546 7.07227H116.394H116.393ZM118.619 8.18765H120.985L131.435 22.1641H129.069L118.619 8.18765Z"
            fill="#D0C2B0"
          />
        </NuxtLink>
        <path
          d="M180.033 30.01H179.967C171.714 30.01 165 23.2935 165 15.038V14.972C165 6.71653 171.714 0 179.967 0H180.033C188.286 0 195 6.71653 195 14.972V15.038C195 23.2935 188.286 30.01 180.033 30.01ZM179.967 1.01581C172.274 1.01581 166.015 7.27624 166.015 14.972V15.038C166.015 22.7338 172.274 28.9942 179.967 28.9942H180.033C187.726 28.9942 193.985 22.7338 193.985 15.038V14.972C193.985 7.27624 187.726 1.01581 180.033 1.01581H179.967Z"
          fill="#D0C2B0"
        />

        <NuxtLink to="https://www.pinterest.com/modernyardz/">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M178.672 18.9694C178.655 19.0293 178.639 19.0801 178.626 19.1309C177.859 22.1357 177.774 22.8031 176.986 24.1988C176.61 24.8621 176.187 25.4909 175.718 26.0923C175.666 26.1603 175.616 26.2477 175.51 26.2264C175.394 26.202 175.385 26.0983 175.373 26.0049C175.247 25.0917 175.177 24.1765 175.208 23.2541C175.247 22.0534 175.395 21.641 176.943 15.1317C176.965 15.0321 176.94 14.9499 176.907 14.8605C176.537 13.8609 176.464 12.8461 176.788 11.8181C177.488 9.59758 180.005 9.42794 180.444 11.2594C180.715 12.3921 179.999 13.8752 179.448 16.0673C178.992 17.8754 181.121 19.1614 182.939 17.8409C184.617 16.6239 185.268 13.7065 185.144 11.6383C184.9 7.51518 180.38 6.62431 177.514 7.95197C174.227 9.47263 173.479 13.548 174.964 15.411C175.152 15.6477 175.506 15.793 175.444 16.0327C175.349 16.4055 175.264 16.7814 175.161 17.1521C175.084 17.4284 174.644 17.529 174.365 17.4152C173.817 17.1938 173.361 16.8454 172.992 16.3862C171.732 14.8249 171.371 11.7369 173.038 9.12218C174.884 6.22612 178.318 5.05387 181.454 5.4094C185.199 5.83503 187.566 8.39486 188.009 11.299C188.211 12.6216 188.065 15.8834 186.209 18.1893C184.074 20.8385 180.612 21.0142 179.015 19.3879C178.892 19.263 178.793 19.1177 178.672 18.9684V18.9694Z"
            fill="#D0C2B0"
          />
        </NuxtLink> -->
      </svg>

      <div class="flex justify-between pt-[7rem]">
        <div>
          <img
            src="/images/navbar/imgs/Rectangle 426.png"
            width="200"
            alt="picture 1"
          />
        </div>

        <div class="pt-5">
          <img src="/images/navbar/imgs/Rectangle 427.png" alt="picture 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add some styles for the hamburger */
</style>
