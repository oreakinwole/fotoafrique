<script setup></script>

<template>
  <ViewDesignProcessOld />

  
  <div class="py-24 px-4 lg:px-40 bg-[#000] text-white">
    <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
      <div className="bg-[#2c2c2c] h-[530px]  rounded-xl ">
        <img
              src="/images/homesecondsegment/imgs/Renovation.svg"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="bg-[#2c2c2c] h-[530px]  rounded-xl ">
        <img
              src="@/assets/images/services/concrete.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="bg-[#2c2c2c] h-[530px]  rounded-xl ">
        <img
               src="@/assets/images/services/turf.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div
        className="bg-[#2c2c2c] text-white h-[530px] rounded-xl flex items-center justify-center"
      >
        <img
             src="@/assets/images/services/paver.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>

  

    <div class="text-center mt-10">
      <FilledButton
        background-color="white"
        text="Book Your Free Consultation Today"
        text-color="black"
        class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
      />
    </div>
  </div>
 

  <ViewTestimonial />


  <!-- <ViewBeforeAndAfter /> -->
</template>

<style>
#myVideo {
  /* position: fixed;
  right: 0;
  bottom: 0; */
  min-width: 100%;
  min-height: 100%;
}
</style>
