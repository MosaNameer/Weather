<template >
  <!-- Application -->
  <div dir="ltr">

    <div class="flex justify-center h-screen md:relative items-center md:overflow-hidden">
      <img class="h-full w-full" src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80">
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
