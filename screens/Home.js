//Libs
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, RefreshControl, Alert } from 'react-native';
import * as Location from 'expo-location';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import useFetch from '../libs/useFetch';

//Components
import AdditionalInfoCard from '../components/AdditionalInfoCard';
import WeatherCard from '../components/WeatherCard';
import HourlyWeather from '../components/HourlyWeather';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  //Location info
  const [coordinates, setCoordinates] = useState({});
  const [cityAndCountry, setCityAndCountry] = useState({});
  const { data, error, loading } = useFetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${thelat}&lon=${thelon}&limit=5&appid=${API_KEY}`
  );

  //Weather states
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [hourly, setHourly] = useState('');

  //Refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadHomeScreen = async () => {
      askPermision();
      const location = await getUserLocation();
      const latitude = prepareLatAndLong(location.coords.latitude);
      const longitude = prepareLatAndLong(location.coords.longitude);
      fetchCityAndCountry(latitude, longitude);
      setCoordinates({ latitude, longitude });
    };
    loadHomeScreen();
  }, []);

  const fetchCityAndCountry = async (thelat, thelon) => {
    setCurrent('');
    const getCityandCountry = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${thelat}&lon=${thelon}&limit=5&appid=${API_KEY}`
    );
    const coordinatesData = await getCityandCountry.json();

    setCityAndCountry({
      country: data[0].country,
      cityName: data[0].name,
    });
    fetchWeatherInfo(thelat, thelon);
  };

  const fetchWeatherInfo = async (thelat, thelon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${thelat}&lon=${thelon}&units=metric&exclude=minutely&appid=${API_KEY}`
    );
    const data = await res.json();
    setCurrent(data.current);
    setHourly(data.hourly);
    setWeekly(data.daily.filter((data, index) => index !== 0));
  };

  /* Asking for permission to access the user's location. */
  const askPermision = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'This app needs access to your location to show the weather in your area',
        [{ text: 'OK' }]
      );
    }
  };

  //It returns a promise that resolves to the user's current location.
  const getUserLocation = async () => {
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000,
    });
    return location;
  };

  // When the user pulls down on the screen, the screen will refresh and the data will be fetched again.
  const onRefresh = () => {
    setRefreshing(true);
    fetchCityAndCountry(coordinates.latitude, coordinates.longitude);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  /* Slicing the latitude and longitude to 7 digits. */
  const prepareLatAndLong = (coord) => {
    return Number(coord.toString().slice(0, 7));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar hidden={false} backgroundColor="#f5f5f5" />
      <WeatherCard
        current={current}
        cityName={cityAndCountry.cityName}
        countryName={cityAndCountry.country}
      />
      <AdditionalInfoCard current={current} />
      <HourlyWeather hourly={hourly} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    color: 'white',
  },
});

export default Home;
