//SVG Icons
import Snow from '../assets/weatherIcons/snow.svg';
import Clouds from '../assets/weatherIcons/clouds.svg';
import Sunny from '../assets/weatherIcons/clear.svg';
import Rain from '../assets/weatherIcons/rain.svg';
import Storm from '../assets/weatherIcons/storm.svg';
import SunRain from '../assets/weatherIcons/sun-rain.svg';
import ClearNight from '../assets/weatherIcons/clear-night.svg';
import SunClouds from '../assets/weatherIcons/sun-clouds.svg';
import SunCloudsNight from '../assets/weatherIcons/sun-clouds-night.svg';
import NightMoonRain from '../assets/weatherIcons/night-moon-rain.svg';

/**
 * It takes in a weather object and an iconSize string, and returns a component based on the weather
 * object's icon property.
 * @param weather - {
 * @param iconSize - 'big' or 'small'
 * @returns A function that returns a component.
 */

const getIcons = (weather, iconSize) => {
  const WeatherIcons = {
    '13d': Snow,
    '13n': Snow,
    '11d': Storm,
    '03d': Clouds,
    '03n': Clouds,
    '04d': Clouds,
    '04n': Clouds,
    '02d': SunClouds,
    '02n': SunCloudsNight,
    '10d': SunRain,
    '10n': NightMoonRain,
    '09d': Rain,
    '01d': Sunny,
    '01n': ClearNight,
  };
  const DynamicComponent = WeatherIcons[weather.icon];

  return iconSize === 'big' ? (
    <DynamicComponent width={88} height={88} />
  ) : (
    <DynamicComponent width={35} height={35} />
  );
};

export default getIcons;
