import Svg, { Path } from 'react-native-svg';

const Location = ({ props, theme }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657Z"
      fill="#E9E7E7"
      stroke="#D0CFCF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
      fill="#F5F5F5"
      stroke="#D0CFCF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Location;
