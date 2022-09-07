<template >
  <!-- Application -->
  <div dir="ltr">

    <div class="h-screen md:relative md:overflow-hidden">
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
