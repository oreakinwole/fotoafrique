

<script>
import closeIcon from "assets/images/navbar/icons/Close.png"
export default {
  name : 'NavBar',
  data(){
    return {
      closeIcon
    };
  }
}

</script>


<template>
  <div class="">
    <div class="flex flex-row bg-amber-950 items-center justify-evenly">
      <h4 class="text-white">Schedule Your Free Consultation Today! Click Here</h4>
      <img :src="closeIcon" alt="close png" class="cursor-pointer" width="30" >
    </div>

    <div></div>

    <div></div>
  </div>
</template>