import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
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
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=`
      );
      const coordinatesData = await cityCoordinates.json();
      const lon = coordinatesData.coord.lon;
      const lat = coordinatesData.coord.lat;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=`
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
      <Text style={styles.header}>
        Your name is {current && current.weather[0].main}
      </Text>
      <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={(val) => setName(val)} style={styles.input} />
        <Text style={styles.buttoncolor}>Get weather</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
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
});
