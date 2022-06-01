//Libs
import { StyleSheet, Text, View, FlatList } from 'react-native';
//Components
import Card from './Card';
import Loading from './Loading';

const HourlyWeather = ({ hourly, loading, theme }) => {
  /* Filtering the hourly array to only show the next 8 hours. */
  const filterHours =
    hourly && hourly.filter((hour, index) => index > 0 && index < 8);

  const screenTheme = {
    light: {
      background: 'light_background',
      text: 'light_text',
    },
    dark: {
      background: 'dark_background',
      text: 'dark_text',
    },
  };

  const getTheme = (component) =>
    theme === 'light'
      ? styles[screenTheme.light[component]]
      : styles[screenTheme.dark[component]];

  return (
    <View style={[styles.Container, getTheme('background')]}>
      <View>
        <Text style={[styles.titleHeader, getTheme('text')]}>
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
