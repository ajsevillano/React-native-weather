//Libs
import { Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

//Styles
import styles from './Card.styles';

const Card = ({ item }) => {
  const time = item?.time.split(' ')[1];
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.hourlyWeatherCard, { backgroundColor: '#f5f5f5' }]}>
      <Text style={[styles.temperatureText, { color: theme.text }]}>
        {item?.temperature.toFixed(0)}°
      </Text>
      {getIcons(item?.iconCode, item?.isDay, 'small')}
      <Text style={[styles.hour, { color: theme.text }]}>{time}</Text>
    </View>
  );
};

export default Card;
