import React from 'react';
import {Text} from 'react-native';
import {styles} from './MyTextStyle';

export const MyText = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export const MyTextBold = ({text, style}) => {
  return <Text style={[styles.textBold, style]}>{text}</Text>;
};
