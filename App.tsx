// modules
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
// navigation
import AppNavigator from './src/navigation/appNavigator';
// theme
import {theme} from './src/theme';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
