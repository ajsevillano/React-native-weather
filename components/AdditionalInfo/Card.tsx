//Libs
import { Text, View } from 'react-native';
//Context
import { useContext } from 'react';
import ThemeContext from '@context/theme';
// Components
import { Pressure, Humidity, UV, Wind, Sunrise, Sunset } from '@components/Svgs';
// Styles
import styles from './Card.styles';

const Card = ({ title, loading, condition, unit }) => {
  const { theme } = useContext(ThemeContext);

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
          <Text style={[styles.bold, { color: theme.text }]}>{`${condition} ${
            unit ? unit : ''
          }`}</Text>
        )}
      </Text>
    </View>
  );
};

export default Card;
