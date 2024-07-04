import React, {FC} from 'react';
import {FlatList, Text} from 'react-native';
import {LocationItem} from './LocationItem';
import {Weather} from '../types';
import {useNavigation} from '@react-navigation/native';
import {useGetGroupForecast} from '../hooks';

type LocationsProps = {
  data: Weather[];
};

export const Locations: FC<LocationsProps> = ({data}) => {
  const {isLoading, refetch} = useGetGroupForecast();
  const {navigate} = useNavigation();

  const handleRefresh = () => {
    refetch();
  };

  const handleDetailsNavigation = (id: number) => {
    navigate('Details', {id});
  };

  const getEmptyState = () => {
    if (isLoading) {
      return null;
    }
    return <Text>No forecasts to be shown.</Text>;
  };

  return (
    <FlatList
      refreshing={isLoading}
      onRefresh={handleRefresh}
      data={data}
      ListEmptyComponent={getEmptyState()}
      renderItem={({item}) => (
        <LocationItem
          weather={item}
          onPress={() => handleDetailsNavigation(item.id)}
        />
      )}
    />
  );
};
