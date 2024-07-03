import React, {FC} from 'react';
import {Text, View} from 'react-native';

export const Home: FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Home Screen</Text>
    </View>
  );
};
