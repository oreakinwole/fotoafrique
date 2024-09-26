<script setup>
import gsap from "gsap";

onMounted(() => {
  gsap.to(".designPro", {
    x: -1200,
    scrollTrigger: {
      trigger: ".designPro",
      end: 2500,
      scrub: true,
    },
  });
});
</script>

<template>
  <div class="mt-24" data-aos="slide-left" data-aos-duration="2000">
    <div class="flex flex-row justify-between px-32">
      <div>
        <h2 class="font-playfairDisplay font-[500] text-5xl">
          Our Design Pro<Span
            class="font-imperial text-6xl font-[400] text-[#A89C93]"
            >C</Span
          >ess
        </h2>
        <div class="flex lg:space-x-96 ">
          <p
            class="font-inter font-[400] text-xs text-[#665244] max-w-sm "
          >
            Our design process is a collaborative journey, tailored to bring
            your unique outdoor space to life. From initial consultation to
            final installation, we guide you through:
          </p>

          <p
            class="text-[#665244] text-xs  font-inter font-[400] max-w-sm"
          >
            Together, let's create a space that reflects your personality and
            enhances your lifestyle.
          </p>
        </div>

        <div class="my-12">
          <OutlinedButton
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="GET STARTED"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between px-32 mb-28 relative">
      <div class="flex flex-col mr-20">
        <!-- upper container -->
        <div class="flex flex-row">
          <div
            class="process-item w-[300px] h-[295px] border-2 border-[#A89C93] px-4 py-4"
          >
            <div class="flex flex-row justify-between">
              <h3 class="flex flex-col font-inter font-[700] text-[20px]">
                Free Design <span>Consultation</span>
              </h3>
              <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">
                /01
              </p>
            </div>

            <div class="pt-5">
              <p class="text-[#665244] w-[16rem] font-[400] text-[14px]">
                Embark on the transformation journey with a free design
                consultation.
              </p>
            </div>

            <div>
              <p class="font-[300] text-[#A89C93] text-[27px] pt-[6rem]">
                &#43;
              </p>
            </div>
          </div>

          <div class="w-[300px] h-[295px]"></div>

          <div
            class="process-item w-[300px] h-[295px] border-2 border-[#A89C93] px-4 py-4"
          >
            <div class="flex flex-row justify-between">
              <h3 class="flex flex-col font-inter font-[700] text-[20px]">
                Ultra Realistic <span>3D Design Renderings</span>
              </h3>
              <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">
                /03
              </p>
            </div>

            <div class="pt-5">
              <p class="text-[#665244] w-[14rem] font-[400] text-[14px]">
                Taking the design process a step further, we translate the 2D
                plan into ultra-realistic 3D renderings.
              </p>
            </div>

            <div>
              <p class="font-[300] text-[#A89C93] text-[27px] pt-[4.3rem]">
                &#43;
              </p>
            </div>
          </div>

          <div class="w-[300px] h-[295px]"></div>
        </div>

        <!-- lower container -->
        <div class="flex flex-row mt-[-2px]">
          <div class="w-[300px] h-[295px]"></div>

          <div
            class="w-[304px] h-[295px] border-2 border-[#A89C93] px-4 py-4 ml-[-2px]"
          >
            <div class="flex flex-row justify-between">
              <h3 class="flex flex-col font-inter font-[700] text-[20px]">
                2D Landscape <span>Design</span>
              </h3>
              <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">
                /02
              </p>
            </div>

            <div class="pt-5">
              <p class="text-[#665244] w-[14rem] font-[400] text-[14px]">
                Following our in-person meeting, we craft a 2D landscape design.
              </p>
            </div>

            <div>
              <p class="font-[300] text-[#A89C93] text-[27px] pt-[6rem]">
                &#43;
              </p>
            </div>
          </div>

          <div class="w-[300px] h-[295px]"></div>

          <div
            class="w-[300px] h-[295px] border-2 border-[#A89C93] px-4 py-4 ml-[-4px]"
          >
            <div class="flex flex-row justify-between">
              <h3 class="flex flex-col font-inter font-[700] text-[20px]">
                Comprehensive <span>Quote</span>
              </h3>
              <p class="pt-1 text-[#A89C93] text-[16px] font-inter font-[400]">
                /04
              </p>
            </div>

            <div class="pt-5">
              <p class="text-[#665244] w-[15rem] font-[400] text-[14px]">
                With the designs refined and your dream backyard taking shape,
                we present a detailed and itemized quote for the proposed
                design.
              </p>
            </div>

            <div>
              <p class="font-[300] text-[#A89C93] text-[27px] pt-[3.5rem]">
                &#43;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.process-item::after {
  content: url("@/assets/images/hov_process.png");
  position: absolute;
  opacity: 0;
  transition: all 1s;
  top: 0;
}

.process-item:hover::after {
  opacity: 1;
  top: -6em;
}

.designPro {
  position: relative;
  right: -800px;
  transition: all 0.3s;
}
</style>
