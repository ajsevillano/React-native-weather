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

const HourlyWeather = ({ hourly, loading }) => {
  /* Filtering the hourly array to only show the next 8 hours. */
  const filterHours =
    hourly && hourly.filter((hour, index) => index > -1 && index < 8);

  return (
    <View style={styles.hourlySectionContainer}>
      <View>
        <Text style={styles.titleHeader}>Hourly weather</Text>
      </View>
      {loading ? (
        <>
          <View style={styles.loadingIndicatorContainer}>
            <Text style={styles.loadingText}>Loading</Text>
            <ActivityIndicator size="large" color="#273365" />
          </View>
        </>
      ) : (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={filterHours}
            renderItem={({ item, index }) => (
              <HourlyWeatherCard item={item} index={index} />
            )}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  hourlySectionContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingLeft: 40,
    paddingRight: 40,
  },

  titleHeader: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#273365',
  },

  loadingIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 33,
  },

  loadingText: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#273365',
  },
});

export default HourlyWeather;
