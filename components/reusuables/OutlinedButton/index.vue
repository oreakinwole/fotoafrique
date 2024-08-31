<script>
export default {
  name: 'OutlinedButton',
  props: {
    text: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button :style="{
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`
  }"  class="w-[299px] h-[67px]">
    {{ text }}

  </button>
</template>
