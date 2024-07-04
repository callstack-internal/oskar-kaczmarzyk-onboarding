import {useRoute} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {useGetGroupForecast} from '../hooks';
import {LocationItem} from '../components/LocationItem';
import {Weather} from '../types';
import {Wrapper} from './Wrapper';
import {DetailsRow} from '../components';

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
    <Wrapper>
      <LocationItem weather={weather} />

      <DetailsRow title="Humidity" value={`${weather.main.humidity}%`} />
      <DetailsRow title="Pressure" value={`${weather.main.pressure} hPa`} />
      <DetailsRow title="Windspeed" value={`${weather.wind.speed} mph`} />
      <DetailsRow title="Cloud Cover" value={`${weather.clouds.all} %`} />
    </Wrapper>
  );
};
