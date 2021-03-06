//Libs
import { StyleSheet, ScrollView, RefreshControl, Alert } from 'react-native';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import useFetch from '../../libs/useFetch';
import * as Location from 'expo-location';
import getTheme from '../../libs/getTheme';

//Context
import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../../context/theme';

//Components
import AdditionalInfo from '../../components/AdditionalInfo';
import WeatherCard from '../../components/WeatherCard';
import HourlyWeather from '../../components/HourlyWeather';
import { StatusBar } from 'expo-status-bar';

const Home = ({ route }) => {
  const [cityAndCountry, setCityAndCountry] = useState({});
  const { data, error, loading, fetchUrl } = useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${route.params.location.coords.latitude}&lon=${route.params.location.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`
  );
  const {
    data: coorData,
    error: coorError,
    loading: coordLoading,
    fetchUrl: coordfetchUrl,
  } = useFetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${route.params.location.coords.latitude}&lon=${route.params.location.coords.longitude}&limit=5&appid=${API_KEY}`
  );

  //Theme from Context
  const theme = useContext(ThemeContext);

  //Weather states
  const [current, setCurrent] = useState(null);
  const [weekly, setWeekly] = useState([]);
  const [hourly, setHourly] = useState(null);

  //Refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadHomeScreen = async () => {
      askPermision();
      getCityAndCountry();
      getWeatherInfo();
    };
    loadHomeScreen();
  }, [data, coorData, refreshing]);

  const getCityAndCountry = async () => {
    setCityAndCountry({
      country: coorData[0]?.country,
      cityName: coorData[0]?.name,
    });
  };

  const getWeatherInfo = async () => {
    setCurrent(data.current);
    setHourly(data.hourly);
    setWeekly(data.daily);
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

  // // When the user pulls down on the screen, the screen will refresh and the data will be fetched again.
  const onRefresh = () => {
    setRefreshing(true);
    fetchUrl();
    coordfetchUrl();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={[styles.container, styles[getTheme('background', theme)]]}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar
        hidden={false}
        style="auto"
        backgroundColor={theme === 'light' ? '#f5f5f5' : '#222222'}
      />
      <WeatherCard
        current={current}
        loading={loading}
        cityName={cityAndCountry.cityName}
        countryName={cityAndCountry.country}
      />
      <AdditionalInfo current={current} loading={loading} />
      <HourlyWeather hourly={hourly} loading={loading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    color: 'white',
  },
  light_background: {
    backgroundColor: '#f5f5f5',
  },
  dark_background: {
    backgroundColor: '#222222',
  },
});

export default Home;
