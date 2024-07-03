import React, {FC} from 'react';
import {Locations} from '../components';
import {useGetGroupForecast} from '../hooks';
import {StyleSheet, View} from 'react-native';

export const Home: FC = () => {
  const {data} = useGetGroupForecast();

  return (
    <View style={styles.container}>
      <Locations data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E3E6',
  },
});
