import React, {FC, useRef} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Weather} from '../types';

type LocationItemProps = {
  weather: Weather;
  onPress?: () => void;
};

export const LocationItem: FC<LocationItemProps> = ({weather, onPress}) => {
  const _weather = useRef(weather.weather[0]);

  const {
    name,
    main: {temp},
  } = weather;

  return (
    <Pressable style={styles.container} onPress={() => onPress?.()}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${_weather.current.icon}.png`,
          }}
          style={styles.weatherIcon}
          alt="weather-icon"
        />

        <View>
          <Text style={styles.city}>{name}</Text>
          <Text style={styles.weather}>{_weather.current.main}</Text>
        </View>
      </View>

      <View style={styles.tempContainer}>
        <Text style={(styles.city, {color: '#FFF'})}>{temp} °F</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  weatherIcon: {
    width: 50,
    height: 50,
  },

  city: {
    fontSize: 16,
  },

  weather: {
    fontSize: 12,
    color: 'grey',
  },

  tempContainer: {
    padding: 6,
    width: 100,
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: 'teal',
  },

  temp: {
    fontSize: 12,
  },
});
