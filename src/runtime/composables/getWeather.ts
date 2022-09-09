import { ref } from "vue";

const getWeather = (search) => {
  const weather = ref('');
  const error = ref(null);

  const load = async () => {
    try {
      //
      let data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=28f543541a4bc931013418a9a0e6d673");
      if (!data.ok) {
        throw Error("no data here");
      } else {
        weather.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { weather, error, load };
};
export default getWeather;
