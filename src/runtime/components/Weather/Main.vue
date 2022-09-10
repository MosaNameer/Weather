<template >
  <!-- Application -->
  <div dir="ltr">
    <div class="h-screen md:relative items-center md:overflow-hidden">
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
