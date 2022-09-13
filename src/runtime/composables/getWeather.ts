import { defineStore } from "pinia";
export const useWeatherStore = defineStore("main", {
  state: () => ({
    weather: [],
  }),
  getters: {
    getWeather: (state) => state.weather,
  },
  actions: {
    // fetchWeather
    async fetchWeather(search) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=28f543541a4bc931013418a9a0e6d673`);
        const data = await response.json();
        this.weather = data;
      }
      catch (error) {}
    },
  },
});
