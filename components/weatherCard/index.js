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
import CloudyNight from '../Svgs/Weather/CloudyNight';

const WeatherCard = ({ current, loading }) => {
  const { weather, temperature, city, country, feelsLike } = current;
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, styles[getTheme('background', theme)]]}>
      {loading ? (
        <Loading />
      ) : (
        current && (
          <>
            {/* {getIcons(current.condition.code, 'big')} */}
            {/* {getIcons('04d', 'big')} */}
            <CloudyNight />
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  temperature_number: {
    fontSize: 90,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  location: {
    flexDirection: 'column',
    fontSize: 26,
    color: '#818181',
    marginVertical: 0,
    marginLeft: 7,
    marginRight: 10,
    padding: 0,
  },

  feels_like: {
    marginTop: 5,
    fontSize: 16,
    color: '#aaaaaa',
  },

  //Theme
  light_background: {
    backgroundColor: '#f5f5f5',
  },
  dark_background: {
    backgroundColor: '#222222',
  },
  light_text: {
    color: '#273365',
  },
  dark_text: {
    color: 'white',
  },
});

export default WeatherCard;
