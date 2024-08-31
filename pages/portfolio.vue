<script setup lang="ts"></script>

<template>
  <div class="px-20">
    <section
      class="flex gap-x-8 justify-between h-[580px] py-10 pb-20 border-b border-new-gray border-opacity-25"
    >
      <div class="w-1/3 h-full">
        <img
          src="@/assets/images/pool1.png"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="w-2/3 h-full">
        <p class="font-playfairDisplay text-7xl font-medium">
          Portfoli<span class="text-new-gray font-imperial text-7xl">O</span>
        </p>
        <ul class="flex justify-between max-w-[220px] font-medium">
          <li>Style</li>
          <li class="text-new-gray">Elegance</li>
          <li class="text-new-gray">Creative</li>
        </ul>

        <div class="my-4 mt-20 grid grid-cols-3">
          <img src="@/assets/images/port1.png" width="200" />
          <div class="place-content-end">
            <p class="font-medium">The best design for your space</p>
            <span class="text-new-gray">Located in San Diego</span>
          </div>
          <img src="@/assets/images/port1.png" width="200" />
        </div>
        <button class="uppercase text-sm py-4 px-10 border border-black">
          Schedule a call
        </button>
      </div>
    </section>

    <section
      class="h-[750px] py-20 border-b border-new-gray border-opacity-25"
    >
      <p class="font-playfairDisplay text-4xl font-medium">
        Paver <span class="text-new-gray font-imperial text-5xl">G</span>allery
      </p>
      <span class="text-xs text-brown"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
      >

      <div class="mt-10 flex gap-x-8 justify-between">
        <div class="w-1/3 h-full">
          <img src="@/assets/images/pool1.png" />
        </div>

        <div class="w-2/3 h-full">
          <p class="text-xs max-w-96 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultricies tellus at lacinia condimentum. Nulla in urna venenatis,
            cursus magna at, sollicitudin neque.
            
            <br>
            <br>
            <br>
            Maecenas ut nisi tristique,
            luctus sem eu, facilisis nisi. Donec molestie posuere viverra. Donec
            blandit sollicit erat sed pharetra. Nam nunc nisl, imperdiet nec
            hend eget, dictum et mi. In nec porta nunc, at posuere ante.
          </p>

          <div class="my-4 mt-20 grid grid-cols-4">
           <div>
            &nbsp;
           </div>
           <div>
            &nbsp;
           </div>
            <img src="@/assets/images/port1.png" width="200" />
            
            <img src="@/assets/images/port1.png" width="200" />
          </div>
        
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
