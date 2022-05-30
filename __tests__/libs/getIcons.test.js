//Libs
import renderer from 'react-test-renderer';
import getIcons from '../../libs/getIcons';
import Clouds from '../../assets/weatherIcons/clouds.svg';

describe('Test all components render properly', () => {
  it(`Additional info card renders correctly`, () => {
    expect(getIcons('03d', 'big')).toBe(<Clouds />);
  });
});
