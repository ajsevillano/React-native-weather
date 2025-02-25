import Svg, { Path } from 'react-native-svg';

const CloudyDay = ({ width, height, theme }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 88 88'
    fill='none'
    width={width}
    height={height}
  >
    <Path
      d='M70.6451 40.445C76.0791 35.4894 76.467 27.0669 71.5114 21.6329C66.5558 16.1988 58.1333 15.811 52.6992 20.7666'
      stroke='#FFBF00'
      strokeWidth='5.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M21.667 65.9999C17.092 65.9999 12.7044 64.2615 9.4694 61.1672C6.2344 58.0728 4.41699 53.876 4.41699 49.4999C4.41699 45.1238 6.2344 40.927 9.4694 37.8326C12.7044 34.7383 17.092 32.9999 21.667 32.9999C22.7475 28.1862 25.9085 23.956 30.4545 21.2399C32.7054 19.895 35.2287 18.9622 37.8802 18.495C40.5316 18.0277 43.2594 18.0351 45.9077 18.5166C48.5561 18.9981 51.0731 19.9443 53.3151 21.3013C55.5571 22.6583 57.4801 24.3994 58.9745 26.4253C60.4688 28.4512 61.5051 30.7221 62.0243 33.1084C62.5435 35.4948 62.5353 37.9497 62.0003 40.3332H65.667C69.0706 40.3332 72.3348 41.6853 74.7415 44.092C77.1483 46.4988 78.5003 49.763 78.5003 53.1666C78.5003 56.5702 77.1483 59.8344 74.7415 62.2411C72.3348 64.6478 69.0706 65.9999 65.667 65.9999H21.667Z'
      stroke='#9E9E9E'
      strokeWidth='5.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M62 2C63.1046 2 64 2.99137 64 4.21429V7.16667C64 8.38958 63.1046 9.38095 62 9.38095C60.8954 9.38095 60 8.38958 60 7.16667V4.21429C60 2.99137 60.8954 2 62 2ZM80.4809 10.3247C81.2619 11.1895 81.2619 12.5915 80.4809 13.4562L78.6142 15.5229C77.8332 16.3876 76.5668 16.3876 75.7858 15.5229C75.0047 14.6582 75.0047 13.2561 75.7858 12.3914L77.6525 10.3247C78.4335 9.46001 79.6998 9.46001 80.4809 10.3247ZM81.3333 30.7857C81.3333 29.5628 82.2288 28.5714 83.3333 28.5714H86C87.1046 28.5714 88 29.5628 88 30.7857C88 32.0086 87.1046 33 86 33H83.3333C82.2288 33 81.3333 32.0086 81.3333 30.7857Z'
      fill='#FFBF00'
    />
  </Svg>
);

export default CloudyDay;
