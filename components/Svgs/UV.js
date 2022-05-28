import Svg, { Path } from 'react-native-svg';

const UV = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eyeglass"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#273365"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M8 4H6L3 14M16 4h2l3 10M10 16h4M21 16.5a3.5 3.5 0 0 1-7 0V14h7v2.5M10 16.5a3.5 3.5 0 0 1-7 0V14h7v2.5" />
  </Svg>
);

export default UV;
