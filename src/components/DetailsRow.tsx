import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DetailsRow: FC<{title: string; value: string}> = ({
  title,
  value,
}) => {
  return (
    <View style={styles.rowContainer}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 0.2,
  },
});
