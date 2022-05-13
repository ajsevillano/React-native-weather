import { StatusBar } from 'expo-status-bar';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import SVGImg from './assets/cloudy.svg';
import { useState, useEffect } from 'react';

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

  const getTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return time[4]?.split('').slice(0, 5);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" />
      {/* Conditionally render the card if there is data from the fetch. */}
      {loading && (
        <View style={styles.Card}>
          <Text>Loading...</Text>
        </View>
      )}
      {current ? (
        <>
          <View style={styles.Card}>
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
          <View style={styles.additionalInfo}>
            <Text style={styles.moreInfo}>Additional info</Text>
            <View style={styles.infoBlock}>
              <Text style={styles.humidity}>Wind: {current.humidity} m/h</Text>
              <Text style={styles.humidity}>
                Humidity: {current.wind_speed}%
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.humidity}>
                Sunrise: {getTime(current.sunrise)}
              </Text>
              <Text style={styles.humidity}>
                Sunset: {getTime(current.sunset)}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.humidity}>
                Pressure: {current.pressure} mb
              </Text>
              <Text style={styles.humidity}>UV: {current.uvi} </Text>
            </View>
          </View>
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

  Card: {
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
  additionalInfo: {
    flex: 1,
    backgroundColor: 'white',
  },

  moreInfo: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#273365',
  },

  humidity: {
    fontSize: 17,
    color: '#777575',
  },

  infoBlock: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    justifyContent: 'space-between',
  },
});
