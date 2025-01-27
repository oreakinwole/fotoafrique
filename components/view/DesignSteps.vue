<script setup>
const galleryData = ref([
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
]);

const dataArray = ref([
  {
    "@type": "Question",
    name: "Will Modern Yardz work alongside another contractor on a project?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Typically yes, but we do take it on a case-by-case basis.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz handle all of the permitting?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we submit all paperwork for permits and handle all onsite inspections.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz handle HOA submittal?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we will create all the required documents for your HOA approval, but it is the client's responsibility to fill out the application with their personal information and submit all documents to their HOA.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz pay for the HOA submittal fees?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No, all HOA landscape submittal fees are to be paid for by the property owner.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz offer free consultations?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we offer complimentary 1-hour consultations.",
    },
  },
]);
</script>

<template>
  <div class="lg:px-20">
    <section class="flex flex-col flex-wrap gap-10 py-10">
      <div class=" min-w-[400px] h-[280px]">
        <img
          src="https://www.modernyardz.com/cdn/shop/files/piils.webp?v=1708178618&width=3280"
          class="h-full w-full bg-gray-200 object-cover"
        />
      </div>

      <div class=" space-y-5 px-4">
        <p class="font-playfairDisplay text-5xl font-medium">Design</p>
        <div class="text-brown text-sm ">
          <p>
            At Modern Yardz, we stand at the forefront of crafting custom
            swimming pools and spas in San Diego, showcasing our commitment to
            excellence and innovation in every project. Our expertise lies in
            transforming your outdoor living areas into sophisticated retreats
            that reflect your unique lifestyle and aesthetic preferences.
          </p>

          <p>
            Partnering with homeowners across San Diego, we bring to life
            bespoke aquatic sanctuaries that perfectly integrate with your
            home's landscape. Whether you're drawn to the minimalist elegance of
            modern designs or the timeless appeal of classic styles, our
            portfolio demonstrates our ability to cater to a wide range of
            design sensibilities. Our focus on quality craftsmanship, leveraging
            the latest technology, and adopting eco-friendly practices ensures
            that each installation is not just visually stunning but also built
            to endure.
          </p>
        </div>

        <br />

        <FilledButton
          background-color="black"
          text="TRANSFORM YOUR YARD TODAY"
          text-color="white"
          class="w-full"
        />
      </div>
    </section>
  </div>
  <!-- Why Us -->

  <div class="pt-14 px-4 lg:px-20">
    <div class="mt-12 flex justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block font-playfairDisplay text-5xl tracking-wide font-semibold mb-8"
        >
          How
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >M
          </span>
          ordern Yardz Works
        </h4>

        <!-- FAQ Section -->
        <div class="lg:px-5 space-y-8">
          <div
            v-for="(faq, index) in dataArray"
            :key="faq.question"
            class="lg:max-w-[600px] border-t border-b border-[#F5F0EA] py-3 mx-3 lg:mx-auto relative"
            @mouseenter="faq.hover = true"
            @mouseleave="faq.hover = false"
            @click="isViewingFaq = index"
          >
            <h4 class="font-[600] text-sm tracking-widest flex-grow">
              {{ faq.name }}
            </h4>

            <p
              v-if="isViewingFaq === index"
              class="lg:text-sm text-black font-light tracking-widest bg-white p-3 mt-12 animate__animated animate__slideInLeft"
            >
              {{ faq.acceptedAnswer.text }}
            </p>
          </div>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6dgb2p7c933b%2F7gkM7nBCoazww2g684nXxq%2F7775a31f37a1d3d1af671a4c507435f4%2FimgCard-2.png&w=1200&q=75"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>

  <div class="hidden lg:block text-center mt-16">
    <FilledButton
      background-color="black"
      text="Start Your Project Today"
      text-color="white"
      class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
    />
  </div>
</template>
