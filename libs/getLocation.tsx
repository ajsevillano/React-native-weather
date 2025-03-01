import * as Location from 'expo-location';

const getLocation = async () => {
  let location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });
  return location;
};

export default getLocation;
