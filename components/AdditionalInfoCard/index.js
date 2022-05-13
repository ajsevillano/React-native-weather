import { StyleSheet, Text, View } from 'react-native';

const AdditionalInfoCard = ({ current }) => {
  return (
    <View style={styles.additionalInfo}>
      <Text style={styles.moreInfo}>Additional info</Text>
      <View style={styles.infoBlock}>
        <Text style={styles.humidity}>Wind: {current.humidity} m/h</Text>
        <Text style={styles.humidity}>Humidity: {current.wind_speed}%</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.humidity}>Sunrise: {getTime(current.sunrise)}</Text>
        <Text style={styles.humidity}>Sunset: {getTime(current.sunset)}</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.humidity}>Pressure: {current.pressure} mb</Text>
        <Text style={styles.humidity}>UV: {current.uvi} </Text>
      </View>
    </View>
  );
};

const getTime = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const time = dateObject.toString().split(' ');
  return time[4]?.split('').slice(0, 5);
};

const styles = StyleSheet.create({
  additionalInfo: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
  },

  moreInfo: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#273365',
  },

  humidity: {
    fontSize: 17,
    color: '#777575',
  },

  infoBlock: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

export default AdditionalInfoCard;
