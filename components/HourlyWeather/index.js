//Libs
import { Text, View, FlatList } from 'react-native';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

//Components
import Card from './Card';
import Loading from './Loading';

// Styles
import styles from './HourlyWeather.styles';

const HourlyWeather = ({ hourly, loading }) => {
  const HOURS_TO_SHOW = 12;
  const { theme } = useContext(ThemeContext);

  // Filter the hourly array to only show the next 12 hours.
  const now = new Date();
  const next12Hours = hourly?.filter(hour => {
    const forecastTime = new Date(hour.time);
    const hourDifference = (forecastTime - now) / (1000 * 60 * 60);
    return hourDifference >= 0 && hourDifference < HOURS_TO_SHOW;
  });

  return (
    <View style={[styles.Container, { backgroundColor: theme.background }]}>
      <View>
        <Text style={[styles.titleHeader, { color: theme.text }]}>Hourly weather</Text>
      </View>
      {loading ? (
        <Loading theme={theme} />
      ) : (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={next12Hours}
            renderItem={({ item }) => <Card item={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default HourlyWeather;
