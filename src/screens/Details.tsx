import {useRoute} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetGroupForecast} from '../hooks';
import {LocationItem} from '../components/LocationItem';
import {Weather} from '../types';

export const Details: FC = () => {
  const {id} = useRoute().params;
  const {data} = useGetGroupForecast(id);

  const [weather, _] = useState<Weather | undefined>(
    data.find(el => el.id === id),
  );

  if (!weather) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LocationItem weather={weather} />

      <DetailRow title="Humidity" value={`${weather.main.humidity}%`} />
      <DetailRow title="Pressure" value={`${weather.main.pressure} hPa`} />
      <DetailRow title="Windspeed" value={`${weather.wind.speed} mph`} />
      <DetailRow title="Cloud Cover" value={`${weather.clouds.all} %`} />
    </View>
  );
};

const DetailRow: FC<{title: string; value: string}> = ({title, value}) => {
  return (
    <View style={styles.rowContainer}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E3E6',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 0.2,
  },
});
