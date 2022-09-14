<template>
  <div class=" h-full w-full">
    <img class="h-full w-full" :src="tempBackground">
    <div class="absolute top-0 mt-30 w-screen top-0 ">
      <div class="flex justify-between h-60">
        <div class="ml-50">
          <div class="text-center">
            <h1 class="text-9xl text-white"> {{ time }} </h1>
            <span class="text-xl text-white">{{ month }} </span>
            <p class="font-extralight text-2xl mt-2 text-white ml-1"></p>
          </div>

          <div class="flex mt-20">
            <UiInput @keydown.enter="store.fetchWeather(input)" v-model="input" class="dark:bg-black bg-white" w="72"
              icon="i-clarity-email-solid" label="" placeholder="Enter city name..." type="text">
            </UiInput>
            <UiButton @click="store.fetchWeather(input)" class="w-15-6 text-center" color="success">
              Search
            </UiButton>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-12 w-125 h-72 shadow-xl rounded-lg border p-3 mr-50 bg-black bg-opacity-60	">


            <div class="col-span-5 ml-4">
              <h2><a href="" class="text-white text-3xl"> {{ store.getWeather?.name}}  / {{ store.getWeather?.sys?.country}} </a></h2>
              <div class="flex flex-col mt-6">
                <span class="text-white text-7xl">{{ store.getWeather?.main?.temp}}°</span>
                <span class="text-gray-3 text-lg">  </span>
                <span class="text-gray-3 text-lg"> wind speed {{ store.getWeather?.wind?.speed}}</span>
                <span class="text-gray-3 text-lg"> MIN - {{ store.getWeather?.main?.temp_min }} </span>
                <span class="text-gray-3 text-lg"> MAX - {{ store.getWeather?.main?.temp_max }} </span>
              </div>
            </div>
            <div class="col-span-7">
              <!-- get the icon -->
              <!-- <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`" class="mt-6 w-72"> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div v-else dir="ltr" class="absolute top-0 mr-10">
    <AppNotFound :cookie="cookie" @some-event="goBAck" />
  </div> -->
</template>

<script setup>
import { useWeatherStore } from "../../composables/getWeather";
const store = useWeatherStore();

const cookie = useCookie("city")
const config = useRuntimeConfig()
if (!cookie.value) cookie.value = "basra"
const search = ref(cookie.value)
const input = ref('')

onMounted(() => {
  store.fetchWeather(search.value);
  // refresh
  // watch(search, () => {
  //   store.fetchWeather(search.value);
  // });
})

const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+")
  search.value = formatedSearch;
}
const goBAck = () => {
  search.value = cookie.value;
}

let today = new Date()
today = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
//time
const time = ref()
setInterval(() => {
  time.value = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    //second: "numeric",
    hour12: true,
  });
}, 1000);

//get month and day using interval
const month = ref()
setInterval(() => {
  month.value = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}, 1000);

const tempBackground = computed(() => {
  const temp = store.getWeather?.main?.temp;
  if (temp <= -10) {
      return "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
    } else if (temp > -10 && temp <= 5) {
      return "https://cdn.pixabay.com/photo/2021/01/09/17/22/forest-5903010_960_720.jpg";
    } else if (temp > 5 && temp <= 20) {
      return "https://cdn.pixabay.com/photo/2017/08/01/01/17/beach-2562563_960_720.jpg";
    } else {
      return "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80";
    }
})
</script>
