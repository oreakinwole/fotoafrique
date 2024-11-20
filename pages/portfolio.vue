<script setup>
import autoAnimate from "@formkit/auto-animate";
import paverImg from "@/assets/images/gallery-pav1.png";
import concreteImg from "@/assets/images/concrete.webp";
import turfImg from "@/assets/images/purf.png";
import patioImg from "@/assets/images/patio.png";
import kitchenImg from "@/assets/images/outdoor-kitchen.png";

const autoAniSection = ref();
const isViewingGallery = ref(0);
const router = useRouter();

const galleryData = ref([
  {
    title: "Paver Gallery",
    image: paverImg,
    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/1.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/28.webp?v=1708357682&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/3.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/4.webp?v=1708357682&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/5.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/6.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/7_e4a6ed7e-a0ae-49fd-9ece-752fae0ffbaf.webp?v=1708357917&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/8.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/9.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/10.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/11.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/12.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/13.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/14.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/15.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/16.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/17.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/18.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/20.webp?v=1708357678&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/22.webp?v=1708359330&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/24.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/25.webp?v=1708357678&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/26.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/30.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/31.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/32.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/28.webp?v=1708357682&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/34.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/36.webp?v=1708357681&width=3000",
    ],
  },
  {
    title: "Concrete Gallery",
    image: concreteImg,

    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/1_b8834d74-a5c6-42e6-bf90-c2bb2eb219db.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/2_38ef7e63-07e9-4328-bfb9-0525137023c7.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/3_dc4945ab-bc4f-4476-8db7-eb37cc1b3caf.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/4_5adf2a64-91ca-4735-a7d4-789f2c2f0945.webp?v=1708362362&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/5_5e600c59-edee-43fa-ae1a-cb9725814255.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/6_a6cd1a2b-a5f9-4773-830b-1e33060bf9f9.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/7_af2717ba-50d4-4cfc-984f-4f5eeba491c7.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/8_bcd4cd97-8831-457b-90c0-341652da7a15.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/8_bcd4cd97-8831-457b-90c0-341652da7a15.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/9_63b675a0-5270-400a-97c8-860af612e2aa.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/10_3e5f8081-e8cd-4e7e-862b-2945d4de464b.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/11_f80470fd-05a2-4777-91d8-4515cf8fe39e.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/12_1477d97d-f243-486a-b783-769bcbd35cce.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/13_07816434-d4ef-45fb-8260-1c4f781d90f9.webp?v=1708362362&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/14_27defdc3-92e6-47a9-9b67-afb31f1b50ea.webp?v=1708362361&width=3000",
    ],
  },
  {
    title: "Turf Gallery",
    image: turfImg,
    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/turf13.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf14.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf15.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf16.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf18.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf17.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf19.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf20.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf1.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf2.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf3.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf5.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf6.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf7.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf10.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf9.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf8.webp?v=1708364631&width=3000",
    ],
  },
  {
    title: " Patio Covers & Pergolas",
    image: patioImg,

    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547.webp?v=1708447763&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_370_cg_true_m.webp?v=1708448097&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547_1.webp?v=1708448183&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870.webp?v=1708448247&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547_2.webp?v=1708448286&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_1.webp?v=1708448477&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_2.webp?v=1708448517&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_984_h_1749.webp?v=1708448564&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_3.webp?v=1708448606&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_4.webp?v=1708448653&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_5.webp?v=1708448698&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_6.webp?v=1708448738&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_7.webp?v=1708448815&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_773.webp?v=1708448850&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_773_1.webp?v=1708448887&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_8.webp?v=1708448925&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547_3.webp?v=1708449102&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_12.webp?v=1708449135&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_13.webp?v=1708449183&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_14.webp?v=1708449219&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_15.webp?v=1708449257&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_653.webp?v=1708449317&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_17.webp?v=1708449378&width=3000",
    ],
  },
  {
    title: "Outdoor Kitchens",
    image: kitchenImg,

    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_20.webp?v=1708450474&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_21.webp?v=1708451245&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_22.webp?v=1708451314&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_23.webp?v=1708451361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/6_1e7d8cd1-ce99-4415-b0c2-4195c74365c7.webp?v=1708533229&width=3000",
    ],
  },
]);

onMounted(() => {
  autoAnimate(autoAniSection.value, { duration: 300 });
});

const handleChangeView = (index) => (isViewingGallery.value = index);

</script>

<template>
  <div class="px-4 lg:px-20 pt-6">
    <p class="lg:hidden font-playfairDisplay text-4xl font-medium">
      Portfoli<span class="text-new-gray font-imperial text-4xl">O</span>
    </p>

    <!-- <ul class="flex lg:hidden justify-between max-w-[220px] font-medium">
      <li>Style</li>
      <li class="text-new-gray">Elegance</li>
      <li class="text-new-gray">Creative</li>
    </ul> -->

    <section
      class="flex gap-x-8 justify-between h-[580px] py-10 pb-10 border-b border-new-gray border-opacity-25"
    >
      <div class="w-full lg:w-1/3 h-full rounded-2xl overflow-hidden">
        <img
          src="@/assets/images/pool1.jpg"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="hidden lg:block w-2/3 h-full">
        <p class="font-playfairDisplay text-7xl font-medium">
          Portfoli<span class="text-new-gray font-imperial text-7xl">O</span>
        </p>

        <ul class="flex space-x-4 font-medium">
          <li
            v-for="(item, index) in galleryData"
            :key="item"
            class="transition-all duration-1000 ease-in-out hover:text-black"
            role="button"
            :class="!(isViewingGallery === index) && 'text-new-gray'"
            @click="
              handleChangeView(index);
              router.push('#all-gallery-view');
            "
          >
            {{ item.title }}
          </li>
        </ul>

        <div class="my-4 mt-20 grid grid-cols-3">
          <img
            class="rounded-2xl"
            src="@/assets/images/port1.png"
            width="200"
          />

          <div class="place-content-end">
            <p class="font-medium">The best design for your space</p>
            <span class="text-new-gray">Located in San Diego</span>
          </div>
          <img
            class="rounded-2xl"
            src="@/assets/images/port1.png"
            width="200"
          />
        </div>

        <OutlinedButton
          border-color="#000"
          text-color="#000"
          background-color="white"
          text="Design Your Dream Yard"
          class="lg:w-[190px]"
        />
      </div>
    </section>

    <section id="all-gallery">
      <header class="flex flex-wrap gap-4 lg:space-x-4 justify-center mt-4 lg:my-8">
        <div
          v-for="(item, index) in galleryData"
          class="text-xs lg:text-sm transition-all duration-1000 ease-in-out py-2 px-3 rounded-3xl bg-navbar-color hover:text-white hover:bg-black"
          :class="isViewingGallery === index && 'lg:text-white lg:bg-black'"
          :key="item.title"
          @click="handleChangeView(index)"
          role="button"
        >
          {{ item.title }}
        </div>
      </header>

     
      <div
        class="grid grid-cols-2 lg:grid-cols-3 pt-8 gap-2 lg:gap-8"
        ref="autoAniSection"
        id="all-gallery-view"
      >
        <div
          v-for="imagey in galleryData[isViewingGallery].imgArray"
          :key="imagey"
          class="bg-gray-100 h-[200px] lg:h-[400px] lg:flex-1 rounded-2xl overflow-hidden"
        >
          <img :src="imagey" class="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
