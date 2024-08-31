<script>
export default {
  name: "OutlinedButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    borderColor: {
      type: String,
      required: true,
    },
    hoverTextColor: {
      type: String,
    },
  },
};
</script>
<template>
  <button
    class="relative w-[299px] h-[67px] overflow-hidden"
    :style="{
      backgroundColor: backgroundColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
    }"
  >
    <span>{{ text }}</span>
    <span
      class="inset-0 bg-black transition-transform duration-[0.5s] transform -translate-x-full"
    ></span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
}

button span:first-child {
  z-index: 10;
  position: relative;
  transition: color 0.2s ease-in-out;
}

button span:last-child {
  z-index: 5;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;
}

button:hover span:last-child {
  transform: translateX(0%);
}

button:hover span:first-child {
  color: white;
}
</style>
