import {API_URL, API_KEY} from '@env';
import {QueryObserverResult, useQuery} from '@tanstack/react-query';
import {mapLocationCodes} from '../helpers/mapLocationCodes';
import {Weather} from '../types';

export const useGetGroupForecast = (): {
  data: Weather[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => Promise<QueryObserverResult<any, Error>>;
} => {
  const URI =
    `${API_URL}/group?` +
    new URLSearchParams({
      id: mapLocationCodes(),
      appId: API_KEY.toString(),
    }).toString();

  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: ['groupForecast'],
    queryFn: () => fetch(URI).then(res => res.json()),
  });

  return {
    data: data?.list ?? [],
    isLoading,
    isError,
    refetch,
  };
};
