import React from 'react';
import {View, Button} from 'react-native';
import {styles} from './LoginStyle';

export const Login = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="To Home" color="#333" />
    </View>
  );
};
