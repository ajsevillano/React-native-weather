//Libs
import renderer from 'react-test-renderer';

//Components
import AdditionalInfoCard from '../../components/AdditionalInfoCard';
import HourlyWeather from '../../components/HourlyWeather';
import HourlyWeatherCard from '../../components/HourlyWeather/HourlyWeatherCard';
import WeatherCard from '../../components/WeatherCard';

describe('Test all components render properly', () => {
  it(`Additional info card renders correctly`, () => {
    const tree = renderer.create(<AdditionalInfoCard></AdditionalInfoCard>);
    expect(tree).toMatchSnapshot();
  });
  it(`Hourly Weather component renders correctly`, () => {
    const tree = renderer.create(<HourlyWeather></HourlyWeather>);
    expect(tree).toMatchSnapshot();
  });
  it(`Hourly Weather card component renders correctly`, () => {
    const tree = renderer.create(<HourlyWeatherCard></HourlyWeatherCard>);
    expect(tree).toMatchSnapshot();
  });
  it(`Weather card renders correctly`, () => {
    const tree = renderer.create(<WeatherCard></WeatherCard>);
    expect(tree).toMatchSnapshot();
  });
});
