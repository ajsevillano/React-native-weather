import { useEffect, useState } from 'react';
import { getCachedData, saveDataToCache } from '@libs/cacheHelpers';

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
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchUrl };
}
