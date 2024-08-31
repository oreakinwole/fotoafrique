<script>
export default {
  name : 'FilledButton',
  props : {
    text : {
      default : "",
      type : String,
      required : true
    },
    backgroundColor : {
      type : String,
      default: '',
      required: true
    },
    textColor : {
      type : String,
      default : '',
      required : true
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