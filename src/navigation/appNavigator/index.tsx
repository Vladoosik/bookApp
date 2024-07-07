// modules
import React from 'react';
// constants
import {Stack} from '../../constants/stack';
// navigation
import BottomTabDiscover from '../bottomTabDiscover';
// screen
import {ReaderScreen} from '../../screens';

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'bottomTabDiscover'}
        options={{headerShown: false}}
        component={BottomTabDiscover}
      />
      <Stack.Screen
        name={'reader'}
        options={{headerShown: false}}
        component={ReaderScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
