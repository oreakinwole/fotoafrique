<script setup>
useHead({
  script: [{ src: "https://embed.typeform.com/next/embed.js" }],
});

const datafQ = ref([
  {
    "@type": "Question",
    name: "What is the Modern Yardz minimum budget for a project?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "$20k",
    },
  },
  {
    "@type": "Question",
    name: "Will Modern Yardz bid a design that was provided by another design company?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Modern Yardz will bid other companies' designs.",
    },
  },
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
  {
    "@type": "Question",
    name: "Does Modern Yardz offer any financing?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, (link to financing page)",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz use Sub-Contractors?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we use a mix of in-house crews and sub-contractors for a variety of trades.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz outsource their design services?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No! We have two in-house designers.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz carry the proper insurance for the work they perform?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, and upon request we can provide copies of our Bonds, General Liability, and Workers Compensation Insurance.",
    },
  },
  {
    "@type": "Question",
    name: "What is the Modern Yardz Warranty?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We have a 5-year Workmanship Warranty.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz have a state of California contractor's license?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, our License # is 1082881.",
    },
  },
  {
    "@type": "Question",
    name: "Does Modern Yardz have a physical office location?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Modern Yardz office is located at 5595 Magnatron Blvd. Suite E, San Diego, CA 92111.",
    },
  },
  {
    "@type": "Question",
    name: "What areas does Modern Yardz service?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We service all of San Diego, from Oceanside to Chula Vista, and as far east as El Cajon.",
    },
  },
]);
</script>

<template>
  <!-- <div class="py-24 px-20">
    <section class="flex gap-x-8 justify-between h-[530px] py-10">
      <div
        class="explore-item w-1/3 h-full bg-[url('@/assets/images/pool1.jpg')] bg-no-repeat bg-left-top bg-contain bg-fixed"
      ></div>

      <div class="w-2/3 h-full" id="portfolioIntro">
        <p
          class="max-w-xl text-3xl"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          WE STRIVE TO ENHANCE THE SYNERGY BETWEEN AESTHETICS, STRUCTURE, AND
          ENVIRONMENTAL DESIGN.
        </p>

        <div class="my-4 h-[calc(100%-7.9rem)] grid grid-cols-3">
          <div class="place-content-end col-span-2">
            <p class="text-brown text-sm leading-relaxed max-w-md text-justify">
              At Modern Yardz, we’re passionate about crafting outdoor spaces
              that blend beauty, functionality, and the natural environment.
              Every design is created with care to ensure it complements both
              your lifestyle and the unique characteristics of your home.
            </p>
          </div>

          <div class="col-span-1">
            <img src="@/assets/images/port1.png" width="200" />
          </div>
        </div>
      </div>
    </section>
  </div> -->

  

  <div
    id="quiz"
    class="mt-28 lg:mt-0 mb-12 lg:mb-28 bg-black h-[430px] lg:h-[500px] relative"
  >
    <div class="absolute top-20 lg:top-28 left-2 right-2 z-10">
      <div
        class="text-white font-semibold text-4xl lg:text-5xl max-w-[600px] mx-auto"
      >
        <p class="leading-tight tracking-wider text-center">
          Not sure where to start ? <br />
          Take our quiz to find your design package.
          <br />
        </p>
      </div>

      <!-- <OutlinedButton(BLACK)
        border-color="#fff"
        text-color="#fff"
        background-color="transparent"
        text="TAKE A QUIZ NOW"
        class="mt-10"
      /> -->

      <div
        class="mt-12 text-center"
        data-tf-live="01JBCJ0CFAY1HW94C4WJCBNZQZ"
      ></div>
    </div>

    <div class="bg-black absolute top-0 left-0 h-full w-full opacity-50"></div>

    <video class="w-full h-full object-cover" autoplay muted loop>
      <source src="/video/quizvid.mp4" type="video/mp4" />
      Something went wrong while playing video
    </video>
  </div>

  <FAQs class="mb-16" :faq-data="{ dataArray: datafQ }" />
</template>

<style lang="scss">
[data-tf-live] button {
  background-color: transparent !important ;
  border: 1px solid white !important;
  border-radius: 0.75rem !important;
  height: 50px !important;
  width: 200px !important;
  font-family: "Inter" !important;
  font-size: 1rem !important;
}
</style>
