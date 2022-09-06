<template>
  <!-- Application -->
  <div dir="ltr" class="h-screen relative overflow-hidden">
    <img class="h-full w-full" src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="">
    <div class="absolute w-full h-full top-0 p-40">
      <div class="flex justify-between h-60">
        <div class="">
            <h1 class="text-8xl text-white">Basra</h1>
            <p class="font-extralight text-2xl mt-2 text-white ml-1">sunday Dec 9th</p>
            <!-- <img :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" class="w-56" alt=""> -->
        </div>
        <div class="">
            <p class="text-9xl text-white font-extralight mr-100">
                43°
            </p>
        </div>
    </div>
    <div class="flex">
      <UiInput @keydown.enter="handleClick()" v-model="input"  class="bg-black " w="96" icon="i-clarity-email-solid" label="" placeholder="Placeholder" type="text">
        <!-- Action Buttons -->
      </UiInput>
      <UiButton @click="handleClick()" color="success">
        Search
        </UiButton>
  </div>
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
