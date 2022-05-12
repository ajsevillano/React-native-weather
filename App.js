import { StatusBar } from 'expo-status-bar';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [example, setExample] = useState('default');
  const [name, setName] = useState('');
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [cityName, setCityName] = useState(``);
  const [loading, setLoading] = useState(false);

  const fetchData = async (city) => {
    try {
      setLoading(true);
      setCurrent('');
      const cityCoordinates = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`
      );
      const coordinatesData = await cityCoordinates.json();
      const lon = coordinatesData.coord.lon;
      const lat = coordinatesData.coord.lat;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`
      );
      const Data = await res.json();
      /* Cleaning the state of fetchError. */
      setFetchError('');
      setCurrent(Data.current);
      setCityName(city);
      setWeekly(Data.daily.filter((data, index) => index !== 0));
      setLoading(false);
    } catch (error) {
      setFetchError(`City doesn't exist`);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>{fetchError && fetchError}</Text>
      <TextInput onChangeText={(val) => setName(val)} style={styles.input} />

    
      <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={(val) => setName(val)} style={styles.input} />
        {/* A button that calls the fetchData function. */}
        <TouchableOpacity onPress={fetchData}>
          <Text style={styles.buttoncolor}>Get weather</Text>
        </TouchableOpacity>
      </View>
      {/* Conditionally render the card if there is data from the fetch. */}
      {loading && <Text>Loading...</Text>}
      {current ? (
        <View style={styles.Card}>
          <Text style={styles.currentWeather}>{name}</Text>
          <Text style={styles.temperature}>{current.temp.toFixed(0)}°C</Text>
          <Text style={styles.feelsLike}>
            Feels like: {current.feels_like.toFixed(0)}°C
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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

  input: {
    flex: 1,
    color: '#2c3e50',
    margin: 10,
    padding: 8,
    fontSize: 30,
  },
  buttoncolor: {
    backgroundColor: 'coral',
    margin: 10,
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: 16,
  },
  Card: {
    flexDirection: 'column',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#3498db',
  },
  currentWeather: {
    fontSize: 26,
    color: 'white',
  },

  temperature: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  feelsLike: {
    marginTop: 5,
    color: 'white',
    fontSize: 16,
  },
});
