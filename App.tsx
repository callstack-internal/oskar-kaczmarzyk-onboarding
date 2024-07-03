/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from './src/screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Weather'}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{title: 'Details', headerBackTitle: 'Back'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
