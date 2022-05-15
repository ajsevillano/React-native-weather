//Libs
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getTime } from '../../libs/time';
import { getWeatherIcon } from '../../libs/getIcons';

const HourlyWeather = ({ hourly }) => {
  /* Filtering the hourly array to only show the next 8 hours. */
  const filterHours = hourly.filter((hour, index) => index > 0 && index < 8);

  return (
    <>
      <View style={styles.hourlySectionContainer}>
        <View>
          <Text style={styles.titleHeader}>Hourly weather</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={filterHours}
          renderItem={({ item }) => (
            <View style={styles.hourlyWeatherCard}>
              <Text style={styles.temperatureText}>
                {item.temp.toFixed(0)}°
              </Text>
              {getWeatherIcon(item.weather, 'small')}
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
