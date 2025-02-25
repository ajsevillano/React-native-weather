import Svg, { Path, Polyline } from 'react-native-svg';

const Stormy = ({ width, height, theme }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-cloud-storm'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#8d8686'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    width={width}
    height={height}
  >
    <Path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <Path d='M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1' />
    <Polyline points='13 14 11 18 14 18 12 22' />
  </Svg>
);

export default Stormy;
