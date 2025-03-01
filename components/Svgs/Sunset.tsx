import Svg, { Path } from 'react-native-svg';

const Sunset = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-sunset"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#ff9300"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7-.7.7M8 17a4 4 0 0 1 8 0M3 21h18M12 3v6l3-3M9 6l3 3" />
  </Svg>
);

export default Sunset;
