import Svg, { Path } from 'react-native-svg';

const ClearNight = ({ width, height, theme }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-moon'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#FFBF00'
    fill='#FFBF00'
    strokeLinecap='round'
    strokeLinejoin='round'
    width={width}
    height={height}
  >
    <Path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <Path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
  </Svg>
);

export default ClearNight;
