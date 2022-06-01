import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';
import Loading from './Loading';

const WeatherCard = ({ current, cityName, countryName, loading, theme }) => {
  const screenTheme = {
    light: {
      background: 'light_background',
      text: 'light_text',
    },
    dark: {
      background: 'dark_background',
      text: 'dark_text',
    },
  };

  const getTheme = (component) =>
    theme === 'light'
      ? [screenTheme.light[component]]
      : [screenTheme.dark[component]];

  return (
    <View style={[styles.container, styles[getTheme('background')]]}>
      {loading ? (
        <Loading theme={theme} getTheme={getTheme} />
      ) : (
        current && (
          <>
            {getIcons(current.weather[0].icon, 'big')}
            <Text style={styles[getTheme('text')]}>
              {current.weather[0].description}
            </Text>
            <Text style={[styles.temperature_number, styles[getTheme('text')]]}>
              {current.temp.toFixed(0)}°
            </Text>
            <Text style={styles.location}>
              {cityName}, {countryName}
            </Text>
            <Text style={styles.feels_like}>
              Feels like: {current.feels_like.toFixed(0)}°C
            </Text>
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
    marginLeft: 10,
  },

  location: {
    fontSize: 26,
    color: '#818181',
    margin: 0,
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
