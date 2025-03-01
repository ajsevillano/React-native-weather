import Svg, { Path } from 'react-native-svg';

const Humidity = ({ props, theme }) => (
  <Svg
    className='icon icon-tabler icon-tabler-droplet'
    width={20}
    height={20}
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke={theme === 'light' ? '#273365' : '#d3d9ff'}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <Path d='M0 0h24v24H0z' stroke='none' />
    <Path d='M6.8 11a6 6 0 1 0 10.396 0l-5.197-8-5.2 8z' />
  </Svg>
);

export default Humidity;
