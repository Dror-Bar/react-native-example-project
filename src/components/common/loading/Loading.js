import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './LoadingStyle';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loading} size="large" />
    </View>
  );
};
