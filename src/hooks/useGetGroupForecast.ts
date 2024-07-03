import {API_URL, API_KEY} from '@env';
import {useQuery} from '@tanstack/react-query';
import {mapLocationCodes} from '../helpers/mapLocationCodes';
import {Weather} from '../types';

export const useGetGroupForecast = (): {
  data: Weather[];
  isFetching: boolean;
  isError: boolean;
} => {
  const URI =
    `${API_URL}/group?` +
    new URLSearchParams({
      id: mapLocationCodes(),
      appId: API_KEY.toString(),
    }).toString();

  const {data, isFetching, isError} = useQuery({
    queryKey: ['groupForecast'],
    queryFn: () => fetch(URI).then(res => res.json()),
  });

  return {
    data: data ? data.list : [],
    isFetching,
    isError,
  };
};
