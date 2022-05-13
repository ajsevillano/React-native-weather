import { StyleSheet, Text, View } from 'react-native';
import SVGImg from '../../assets/cloudy.svg';

const WeatherCard = ({ current, cityName, countryName }) => {
  return (
    <View style={styles.weatherCard}>
      <SVGImg />
      <Text>{current.weather[0].description}</Text>
      <Text style={styles.temperature}>{current.temp.toFixed(0)}°</Text>
      <Text style={styles.currentWeather}>
        {cityName}, {countryName}
      </Text>
      <Text style={styles.feelsLike}>
        Feels like: {current.feels_like.toFixed(0)}°C
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherCard: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    padding: 20,
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
