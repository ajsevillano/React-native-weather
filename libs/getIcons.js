//SVG Icons (Big)
import Clouds from '../assets/weatherIcons/big/clouds.svg';
import Sunny from '../assets/weatherIcons/big/clear.svg';
import Rain from '../assets/weatherIcons/big/rain.svg';
import Storm from '../assets/weatherIcons/big/storm.svg';
import SunRain from '../assets/weatherIcons/big/sun-rain.svg';
import ClearNight from '../assets/weatherIcons/big/clear-night.svg';
import SunClouds from '../assets/weatherIcons/big/sun-clouds.svg';
import SunCloudsNight from '../assets/weatherIcons/big/sun-clouds-night.svg';

//SVG Icons (small)
import CloudsMini from '../assets/weatherIcons/small/clouds.svg';
import SunnyMini from '../assets/weatherIcons/small/clear.svg';
import RainMini from '../assets/weatherIcons/small/rain.svg';
import StormMini from '../assets/weatherIcons/small/storm.svg';
import SunRainMini from '../assets/weatherIcons/small/sun-rain.svg';
import ClearNightMini from '../assets/weatherIcons/small/clear-night.svg';
import SunCloudsMini from '../assets/weatherIcons/small/sun-clouds.svg';
import SunCloudsNightMini from '../assets/weatherIcons/small/sun-clouds-night.svg';

/**
 * If the weather is cloudy, return the big cloud icon, otherwise return the big sun icon.
 * @param weather - [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}]
 * @param iconSize - 'big' or 'small'
 * @returns A function that returns a component.
 */
const getIcons = (weather, iconSize) => {
  switch (true) {
    case weather?.icon === '11d':
      return iconSize === 'big' ? <Storm /> : <StormMini />;

    case weather?.icon === '03d' ||
      weather?.icon === '03n' ||
      weather?.icon === '04d' ||
      weather?.icon === '04n':
      return iconSize === 'big' ? <Clouds /> : <CloudsMini />;

    case weather?.icon === '02d':
      return iconSize === 'big' ? <SunClouds /> : <SunCloudsMini />;

    case weather?.icon === '02n':
      return iconSize === 'big' ? <SunCloudsNight /> : <SunCloudsNightMini />;

    case weather?.icon === '10d':
      return iconSize === 'big' ? <SunRain /> : <SunRainMini />;

    case weather?.icon === '09d':
      return iconSize === 'big' ? <Rain /> : <RainMini />;

    case weather?.icon === '01d':
      return iconSize === 'big' ? <Sunny /> : <SunnyMini />;

    case weather?.icon === '01n':
      return iconSize === 'big' ? <ClearNight /> : <ClearNightMini />;

    default:
      null;
  }
};

export default getIcons;
