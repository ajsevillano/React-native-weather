import { StatusBar } from 'expo-status-bar';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useState, useEffect } from 'react';
import AdditionalInfoCard from './components/AdditionalInfoCard/';
import WeatherCard from './components/WeatherCard';
import HourlyWeather from './components/HourlyWeather';

export default function App() {
  const [cityName, setcityName] = useState('Lewes');
  const [countryName, setCountryName] = useState('');
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setCurrent('');
      const cityCoordinates = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
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

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar backgroundColor="#f5f5f5" />
      {/* Conditionally render the weatherCard if there is data from the fetch. */}
      {loading && (
        <View style={styles.weatherCardLoading}>
          <Text>Loading...</Text>
        </View>
      )}
      {current ? (
        <>
          <WeatherCard
            current={current}
            cityName={cityName}
            countryName={countryName}
          />
          <AdditionalInfoCard current={current} />
          <HourlyWeather />
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    marginTop: Constants.statusBarHeight,
    color: 'white',
    flexGrow: 0,
  },

  weatherCardLoading: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
});
