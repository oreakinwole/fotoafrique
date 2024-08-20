<script>
export default {
  name : 'FilledButton',
  props : {
    text : {
      default : "",
      type : String
    },
    backgroundColor : {
      type : String,
      default: ''
    },
    textColor : {
      type : String,
      default : ''
    }
  }
}
</script>




<template>

  <button class="w-[299px] h-[67px]"
          :style="{ backgroundColor: backgroundColor , color : textColor}">
    {{text}}
  </button>

</template>