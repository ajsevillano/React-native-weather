import Svg, { Path, Circle } from 'react-native-svg';

const ClearDay = ({ width, height, theme }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-sun'
    width={width}
    height={height}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#ffbf00'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <Path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <Circle cx='12' cy='12' r='4' />
    <Path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
  </Svg>
);

export default ClearDay;
