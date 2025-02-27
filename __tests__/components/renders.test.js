//Libs
import renderer from 'react-test-renderer';

//Components
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import AdditionalInfoCard from '../../components/AdditionalInfo/Card';
import HourlyWeather from '../../components/HourlyWeather';
import WeatherCard from '../../components/WeatherCard';
import Button from '../../components/Button/Button';

describe('Test all components render properly', () => {
  it(`Additional info component renders correctly`, () => {
    const tree = renderer.create(<AdditionalInfo />);
    expect(tree).toMatchSnapshot();
  });

  it(`Hourly Weather component renders correctly`, () => {
    const tree = renderer.create(<HourlyWeather />);
    expect(tree).toMatchSnapshot();
  });
  it(`Weather card renders correctly`, () => {
    const tree = renderer.create(<WeatherCard />);
    expect(tree).toMatchSnapshot();
  });
  it(`Button renders correctly`, () => {
    const tree = renderer.create(<Button />);
    expect(tree).toMatchSnapshot();
  });
});
