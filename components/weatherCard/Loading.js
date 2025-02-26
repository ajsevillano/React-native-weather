//Libs
import Svg, { Circle } from 'react-native-svg';
import { Text } from 'react-native';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';
// Styles
import styles from './WeatherCard.styles';

const Loading = () => {
  //Theme from Context
  const theme = useContext(ThemeContext);
  return (
    <>
      <Svg height='88' width='88'>
        <Circle cx='40' cy='40' r='40' fill={theme === 'light' ? '#eaeaea' : '#414141'} />
      </Svg>
      <Text style={{ color: theme.text }}>Loading</Text>
      <Text style={[styles.temperature_number, { color: theme.text }]}>--°</Text>
      <Text style={styles.location}>Loading</Text>
      <Text style={styles.feels_like}>Feels like: Loading</Text>
    </>
  );
};

export default Loading;
