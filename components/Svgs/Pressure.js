import Svg, { Path } from 'react-native-svg';

const Pressure = ({ props, theme }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-temperature"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={theme === 'light' ? '#273365' : '#d3d9ff'}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M10 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0v8.5M10 9h4" />
  </Svg>
);

export default Pressure;
