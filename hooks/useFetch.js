import { useEffect, useState } from 'react';

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
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 401) {
          throw { status: response.status, message: `Invalid API key` };
        }
        throw new Error('An error occurred');
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchUrl };
}
