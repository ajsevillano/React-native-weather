import { StyleSheet, Text, View, FlatList } from 'react-native';
import Clouds from '../../assets/weatherIcons/small/Clouds.svg';
import Rain from '../../assets/weatherIcons/small/Rain.svg';
import Sunny from '../../assets/weatherIcons/small/Clear.svg';

const HourlyWeather = ({ hourly }) => {
  const getTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return time[4]?.split('').slice(0, 5);
  };

  const getWeatherIcon = (weather) => {
    switch (true) {
      case weather[0].main === 'Clouds':
        return <Clouds />;

      case weather[0].main === 'Rain':
        return <Rain />;

      default:
        return <Sunny />;
    }
  };

  return (
    <>
      <View style={styles.hourlySectionContainer}>
        <View>
          <Text style={styles.titleHeader}>Hourly weather</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={hourly}
          renderItem={({ item }) => (
            <View style={styles.hourlyWeatherCard}>
              <Text style={styles.temperatureText}>
                {item.temp.toFixed(0)}°
              </Text>
              {getWeatherIcon(item.weather)}
              <Text style={styles.hour}>{getTime(item.dt)}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hourlySectionContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
  },

  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#273365',
    paddingBottom: 20,
  },

  hourlyWeatherCard: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginRight: 20,
  },

  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#273365',
    marginBottom: 15,
  },

  hour: {
    marginTop: 15,
    color: '#273365',
  },
});

export default HourlyWeather;
