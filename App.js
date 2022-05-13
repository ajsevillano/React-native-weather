import { StatusBar } from 'expo-status-bar';
import { API_KEY } from '@env';
import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import { useState, useEffect } from 'react';

export default function App() {
  const [example, setExample] = useState('default');
  const [name, setName] = useState('Lewes');
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [cityName, setCityName] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

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

  const getTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return time[4]?.split('').slice(0, 5);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>{fetchError && fetchError}</Text>
      <TextInput onChangeText={(val) => setName(val)} style={styles.input} />

    
      <StatusBar style="auto" /> */}
      <StatusBar backgroundColor="#f5f5f5" />
      {/* <View style={styles.inputContainer}>
        <TextInput onChangeText={(val) => setName(val)} style={styles.input} /> */}
      {/* A button that calls the fetchData function. */}
      {/* <TouchableOpacity onPress={fetchData}>
          <Text style={styles.buttoncolor}>Get weather</Text>
        </TouchableOpacity>
      </View> */}
      {/* Conditionally render the card if there is data from the fetch. */}
      {loading && <Text>Loading...</Text>}
      {current ? (
        <>
          <View style={styles.Card}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-cloud"
              width="88"
              height="88"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a4a4a4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <Path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
            </Svg>
            <Text>{current.weather[0].description}</Text>
            <Text style={styles.temperature}>{current.temp.toFixed(0)}°</Text>
            <Text style={styles.currentWeather}>{name}</Text>
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

  // input: {
  //   flex: 1,
  //   color: '#2c3e50',
  //   margin: 10,
  //   padding: 8,
  //   fontSize: 30,
  // },
  // buttoncolor: {
  //   margin: 10,
  //   textAlign: 'center',
  //   padding: 15,
  //   backgroundColor: '#3498db',
  //   fontSize: 16,
  // },
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
