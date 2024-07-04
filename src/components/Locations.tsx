import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {LocationItem} from './LocationItem';
import {Weather} from '../types';
import {useNavigation} from '@react-navigation/native';

type LocationsProps = {
  data: Weather[];
};

export const Locations: FC<LocationsProps> = ({data}) => {
  const {navigate} = useNavigation();

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <LocationItem
          weather={item}
          onPress={() => navigate('Details', {id: item.id})}
        />
      )}
    />
  );
};
