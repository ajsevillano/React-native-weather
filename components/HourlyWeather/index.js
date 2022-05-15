//Libs
import { StyleSheet, Text, View, FlatList } from 'react-native';
//Components
import HourlyWeatherCard from './HourlyWeatherCard';

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
          renderItem={({ item }) => <HourlyWeatherCard item={item} />}
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
});

export default HourlyWeather;
