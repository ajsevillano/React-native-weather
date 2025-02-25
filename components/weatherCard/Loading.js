//Libs
import Svg, { Circle } from 'react-native-svg';
import { StyleSheet, Text } from 'react-native';
import getTheme from '../../libs/getTheme';

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
      <Text style={styles[getTheme('text')]}>Loading</Text>
      <Text style={[styles.temperature_number, styles[getTheme('text', theme)]]}>
        --°
      </Text>
      <Text style={styles.location}>Loading</Text>
      <Text style={styles.feels_like}>Feels like: Loading</Text>
    </>
  );
};

export default Loading;
