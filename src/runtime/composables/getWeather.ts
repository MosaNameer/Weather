import { defineStore } from "pinia";
export const useWeatherStore = defineStore( "main" ,{
  state: () => ({

    search: "" ,
  }),
  getters: {
    getWeather() {
        return  this.search;
    }
  },
  actions: {
    async fetchWeather() {
      const response = await fetch( "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY" )
      const data = await response.json()    },
  }
})
