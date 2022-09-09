<template >
  <!-- Application -->
  <div dir="ltr">

    <div class="flex justify-center h-screen md:relative items-center md:overflow-hidden">
      <img class="h-full w-full" src="https://cdn.pixabay.com/photo/2019/08/21/19/26/rain-4421893_960_720.jpg">
      <UiTabGroup class="absolute top-0" :col="false" :selected="0" :tabs="['Home', 'About', 'Contact']">
        <template #tab-1>
          <AppHome />
        </template>
        <template #tab-2>
          <h1>About</h1>
        </template>
        <template #tab-3>
          <h1>Contact</h1>
        </template>
      </UiTabGroup>
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
