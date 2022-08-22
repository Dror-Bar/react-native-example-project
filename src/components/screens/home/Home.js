import React from 'react';
import {View, Button} from 'react-native';
import {styles} from './HomeStyle';

export const Home = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="To Login" color="#333" />
    </View>
  );
};
