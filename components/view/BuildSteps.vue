<script setup></script>

<template>
  <div class="pt-14 px-4 lg:px-20">
    <div class="flex flex-row-reverse justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block mt-8 font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          Step 1:
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >P
          </span>
          re-Construction Meeting
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            Sales Rep, Project Manager, Project Foreman & Clients all meet
            onsite to review the plans/scope of work.
          </p>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-1.png"
          alt="step 1"
          class="w-full h-full object-fill rounded-3xl"
        />
      </div>
    </div>
  </div>

  <!-- Why Us -->
  <div class="px-4 lg:px-20">
    <div class="mt-12 flex justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          Step 2:
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >P
          </span>
          roject Mobilization
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <ul
            class="list-disc list-inside mt-6 font-light tracking-widest text-md text-[#454545]"
          >
            <li>Daily project check in with project manager</li>
            <li>Inspections with city officials</li>
            <li>Coordination with all trades</li>
          </ul>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-2.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>

  <!-- step 3 -->

  <div class="px-4 lg:px-20">
    <div class="mt-12 flex flex-row-reverse justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block mt-8 font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          Step 3:
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >P
          </span>
          roject Management
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <ul
            class="list-disc list-inside mt-1 font-light tracking-widest text-md text-[#454545]"
          >
            <li>Daily project check in with project manager</li>
            <li>Inspections with city officials</li>
            <li>Coordination with all trades</li>
          </ul>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-1.png"
          alt="step 1"
          class="w-full h-full object-fill rounded-3xl"
        />
      </div>
    </div>
  </div>

  <!-- VIDEO -->

  <div class="mt-28 px-4 lg:px-20 bg-green-50">
    <div class="flex justify-between">
      <section class="max-w-lg">
        <h4
          class="hidden lg:block mt-8 font-playfairDisplay text-5xl tracking-wide font-semibold"
        >
          How Yardzen
          <span class="text-[#A89C93] font-imperial font-normal lg:text-7xl"
            >W
          </span>
          orks
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <p>Design Director Kevin breaks down the Yardzen process.</p>

          <h3 class="font-bold">Kevin Lenhart</h3>
          <p>
            Design Director & Landscape Architect Landscape Architecture,
            University of California, Berkeley
          </p>
          <!-- <ul
            class="list-disc list-inside mt-1 font-light tracking-widest text-md text-[#454545]"
          >
            <li>Daily project check in with project manager</li>
            <li>Inspections with city officials</li>
            <li>Coordination with all trades</li>
          </ul> -->
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="@/assets/images/Screenshot_owner.png"
          alt="step 1"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>

  <p class="font-playfairDisplay text-4xl text-center font-medium mt-28">
    <span class="text-new-gray font-imperial text-5xl">P </span>rojects we have
    worked on
  </p>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div
      v-for="(item, index) in Array(10).fill(0)"
      :key="index"
      class="bg-gray-100 pt-8 flex items-center justify-center"
    >
      <img src="@/assets/images/gallery-pav1.png" class="h-[330px] w-[340px]" />
    </div>
  </div>
</template>
