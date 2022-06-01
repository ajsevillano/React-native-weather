//Libs
import { StyleSheet, Text, View, FlatList } from 'react-native';
import getTheme from '../../libs/getTheme';
//Components
import Card from './Card';
import Loading from './Loading';

const HourlyWeather = ({ hourly, loading, theme }) => {
  /* Filtering the hourly array to only show the next 8 hours. */
  const filterHours =
    hourly && hourly.filter((hour, index) => index > 0 && index < 8);

  return (
    <View style={[styles.Container, styles[getTheme('background', theme)]]}>
      <View>
        <Text style={[styles.titleHeader, styles[getTheme('text')]]}>
          Hourly weather
        </Text>
      </View>
      {loading ? (
        <Loading theme={theme} />
      ) : (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={filterHours}
            renderItem={({ item }) => <Card theme={theme} item={item} />}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
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

  //Theme
  light_background: {
    backgroundColor: 'white',
  },
  dark_background: {
    backgroundColor: '#1b1b1b',
  },

  light_text: {
    color: '#273365',
  },
  dark_text: {
    color: 'white',
  },
});

export default HourlyWeather;
