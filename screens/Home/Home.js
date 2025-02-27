//Libs
import { ScrollView, RefreshControl, Text } from 'react-native';
import useWeather from '../../hooks/useWeather';
import * as NavigationBar from 'expo-navigation-bar';

//Context
import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../../context/theme';

//Components
import AdditionalInfo from '../../components/AdditionalInfo';
import WeatherCard from '../../components/WeatherCard';
import HourlyWeather from '../../components/HourlyWeather';
import { StatusBar } from 'expo-status-bar';

//Styles
import styles from './Home.styles';

const Home = ({ route }) => {
  const location = `${route.params.location.coords.latitude},${route.params.location.coords.longitude}`;
  const { weather, loading, error } = useWeather(location);

  const { theme } = useContext(ThemeContext);

  //Refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadHomeScreen = async () => {
      NavigationBar.setBackgroundColorAsync(theme.background.primary);
    };
    loadHomeScreen();
  }, [refreshing]);

  // // When the user pulls down on the screen, the screen will refresh and the data will be fetched again.
  const onRefresh = () => {
    setRefreshing(true);
    useWeather(location);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <>
      {!weather && error?.status === 401 && (
        <ScrollView
          style={[styles.container, { backgroundColor: theme.background.secondary }]}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <StatusBar
            hidden={false}
            style='auto'
            backgroundColor={theme === 'light' ? theme.background.secondary : '#222222'}
          />
          <Text style={styles.light_text}>Ups! Something went wrong</Text>
          <Text style={styles.error_text}>{error.message}</Text>
        </ScrollView>
      )}

      {weather && (
        <ScrollView
          style={[styles.container, { backgroundColor: theme.background.secondary }]}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <StatusBar
            hidden={false}
            style='auto'
            backgroundColor={theme.background.secondary}
          />
          <WeatherCard current={weather?.BASIC_INFO || {}} loading={loading} />
          <AdditionalInfo InfoObject={weather?.ADDITIONAL_INFO} loading={loading} />
          <HourlyWeather hourly={weather?.HOURLY_WEATHER} loading={loading} />
        </ScrollView>
      )}
    </>
  );
};

export default Home;
