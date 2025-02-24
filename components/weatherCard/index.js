//Libs
import getTheme from '../../libs/getTheme';
import { StyleSheet, Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';
//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';
//Components
import Loading from './Loading';
//SVG icons
import Location from '../Svgs/Location';
// Styles
import styles from './WeatherCard.styles';

const WeatherCard = ({ current, loading }) => {
  const { weather, temperature, city, country, feelsLike, isDay, iconCode } = current;
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, styles[getTheme('background', theme)]]}>
      {loading ? (
        <Loading />
      ) : (
        current && (
          <>
            {getIcons(iconCode, isDay, 'big')}
            <Text style={styles[getTheme('text', theme)]}>{weather}</Text>
            <Text style={[styles.temperature_number, styles[getTheme('text', theme)]]}>
              {/* {current.temp.toFixed(0)}° */}
              {temperature?.toFixed(0)}°
            </Text>

            <View style={styles.location_container}>
              <Location />
              <Text style={styles.location}>
                {city}, {country}
              </Text>
            </View>
            <Text style={styles.feels_like}>Feels like: {feelsLike?.toFixed(0)}°C</Text>
          </>
        )
      )}
    </View>
  );
};

export default WeatherCard;
