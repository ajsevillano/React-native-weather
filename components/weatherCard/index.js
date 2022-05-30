import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';
import Svg, { Circle } from 'react-native-svg';

const WeatherCard = ({ current, cityName, countryName, loading }) => {
  return (
    <View style={styles.weatherCard}>
      {loading ? (
        <>
          <Svg height="88" width="88">
            <Circle cx="40" cy="40" r="40" fill="#eaeaea" />
          </Svg>
          <Text>Loading</Text>
          <Text style={styles.temperature}>--°</Text>
          <Text style={styles.currentWeather}>Loading</Text>
          <Text style={styles.feelsLike}>Feels like: Loading</Text>
        </>
      ) : (
        current && (
          <>
            {getIcons(current.weather[0].icon, 'big')}
            <Text>{current.weather[0].description}</Text>
            <Text style={styles.temperature}>{current.temp.toFixed(0)}°</Text>
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
    backgroundColor: '#f5f5f5',
  },

  temperature: {
    fontSize: 90,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#273365',
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
