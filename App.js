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

  const fetchData = async (city) => {
    try {
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
    } catch (error) {
      setFetchError(`City doesn't exist`);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>{fetchError && fetchError}</Text>
      <TextInput onChangeText={(val) => setName(val)} style={styles.input} />
      <Button title="Update name" onPress={fetchData} />
    
      <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={(val) => setName(val)} style={styles.input} />
        <TouchableOpacity onPress={fetchData}>
          <Text style={styles.buttoncolor}>Get weather</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.currentWeather}>
        Weahter: {current && current.weather[0].main}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
    flexDirection: 'column',
  },
  inputContainer: {
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#dcdfe0',
    borderRadius: 10,
  },
  input: {
    flex: 2,
    color: '#2c3e50',
    margin: 10,
    padding: 8,
    fontSize: 30,
  },
  buttoncolor: {
    flex: 1,
    backgroundColor: 'coral',
    margin: 10,
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: 16,
  },
  currentWeather: {
    fontSize: 26,
  },
});
