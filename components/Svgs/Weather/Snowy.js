import Svg, { Path } from 'react-native-svg';

const Snowy = ({ width, height, theme }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-cloud-snow'
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
    <Path d='M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7' />
    <Path d='M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01' />
  </Svg>
);

export default Snowy;
