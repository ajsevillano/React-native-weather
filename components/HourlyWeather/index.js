import { StyleSheet, Text, View, FlatList } from 'react-native';
import Windy from '../../assets/weatherIcons/wind.svg';

const HourlyWeather = () => {
  return (
    <>
      <View style={styles.hourlySectionContainer}>
        <Text style={styles.titleHeader}>Weather by hours</Text>

        <View style={styles.hourlyWeatherCardsContainer}>
          <View style={styles.hourlyWeatherCard}>
            <Text>12°</Text>
            <Windy />
            <Text>17:00</Text>
          </View>
          <View style={styles.hourlyWeatherCard}>
            <Text>12°</Text>
            <Windy />
            <Text>18:00</Text>
          </View>
          <View style={styles.hourlyWeatherCard}>
            <Text>12°</Text>
            <Windy />
            <Text>19:00</Text>
          </View>
          <View style={styles.hourlyWeatherCard}>
            <Text>12°</Text>
            <Windy />
            <Text>20:00</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HourlyWeather;

const styles = StyleSheet.create({
  hourlySectionContainer: {
    flex: 1,
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

  hourlyWeatherCardsContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hourlyWeatherCard: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    paddingTop: 30,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
});
