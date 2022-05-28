//SVG Icons (Big)
import Clouds from '../assets/weatherIcons/big/clouds.svg';
import Sunny from '../assets/weatherIcons/big/clear.svg';
import Rain from '../assets/weatherIcons/big/rain.svg';

//SVG Icons (small)
import CloudsMini from '../assets/weatherIcons/small/clouds.svg';
import SunnyMini from '../assets/weatherIcons/small/clear.svg';
import RainMini from '../assets/weatherIcons/small/rain.svg';

/**
 * If the weather is cloudy, return the big cloud icon, otherwise return the big sun icon.
 * @param weather - [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}]
 * @param iconSize - 'big' or 'small'
 * @returns A function that returns a component.
 */
const getIcons = (weather, iconSize) => {
  switch (true) {
    case weather?.main === 'Clouds':
      return iconSize === 'big' ? <Clouds /> : <CloudsMini />;

    case weather?.main === 'Rain':
      return iconSize === 'big' ? <Rain /> : <RainMini />;

    case weather?.main === 'Clear':
      return iconSize === 'big' ? <Sunny /> : <SunnyMini />;

    default:
      null;
  }
};

export default getIcons;
