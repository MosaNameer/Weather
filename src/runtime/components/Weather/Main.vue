<template>
  <!-- Application -->
  <div class="">
    <div dir="ltr" class="h-screen md:relative md:overflow-hidden">
      <UiTabGroup class="absolute top-0" :col="false" :selected="1" :tabs="['Home', 'About', 'Contact']">
        <template #tab-1>
          <div>
            <img class="h-full w-full" :src="background">
            <div class="absolute w-full h-full top-0 p-40">
              <div class="flex justify-between h-60">
                <div class="">
                  <h1 class="text-8xl text-white">{{city?.name}}</h1>
                  <p class="font-extralight text-2xl mt-2 text-white ml-1">sunday Dec 9th</p>
                  <img :src="`https://openweathermap.org/img/wn/${city?.weather[0].icon}@4x.png`" class="w-56" alt="">
                </div>
                <div class="">
                  <p class="text-9xl text-white font-extralight mr-100 mt-25">
                    {{city?.main.temp}}°
                  </p>
                </div>
              </div>
              <div class="flex mt-20">
                <UiInput @keydown.enter="handleClick()" v-model="input" class="dark:bg-black bg-white" w="96"
                  icon="i-clarity-email-solid" label="" placeholder="Enter city name..." type="text">
                  <!-- Action Buttons -->
                </UiInput>
                <UiButton @click="handleClick()" color="success">
                  Search
                </UiButton>
              </div>
            </div>
          </div>
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

const cookie = useCookie("city")
const config = useRuntimeConfig()
if (!cookie.value) cookie.value = "Paris"
const search = ref(cookie.value)
const input = ref('')
const background = ref('')
const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+")
  search.value = formatedSearch;
  input.value = '';
}
// const {data: city, error} = useFetch(
//  () => `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=28f543541a4bc931013418a9a0e6d673`);

const { data: city, error } = useAsyncData("city", async () => {
  let response;
  try {
    response = await $fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=28f543541a4bc931013418a9a0e6d673`,
    );

    cookie.value = search.value;

    const temp = response.main.temp;
    if (temp <= -5) {
      background.value = "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
    } else if (temp > -10 && temp <= 0) {
      background.value = "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
    } else if (temp > 0 && temp <= 20) {
      background.value = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80";
    } else {
      background.value = "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80";
    }
    return response;
  }
  catch (e) {
    return response;
  }
}, {
  watch: [search]
});


</script>
