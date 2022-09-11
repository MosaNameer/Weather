import { defineStore } from "pinia";
export const useWeatherStore = defineStore( "main" ,{
  state: () => ({

    searchs: "baghdad" ,
  }),
  getters: {
    
  },
  actions: {
    // fetchWeather
    async fetchWeather() {
      const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.searchs}&appid=28f543541a4bc931013418a9a0e6d673` );
      const data = await response.json();
      return data;
    }
  }
})
