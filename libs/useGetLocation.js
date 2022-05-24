import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

//It returns a promise that resolves to the user's current location.
const useGetLocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
          maximumAge: 10000,
        });
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { location };
};

export default useGetLocation;
