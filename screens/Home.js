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

const Home = ({ route }) => {
  const { data, error, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${route.params.age.coords.latitude}&lon=${route.params.age.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`
  );
  const {
    data: coorData,
    error: coorError,
    loading: coordLoading,
  } = useFetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${route.params.age.coords.latitude}&lon=${route.params.age.coords.longitude}&limit=5&appid=${API_KEY}`
  );

  //Weather states
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [hourly, setHourly] = useState('');
  const [cityAndCountry, setCityAndCountry] = useState('');

  //Refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadHomeScreen = async () => {
      // askPermision();
      fetchCityAndCountry();
      fetchWeatherInfo();
    };
    loadHomeScreen();
  }, [data, coorData]);

  const fetchCityAndCountry = async () => {
    setCityAndCountry({
      country: coorData[0]?.country,
      cityName: coorData[0]?.name,
    });
  };

  const fetchWeatherInfo = async () => {
    setCurrent(data?.current);
    setHourly(data?.hourly);
    setWeekly(data?.daily.filter((data, index) => index !== 0));
  };

  // /* Asking for permission to access the user's location. */
  // const askPermision = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     Alert.alert(
  //       'Permission denied',
  //       'This app needs access to your location to show the weather in your area',
  //       [{ text: 'OK' }]
  //     );
  //   }
  // };

  // // When the user pulls down on the screen, the screen will refresh and the data will be fetched again.
  const onRefresh = () => {
    setRefreshing(true);
    fetchCityAndCountry(coordinates.latitude, coordinates.longitude);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  // /* Slicing the latitude and longitude to 7 digits. */
  // const prepareLatAndLong = (coord) => {
  //   return Number(coord.toString().slice(0, 7));
  // };

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
