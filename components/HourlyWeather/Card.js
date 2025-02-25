//Libs
import { Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';
import getTheme from '../../libs/getTheme';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

//Styles
import styles from './Card.styles';

const Card = ({ item }) => {
  const time = item?.time.split(' ')[1];
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.hourlyWeatherCard, styles[getTheme('background', theme)]]}>
      <Text style={[styles.temperatureText, styles[getTheme('text', theme)]]}>
        {item?.temperature.toFixed(0)}°
      </Text>
      {getIcons(item?.iconCode, item?.isDay, 'small')}
      <Text style={[styles.hour, styles[getTheme('text', theme)]]}>{time}</Text>
    </View>
  );
};

export default Card;
