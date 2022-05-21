//Libs
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
//Components
import HourlyWeatherCard from './HourlyWeatherCard';

const HourlyWeather = ({ hourly }) => {
  /* Filtering the hourly array to only show the next 8 hours. */
  const filterHours =
    hourly && hourly.filter((hour, index) => index > 0 && index < 8);

  return (
    <View style={styles.hourlySectionContainer}>
      <View>
        <Text style={styles.titleHeader}>Hourly weather</Text>
      </View>
      {!hourly ? (
        <>
          <View style={styles.loadingIndicatorContainer}>
            <Text style={styles.loadingText}>Loading</Text>
            <ActivityIndicator size="large" color="#273365" />
          </View>
        </>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={filterHours}
          renderItem={({ item }) => <HourlyWeatherCard item={item} />}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  hourlySectionContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'white',
    backgroundColor: 'beige',
    // paddingLeft: 40,
    // paddingRight: 40,
    // paddingBottom: 20,
  },

  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#273365',
    // paddingBottom: 20,
  },

  loadingIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },

  loadingText: {
    marginBottom: 20,
  },
});

export default HourlyWeather;
