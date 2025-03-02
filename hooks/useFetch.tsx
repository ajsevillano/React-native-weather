import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const CACHE_CONFIG = {
  expirationTimeInMinutes: 30,
  key: 'weather_cache',
};

const CACHE_EXPIRATION_TIME = CACHE_CONFIG.expirationTimeInMinutes * 60 * 1000;

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUrl();
  }, [url]);

  const fetchUrl = async () => {
    try {
      setLoading(true);

      // Check if there are cached data
      const cachedData = await getCachedData();

      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        Alert.alert(
          'Datos cargados desde la caché',
          'Los datos son válidos y se han recuperado del caché.',
        );
        return;
      }

      // If there are no cached data, fetch the data from the API
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 401) {
          throw { status: response.status, message: `Invalid API key` };
        }
        throw new Error('An error occurred');
      }
      const freshData = await response.json();
      setData(freshData);

      // Save the data in the cache
      await saveDataToCache(freshData);
      Alert.alert(
        'Datos cargados desde la API',
        'Los datos se han obtenido de la API y se han guardado en el caché.',
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchUrl };
}

// Get cached data
const getCachedData = async () => {
  try {
    const cachedDataString = await AsyncStorage.getItem(CACHE_CONFIG.key);
    if (cachedDataString) {
      const { timestamp, data } = JSON.parse(cachedDataString);
      const now = new Date().getTime();
      if (now - timestamp < CACHE_EXPIRATION_TIME) {
        return data;
      }
    }
    return null;
  } catch (error) {
    console.error('Error al recuperar datos del caché:', error);
    return null;
  }
};

// Function to save the data in the cache
const saveDataToCache = async data => {
  try {
    const cacheEntry = {
      timestamp: new Date().getTime(),
      data,
    };
    await AsyncStorage.setItem(CACHE_CONFIG.key, JSON.stringify(cacheEntry));
    console.log('Datos guardados en caché:', cacheEntry); // Debugging
  } catch (error) {
    console.error('Error al guardar datos en el caché:', error);
  }
};
