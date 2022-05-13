import { StatusBar } from 'expo-status-bar';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import SVGImg from './assets/cloudy.svg';
import { useState, useEffect } from 'react';
import AdditionalInfoCard from './components/AdditionalInfoCard/';

export default function App() {
  const [citiName, setcitiName] = useState('Lewes');
  const [countryName, setCountryName] = useState('');
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setCurrent('');
      const cityCoordinates = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${citiName}&units=metric&appid=${API_KEY}`
      );
      const coordinatesData = await cityCoordinates.json();
      const lon = coordinatesData.coord.lon;
      const lat = coordinatesData.coord.lat;
      setCountryName(coordinatesData.sys.country);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`
      );
      const Data = await res.json();
      /* Cleaning the state of fetchError. */
      setFetchError('');
      setCurrent(Data.current);
      setWeekly(Data.daily.filter((data, index) => index !== 0));
      setLoading(false);
    } catch (error) {
      setFetchError(`City doesn't exist`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" />
      {/* Conditionally render the weatherCard if there is data from the fetch. */}
      {loading && (
        <View style={styles.weatherCard}>
          <Text>Loading...</Text>
        </View>
      )}
      {current ? (
        <>
          <View style={styles.weatherCard}>
            <SVGImg />
            <Text>{current.weather[0].description}</Text>
            <Text style={styles.temperature}>{current.temp.toFixed(0)}°</Text>
            <Text style={styles.currentWeather}>
              {citiName}, {countryName}
            </Text>
            <Text style={styles.feelsLike}>
              Feels like: {current.feels_like.toFixed(0)}°C
            </Text>
          </View>
          <AdditionalInfoCard current={current} />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    flex: 1,
    marginTop: Constants.statusBarHeight,
    color: 'white',
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 20,
    borderWidth: 1,
    borderColor: '#dcdfe0',
    borderRadius: 10,
  },

  weatherIcon: {
    alignSelf: 'center',
  },

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
