import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Windy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-wind"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24" />
  </Svg>
);

export default Windy;
