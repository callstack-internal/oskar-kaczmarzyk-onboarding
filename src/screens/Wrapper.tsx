import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E3E6',
  },
});
