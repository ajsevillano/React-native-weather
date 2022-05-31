import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';
import Svg, { Circle } from 'react-native-svg';

const WeatherCard = ({ current, cityName, countryName, loading, theme }) => {
  const screenTheme = {
    light: {
      container: styles.lighteWeatherCard,
      text: styles.lightTemperatureText,
    },
    dark: {
      container: styles.darkeWeatherCard,
      text: styles.darkTemperatureText,
    },
  };

  const getTheme = (component) => {
    return theme === 'light'
      ? screenTheme.light[component]
      : screenTheme.dark[component];
  };

  return (
    <View style={[styles.weatherCard, getTheme('container')]}>
      {loading ? (
        <>
          <Svg height="88" width="88">
            <Circle
              cx="40"
              cy="40"
              r="40"
              fill={theme === 'light' ? '#eaeaea' : '#414141'}
            />
          </Svg>
          <Text style={getTheme('text')}>Loading</Text>
          <Text style={[styles.temperature, getTheme('text')]}>--°</Text>
          <Text style={[styles.currentWeather, getTheme('text')]}>Loading</Text>
          <Text style={[styles.feelsLike, getTheme('text')]}>
            Feels like: Loading
          </Text>
        </>
      ) : (
        current && (
          <>
            {getIcons(current.weather[0].icon, 'big')}
            <Text style={getTheme('text')}>
              {current.weather[0].description}
            </Text>
            <Text style={[styles.temperature, getTheme('text')]}>
              {current.temp.toFixed(0)}°
            </Text>
            <Text style={styles.currentWeather}>
              {cityName}, {countryName}
            </Text>
            <Text style={styles.feelsLike}>
              Feels like: {current.feels_like.toFixed(0)}°C
            </Text>
          </>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  weatherCard: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lighteWeatherCard: {
    backgroundColor: '#f5f5f5',
  },
  darkeWeatherCard: {
    backgroundColor: '#222222',
  },
  temperature: {
    fontSize: 90,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  lightTemperatureText: {
    color: '#273365',
  },

  darkTemperatureText: {
    color: 'white',
  },

  currentWeather: {
    fontSize: 26,
    color: '#818181',
    margin: 0,
    padding: 0,
  },

  feelsLike: {
    marginTop: 5,
    fontSize: 16,
    color: '#aaaaaa',
  },
});

export default WeatherCard;
