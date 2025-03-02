import useFetch from './useFetch';
import { API_KEY } from '@env';

const useWeather = city => {
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=2`;

  const { data, loading, error } = useFetch(API_URL);
  if (loading || error || !data) return { weather: null, loading, error };

  const convertTo24HourFormat = time12h => {
    const modifier = time12h.slice(-2);
    let [hours, minutes] = time12h.slice(0, -2).split(':');

    if (hours === '12') {
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  const weather = {
    BASIC_INFO: {
      weather: data.current.condition.text,
      temperature: data.current.temp_c,
      city: data.location.name,
      country: data.location.country,
      feelsLike: data.current.feelslike_c,
      isDay: data.current.is_day,
      iconCode: data.current.condition.code,
    },
    ADDITIONAL_INFO: {
      wind: data.current.wind_kph,
      humidity: data.current.humidity,
      sunrise: convertTo24HourFormat(data.forecast.forecastday[0].astro.sunrise),
      sunset: convertTo24HourFormat(data.forecast.forecastday[0].astro.sunset),
      pressure: data.current.pressure_mb,
      uv: data.current.uv,
    },
    HOURLY_WEATHER: data.forecast.forecastday.flatMap(day =>
      day.hour.map(hour => ({
        time: hour.time,
        temperature: hour.temp_c,
        isDay: hour.is_day,
        iconCode: hour.condition.code,
      })),
    ),
  };

  return { weather, loading, error };
};

export default useWeather;
