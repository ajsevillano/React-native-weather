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
 * It returns an icon based on the weather icon code.
 * @param weather - {id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}
 * @param iconSize - 'big' or 'small'
 * @returns A React component.
 */
const getIcons = (weather, iconSize) => {
  switch (true) {
    case weather?.icon === '13d' || weather?.icon === '13n':
      return iconSize === 'big' ? (
        <Snow width={88} height={88} />
      ) : (
        <Snow width={35} height={35} />
      );

    case weather?.icon === '11d':
      return iconSize === 'big' ? (
        <Storm width={88} height={88} />
      ) : (
        <Storm width={35} height={35} />
      );

    case weather?.icon === '03d' ||
      weather?.icon === '03n' ||
      weather?.icon === '04d' ||
      weather?.icon === '04n':
      return iconSize === 'big' ? (
        <Clouds width={88} height={88} />
      ) : (
        <Clouds width={35} height={35} />
      );

    case weather?.icon === '02d':
      return iconSize === 'big' ? (
        <SunClouds width={88} height={88} />
      ) : (
        <SunClouds width={35} height={35} />
      );

    case weather?.icon === '02n':
      return iconSize === 'big' ? (
        <SunCloudsNight width={88} height={88} />
      ) : (
        <SunCloudsNight width={35} height={35} />
      );

    case weather?.icon === '10d':
      return iconSize === 'big' ? (
        <SunRain width={100} height={88} />
      ) : (
        <SunRain width={35} height={35} />
      );

    case weather?.icon === '09d':
      return iconSize === 'big' ? (
        <Rain width={88} height={88} />
      ) : (
        <Rain width={35} height={35} />
      );

    case weather?.icon === '01d':
      return iconSize === 'big' ? (
        <Sunny width={88} height={88} />
      ) : (
        <Sunny width={35} height={35} />
      );

    case weather?.icon === '01n':
      return iconSize === 'big' ? (
        <ClearNight width={88} height={88} />
      ) : (
        <ClearNight width={88} height={88} />
      );

    case weather?.icon === '10n':
      return iconSize === 'big' ? (
        <NightMoonRain width={88} height={88} />
      ) : (
        <NightMoonRain width={35} height={35} />
      );

    default:
      null;
  }
};

export default getIcons;
