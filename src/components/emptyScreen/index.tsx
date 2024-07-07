// modules
import React from 'react';
import {Text, View} from 'react-native';
// styles
import {styles} from './styles.ts';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This screen is empty ¯\_(ツ)_/¯</Text>
    </View>
  );
};

export default EmptyScreen;
