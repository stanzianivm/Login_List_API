import { useState, useEffect } from 'react';

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

function useFetchData<T>(fetchFn: () => Promise<T>): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true; // Para evitar setState en un componente desmontado

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchFn();
        if (isMounted) {
          setData(result);
        }
      } catch (err: unknown) {
        if (isMounted) {
            if (err instanceof Error) {
                setError(err);
            }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]); // Dependencia en la función de fetch para refetch si cambia

  return { data, isLoading, error };
}

export default useFetchData;