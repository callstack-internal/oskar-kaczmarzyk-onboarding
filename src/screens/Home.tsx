import React, {FC} from 'react';
import {Locations, Error} from '../components';
import {useGetGroupForecast} from '../hooks';
import {Wrapper} from './Wrapper';

export const Home: FC = () => {
  const {data, isError} = useGetGroupForecast();
  return <Wrapper>{isError ? <Error /> : <Locations data={data} />}</Wrapper>;
};
