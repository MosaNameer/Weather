<template >
  <!-- Application -->
  <div dir="ltr">

    <div class="h-screen md:relative items-center md:overflow-hidden">
      <img class="h-full w-full" src="https://cdn.pixabay.com/photo/2019/08/21/19/26/rain-4421893_960_720.jpg">
      <AppHome />
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
</script>
