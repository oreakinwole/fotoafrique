<script setup>
// const router = useRouter();
// const searchTerm = ref("sa");

// onMounted(() => {
//   fetchPages();
// });

const fetchPages = async () => {
  // try {
  //   const { data } = await useFetch(
  //     `https://modernyardz.com/search/suggest?q=sa&section_id=predictive-search`
  //   );
  //   console.log("DATA", data);
  // } catch (error) {
  //   console.log("ERROR", error);
  // }
  // const routessss = router.getRoutes();
  // console.log("DATA", routessss);
};

watch(searchTerm, () => {
  // fetchPages();
});
</script>

<template>
  <div class="pt-20 space-y-7">
    <p class="text-center text-3xl font-bold">Search</p>
    <div class="w-full text-center">
      <input
        class="loc-search-input border border-black w-2/4 h-14 pl-8 pr-16 rounded-3xl"
        type="text"
        placeholder="Search.."
      />
    </div>
  </div>

  <!-- <div
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
  </div> -->

  <!-- <div id="packages" class="my-10 lg:mt-36 mb-20 flex">
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

         
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="text-center">
    <NuxtLink to="/#quiz">
      <FilledButton
        :no-action="true"
        background-color="black"
        text="Take Our Quiz to Find Your Package"
        text-color="white"
        class="w-[90%] font-semibold lg:w-[290px] lg:mb-20"
      />
    </NuxtLink>
  </div> -->
</template>

<style lang="scss" scoped>
.loc-search-input {
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat scroll 96% center;

  &::placeholder {
    // font-weight: bold;
    color: black;
  }
}
</style>
