import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface CacheEntry {
  timestamp: number;
  data: any;
}

const CACHE_CONFIG = {
  expirationTimeInMinutes: 30,
  key: 'weather_cache',
};

const CACHE_EXPIRATION_TIME = CACHE_CONFIG.expirationTimeInMinutes * 60 * 1000;

export const getCachedData = async () => {
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
    Alert.alert(
      'Error to get data from cache',
      'An unknown error occurred while getting the data from the cache.',
    );
    return null;
  }
};

export const saveDataToCache = async (data: any): Promise<void> => {
  try {
    const cacheEntry: CacheEntry = {
      timestamp: new Date().getTime(),
      data,
    };
    await AsyncStorage.setItem(CACHE_CONFIG.key, JSON.stringify(cacheEntry));
  } catch (error) {
    Alert.alert(
      'Error to save data in cache',
      'An unknown error occurred while saving the data in the cache.',
    );
  }
};
