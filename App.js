import { StatusBar } from 'expo-status-bar';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
} from 'react-native';
//Libs
import { useState, useEffect } from 'react';
//Components
import AdditionalInfoCard from './components/AdditionalInfoCard/';
import WeatherCard from './components/WeatherCard';
import HourlyWeather from './components/HourlyWeather';
import * as Location from 'expo-location';

export default function App() {
  //Location info
  const [cityName, setcityName] = useState('Lewes');
  const [countryName, setCountryName] = useState('');
  //Weather states
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [hourly, setHourly] = useState('');
  //Other
  const [fetchError, setFetchError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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
      setHourly(Data.hourly);
      setWeekly(Data.daily.filter((data, index) => index !== 0));
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
      <WeatherCard
        current={current}
        cityName={cityName}
        countryName={countryName}
      />
      <AdditionalInfoCard current={current} />
      <HourlyWeather hourly={hourly} />
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {location && location.coords.latitude}
        </Text>
      </View>
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
