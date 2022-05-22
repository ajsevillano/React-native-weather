//Libs
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  Alert,
  View,
} from 'react-native';
import * as Location from 'expo-location';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
//Components
import AdditionalInfoCard from '../components/AdditionalInfoCard';
import WeatherCard from '../components/WeatherCard';
import HourlyWeather from '../components/HourlyWeather';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  //Location info
  const [coordinates, setCoordinates] = useState({});
  const [cityAndCountry, setCityAndCountry] = useState({});

  //Weather states
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [hourly, setHourly] = useState('');

  //Other
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchUserLocation = async () => {
      /* Asking for permission to access the user's location. */
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission denied',
          'This app needs access to your location to show the weather in your area',
          [{ text: 'OK' }]
        );
      }

      /* Getting the user's location. */
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
      });

      /* Slicing the latitude and longitude to 7 digits. */
      const latitude = Number(location.coords.latitude.toString().slice(0, 7));
      const longitude = Number(
        location.coords.longitude.toString().slice(0, 7)
      );

      fetchCityAndCountry(latitude, longitude);
      setCoordinates({ latitude, longitude });
    };
    fetchUserLocation();
  }, []);

  const fetchCityAndCountry = async (thelat, thelon) => {
    setCurrent('');
    const getCityandCountry = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${thelat}&lon=${thelon}&limit=5&appid=4b6e93d558237270549de87a4606266d`
    );
    const coordinatesData = await getCityandCountry.json();

    setCityAndCountry({
      country: coordinatesData[0].country,
      cityName: coordinatesData[0].name,
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

  // When the user pulls down on the screen, the screen will refresh and the data will be fetched again.
  const onRefresh = () => {
    setRefreshing(true);
    fetchCityAndCountry(coordinates.latitude, coordinates.longitude);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View
      style={styles.container}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green',
    marginTop: Constants.statusBarHeight,
    color: 'white',
  },

  weatherCardLoading: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
});

export default Home;
