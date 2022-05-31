import { StyleSheet, Text, View } from 'react-native';

//SVG Icons
import Pressure from '../Svgs/Pressure';
import Humidity from '../Svgs/Humidity';
import UV from '../Svgs/UV';
import Wind from '../Svgs/Windy';
import Sunrise from '../Svgs/Sunrise';
import Sunset from '../Svgs/Sunset';

const Card = ({ title, theme, loading, getTheme, condition, unit }) => {
  const ConditionsIcons = {
    Wind: Wind,
    Press: Pressure,
    Humidity: Humidity,
    Sunrise: Sunrise,
    Sunset: Sunset,
    UV: UV,
  };
  const ConditionIconComponent = ConditionsIcons[title];

  return (
    <View style={styles.conditions_card}>
      <ConditionIconComponent theme={theme} />
      <Text style={styles.condition_title}>
        {title}:{' '}
        {loading ? (
          `- - ${unit ? unit : ''}`
        ) : (
          <Text style={[styles.bold, getTheme('text')]}>{`${condition}${
            unit ? unit : ''
          }`}</Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conditions_card: {
    flexDirection: 'row',
    width: '50%',
    paddingVertical: 8,
  },

  condition_title: {
    fontSize: 17,
    color: '#777575',
    marginLeft: 5,
  },

  bold: {
    fontWeight: '500',
  },
});

export default Card;
