import * as Location from 'expo-location';

export default getLocation = async () => {
  let location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
    maximumAge: 10000,
  });
  return location;
};
