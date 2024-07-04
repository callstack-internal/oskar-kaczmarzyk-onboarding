import React, {FC} from 'react';
import {Locations} from '../components';
import {useGetGroupForecast} from '../hooks';
import {Wrapper} from './Wrapper';

export const Home: FC = () => {
  const {data} = useGetGroupForecast();

  return (
    <Wrapper>
      <Locations data={data} />
    </Wrapper>
  );
};
