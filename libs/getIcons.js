// SVG Icons
import ClearDay from '../components/Svgs/Weather/ClearDay';
import ClearNight from '../components/Svgs/Weather/ClearNight';
import Cloudy from '../components/Svgs/Weather/Cloudy';
import CloudyDay from '../components/Svgs/Weather/CloudyDay';
import CloudyNight from '../components/Svgs/Weather/CloudyNight';
import Rainy from '../components/Svgs/Weather/Rainy';
import RainySunDay from '../components/Svgs/Weather/RainySunDay';
import RainySunNight from '../components/Svgs/Weather/RainySunNight';
import Snowy from '../components/Svgs/Weather/Snowy';
import Stormy from '../components/Svgs/Weather/Stormy';

const weatherIconMap = {
  1000: { day: ClearDay, night: ClearNight },
  1003: { day: CloudyDay, night: CloudyNight },
  1006: { day: Cloudy, night: Cloudy },
  1009: { day: Cloudy, night: Cloudy },
  1030: { day: Cloudy, night: Cloudy },
  1063: { day: RainySunDay, night: RainySunNight },
  1087: { day: Stormy, night: Stormy },
  1114: { day: Snowy, night: Snowy },
  1117: { day: Snowy, night: Snowy },
  1135: { day: Cloudy, night: Cloudy },
  1147: { day: Cloudy, night: Cloudy },
  1183: { day: Rainy, night: Rainy },
  1189: { day: Rainy, night: Rainy },
  1195: { day: Rainy, night: Rainy },
  1198: { day: Rainy, night: Rainy },
  1201: { day: Rainy, night: Rainy },
  1216: { day: Snowy, night: Snowy },
  1225: { day: Snowy, night: Snowy },
  1237: { day: Snowy, night: Snowy },
  1273: { day: Stormy, night: Stormy },
  1276: { day: Stormy, night: Stormy },
  1282: { day: Snowy, night: Snowy },
};
const getIcons = (iconCode, isDay, iconSize) => {
  const timeOfDay = isDay ? 'day' : 'night';
  const WeatherIconComponent = weatherIconMap[iconCode]?.[timeOfDay] || Cloudy;

  return iconSize === 'big' ? (
    <WeatherIconComponent width={88} height={88} />
  ) : (
    <WeatherIconComponent width={35} height={35} />
  );
};

export default getIcons;
